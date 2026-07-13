#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const STATUS_FILE = path.join("00_Governance", "AKB-008-Projektstatus.md");

function usage() {
  console.error(
    [
      "Usage:",
      "  node tools/update-project-status.js [options]",
      "",
      "Options:",
      "  --evidence <id>",
      "  --evidence-status <status>",
      "  --test <id>",
      "  --test-status <status>",
      "  --task <task>",
      "  --task-status <status>",
      "  --current-sprint <sprint>",
      "  --next-sprint <next work package>",
    ].join("\n")
  );
}

function parseArgs(argv) {
  const args = {};
  const known = new Set([
    "--evidence",
    "--evidence-status",
    "--test",
    "--test-status",
    "--task",
    "--task-status",
    "--current-sprint",
    "--next-sprint",
  ]);

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!known.has(arg)) {
      throw new Error(`Unknown argument: ${arg}`);
    }

    const value = argv[i + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for ${arg}.`);
    }

    const key = arg.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    args[key] = value;
    i += 1;
  }

  if (args.evidence && !args.evidenceStatus) {
    throw new Error("--evidence-status is required when --evidence is used.");
  }
  if (args.evidenceStatus && !args.evidence) {
    throw new Error("--evidence is required when --evidence-status is used.");
  }
  if (args.test && !args.testStatus) {
    throw new Error("--test-status is required when --test is used.");
  }
  if (args.testStatus && !args.test) {
    throw new Error("--test is required when --test-status is used.");
  }
  if (args.task && !args.taskStatus) {
    throw new Error("--task-status is required when --task is used.");
  }
  if (args.taskStatus && !args.task) {
    throw new Error("--task is required when --task-status is used.");
  }
  if (
    !args.evidence &&
    !args.test &&
    !args.task &&
    !args.currentSprint &&
    !args.nextSprint
  ) {
    throw new Error("At least one update argument is required.");
  }

  return args;
}

function headingLevel(line) {
  const match = /^(#{1,6})\s+/.exec(line);
  return match ? match[1].length : 0;
}

function findSection(lines, heading) {
  const start = lines.findIndex((line) => line.trim() === heading);
  if (start === -1) {
    throw new Error(`Section not found: ${heading}`);
  }

  const level = headingLevel(lines[start]);
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    const currentLevel = headingLevel(lines[i]);
    if (currentLevel > 0 && currentLevel <= level) {
      end = i;
      break;
    }
  }

  return { start, end };
}

function isTableRow(line) {
  const trimmed = line.trim();
  return trimmed.startsWith("|") && trimmed.endsWith("|");
}

function cells(line) {
  return line
    .trim()
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());
}

function formatRow(values) {
  return `| ${values.join(" | ")} |`;
}

function findFirstTable(lines, section) {
  let start = -1;
  for (let i = section.start + 1; i < section.end; i += 1) {
    if (isTableRow(lines[i])) {
      start = i;
      break;
    }
  }

  if (start === -1) {
    throw new Error(`Table not found in section: ${lines[section.start].trim()}`);
  }

  let end = section.end;
  for (let i = start; i < section.end; i += 1) {
    if (!isTableRow(lines[i])) {
      end = i;
      break;
    }
  }

  return { start, end };
}

function updateTwoColumnRow(lines, table, key, value) {
  for (let i = table.start + 2; i < table.end; i += 1) {
    const row = cells(lines[i]);
    if (row[0] === key) {
      if (row.length !== 2) {
        throw new Error(`Expected two-column row for: ${key}`);
      }
      lines[i] = formatRow([row[0], value]);
      return;
    }
  }

  throw new Error(`Existing row not found: ${key}`);
}

function updateEvidenceStatus(lines, evidence, status) {
  const section = findSection(lines, "## 7 Evidenzstatus");
  const table = findFirstTable(lines, section);

  for (let i = table.start + 2; i < table.end; i += 1) {
    const row = cells(lines[i]);
    if (row[0] === evidence) {
      if (row.length !== 2) {
        throw new Error(`Expected two-column evidence row for: ${evidence}`);
      }
      lines[i] = formatRow([evidence, status]);
      return;
    }
  }

  throw new Error(`Existing evidence row not found: ${evidence}`);
}

function updateTestStatus(lines, test, status) {
  const section = findSection(lines, "## 8 Praxistests");
  const table = findFirstTable(lines, section);

  for (let i = table.start + 2; i < table.end; i += 1) {
    const row = cells(lines[i]);
    if (row[0] === test) {
      if (row.length !== 3) {
        throw new Error(`Expected three-column test row for: ${test}`);
      }
      lines[i] = formatRow([row[0], row[1], status]);
      return;
    }
  }

  throw new Error(`Existing test row not found: ${test}`);
}

function updateTaskStatus(lines, task, status) {
  const section = findSection(lines, "## 9 Offene Aufgaben");
  const table = findFirstTable(lines, section);

  for (let i = table.start + 2; i < table.end; i += 1) {
    const row = cells(lines[i]);
    if (row[1] === task) {
      if (row.length !== 3) {
        throw new Error(`Expected three-column task row for: ${task}`);
      }
      lines[i] = formatRow([row[0], row[1], status]);
      return;
    }
  }

  throw new Error(`Existing task row not found: ${task}`);
}

function updateCurrentStatus(lines, args) {
  const section = findSection(lines, "## 2 Aktueller Projektstatus");
  const table = findFirstTable(lines, section);

  if (args.currentSprint) {
    updateTwoColumnRow(lines, table, "Aktueller Sprint", args.currentSprint);
  }
  if (args.nextSprint) {
    updateTwoColumnRow(lines, table, "Nächstes Arbeitspaket", args.nextSprint);
  }
}

function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    usage();
    process.exit(2);
  }

  const filePath = path.resolve(STATUS_FILE);
  if (!fs.existsSync(filePath)) {
    throw new Error(`AKB-008 not found: ${STATUS_FILE.replace(/\\/g, "/")}`);
  }

  const original = fs.readFileSync(filePath, "utf8");
  const eol = original.includes("\r\n") ? "\r\n" : "\n";
  const lines = original.split(/\r?\n/);
  if (lines[lines.length - 1] === "") {
    lines.pop();
  }

  updateCurrentStatus(lines, args);

  if (args.evidence) {
    updateEvidenceStatus(lines, args.evidence, args.evidenceStatus);
  }
  if (args.test) {
    updateTestStatus(lines, args.test, args.testStatus);
  }
  if (args.task) {
    updateTaskStatus(lines, args.task, args.taskStatus);
  }

  fs.writeFileSync(filePath, `${lines.join(eol)}${eol}`, "utf8");
  console.log(`Updated ${STATUS_FILE.replace(/\\/g, "/")}`);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
