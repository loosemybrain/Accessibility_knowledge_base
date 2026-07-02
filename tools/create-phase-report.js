#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const DEFAULT_OUTPUT = "90_Projektverwaltung/Phasen";
const DEFAULT_TITLES = {
  "001a": "Automated Phase Documentation",
  "001b": "Automated Sprint Summary",
};
const STANDARD_SECTIONS = [
  "Ziel",
  "Ausgangslage",
  "Scope",
  "Umgesetzt",
  "Geänderte Dateien",
  "Validierung",
  "Nicht Bestandteil",
  "Risiken",
  "Ergebnis",
  "Nächste Phase",
];
const ALLOWED_STATUSES = new Set([
  "Phase abgeschlossen",
  "Phase teilweise abgeschlossen",
  "Phase fehlgeschlagen",
]);

function usage() {
  console.error(
    [
      "Usage:",
      "  node tools/create-phase-report.js <id> [--title <title>] [--output <directory>]",
      "  node tools/create-phase-report.js --id <id> --title <title> [--output <directory>]",
      "",
      "Examples:",
      '  node tools/create-phase-report.js 001a',
      '  node tools/create-phase-report.js --id 001 --title "Tooling Foundation"',
    ].join("\n")
  );
}

function parseList(value) {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseArgs(argv) {
  const args = {
    changedFiles: [],
    validation: [],
    status: "Phase abgeschlossen",
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--") {
      continue;
    }

    if (!arg.startsWith("--") && !args.id) {
      args.id = arg;
      continue;
    }

    if (
      arg === "--id" ||
      arg === "--title" ||
      arg === "--output" ||
      arg === "--status" ||
      arg === "--next-phase"
    ) {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`);
      }
      const key = arg.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      args[key] = value;
      i += 1;
      continue;
    }

    if (arg === "--validation" || arg === "--changed-files") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`);
      }
      const key = arg === "--validation" ? "validation" : "changedFiles";
      args[key] = parseList(value);
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!args.id) {
    throw new Error("Required argument: phase id.");
  }

  args.id = phaseId(args.id);
  args.title = (args.title || DEFAULT_TITLES[args.id] || "").trim();
  if (!args.title) {
    throw new Error("Title is required for unknown phase ids.");
  }

  if (!ALLOWED_STATUSES.has(args.status)) {
    throw new Error(`Unsupported status: ${args.status}`);
  }

  args.output = args.output || DEFAULT_OUTPUT;
  args.changedFiles = uniqueSorted(args.changedFiles);
  args.validation = uniqueSorted(args.validation);

  return args;
}

function phaseId(value) {
  const trimmed = value.trim();
  if (!/^[A-Za-z0-9-]+$/.test(trimmed)) {
    throw new Error("Phase id may contain only letters, numbers, and hyphens.");
  }
  return trimmed;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function metadata(args, created) {
  const validation = args.validation.length
    ? args.validation.map((item) => `  - ${item}`).join("\n")
    : "  - Noch nicht dokumentiert.";

  return [
    "---",
    `phase: ${args.id}`,
    `title: ${args.title}`,
    "status: completed",
    "",
    `created: ${created}`,
    `updated: ${today()}`,
    "",
    "validation:",
    validation,
    "",
    `next_phase: ${args.nextPhase || ""}`,
    "",
    "breaking_changes: false",
    "---",
    "",
  ].join("\n");
}

function sectionContent(section, args) {
  if (section === "Geänderte Dateien") {
    if (args.changedFiles.length === 0) {
      return "- Noch nicht dokumentiert.";
    }
    return args.changedFiles.map((file) => `- ${file}`).join("\n");
  }

  if (section === "Validierung") {
    if (args.validation.length === 0) {
      return "- Noch nicht dokumentiert.";
    }
    return args.validation.map((item) => `- ${item}`).join("\n");
  }

  if (section === "Ergebnis") {
    return args.status;
  }

  return "Noch nicht dokumentiert.";
}

function buildDocument(args) {
  return [
    metadata(args, today()),
    `# Phase ${args.id} - ${args.title}`,
    "",
    ...STANDARD_SECTIONS.flatMap((section) => [
      `## ${section}`,
      "",
      sectionContent(section, args),
      "",
    ]),
  ].join("\n");
}

function splitFrontMatter(text) {
  if (!text.startsWith("---\n")) {
    return { frontMatter: "", body: text };
  }

  const end = text.indexOf("\n---\n", 4);
  if (end === -1) {
    return { frontMatter: "", body: text };
  }

  return {
    frontMatter: text.slice(0, end + 5),
    body: text.slice(end + 5).replace(/^\n/, ""),
  };
}

function frontMatterScalar(frontMatter, key) {
  const match = new RegExp(`^${key}:[ \\t]*(.*)$`, "m").exec(frontMatter);
  const value = match ? match[1].trim() : "";
  return /^[A-Za-z_]+:/.test(value) ? "" : value;
}

function frontMatterList(frontMatter, key) {
  const lines = frontMatter.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === `${key}:`);
  const values = [];

  if (start === -1) {
    return values;
  }

  for (let i = start + 1; i < lines.length; i += 1) {
    const line = lines[i];
    if (/^[A-Za-z_]+:/.test(line)) {
      break;
    }

    const match = /^\s+-\s+(.+?)\s*$/.exec(line);
    if (match && match[1] !== "Noch nicht dokumentiert.") {
      values.push(match[1]);
    }
  }

  return values;
}

function headingText(line) {
  const match = /^##\s+(.+?)\s*$/.exec(line);
  return match ? match[1] : null;
}

function existingSections(body) {
  const sections = new Set();
  body.split(/\r?\n/).forEach((line) => {
    const heading = headingText(line);
    if (heading) {
      sections.add(heading);
    }
  });
  return sections;
}

function ensureTitle(body, args) {
  if (/^#\s+/m.test(body)) {
    return body;
  }

  return [`# Phase ${args.id} - ${args.title}`, "", body.trim()].filter(Boolean).join("\n");
}

function replaceSection(body, section, content) {
  const lines = body.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === `## ${section}`);

  if (start === -1) {
    return body;
  }

  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^##\s+/.test(lines[i])) {
      end = i;
      break;
    }
  }

  const replacement = [`## ${section}`, "", content, ""];
  return [...lines.slice(0, start), ...replacement, ...lines.slice(end)].join("\n").trimEnd();
}

function updateDocument(existing, args) {
  const parsed = splitFrontMatter(existing);
  const nextArgs = {
    ...args,
    validation: args.validation.length ? args.validation : frontMatterList(parsed.frontMatter, "validation"),
    nextPhase: args.nextPhase || frontMatterScalar(parsed.frontMatter, "next_phase"),
  };
  let body = ensureTitle(parsed.body.trimEnd(), nextArgs);
  const sections = existingSections(body);
  const additions = [];

  STANDARD_SECTIONS.forEach((section) => {
    if (!sections.has(section)) {
      additions.push(`## ${section}`, "", sectionContent(section, nextArgs), "");
    }
  });

  const createdMatch = /^created:\s*(.+)$/m.exec(parsed.frontMatter);
  const created = createdMatch ? createdMatch[1].trim() : today();

  if (args.changedFiles.length) {
    body = replaceSection(body, "Geänderte Dateien", sectionContent("Geänderte Dateien", args));
  }
  if (args.validation.length) {
    body = replaceSection(body, "Validierung", sectionContent("Validierung", args));
  }
  body = replaceSection(body, "Ergebnis", sectionContent("Ergebnis", args));

  const nextBody = additions.length ? `${body}\n\n${additions.join("\n").trimEnd()}` : body;

  return `${metadata(nextArgs, created)}${nextBody.trimEnd()}\n`;
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

  const outputDir = path.resolve(args.output);
  const fileName = `Phase-${args.id}-${slugify(args.title)}.md`;
  const outputPath = path.join(outputDir, fileName);

  fs.mkdirSync(outputDir, { recursive: true });

  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath, "utf8");
    fs.writeFileSync(outputPath, updateDocument(existing, args), "utf8");
    console.log(`Updated ${path.relative(process.cwd(), outputPath).replace(/\\/g, "/")}`);
    return;
  }

  fs.writeFileSync(outputPath, `${buildDocument(args).trimEnd()}\n`, "utf8");
  console.log(`Created ${path.relative(process.cwd(), outputPath).replace(/\\/g, "/")}`);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
