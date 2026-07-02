#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const DEFAULT_OUTPUT = "90_Projektverwaltung/Sprintberichte";
const DEFAULT_PHASE_DIR = "90_Projektverwaltung/Phasen";
const STATUS_FILE = "00_Governance/AKB-008-Projektstatus.md";
const EVIDENCE_DIRS = [
  "01_Handbuecher/SAP_GUI/quellen",
];
const STANDARD_SECTIONS = [
  "Phase",
  "Titel",
  "Ziel",
  "Ergebnis",
  "Geänderte Dateien",
  "Validierungen",
  "Evidenzen",
  "Risiken",
  "Offene Punkte",
  "Nächste Phase",
];

function usage() {
  console.error(
    [
      "Usage:",
      "  node tools/create-sprint-summary.js <phase> [--phase-dir <directory>] [--output <directory>]",
      "",
      "Options:",
      "  --changed-files <comma separated files>",
      "  --validation <comma separated checks>",
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
    output: DEFAULT_OUTPUT,
    phaseDir: DEFAULT_PHASE_DIR,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--") {
      continue;
    }

    if (!arg.startsWith("--") && !args.phase) {
      args.phase = phaseId(arg);
      continue;
    }

    if (arg === "--output" || arg === "--phase-dir") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`);
      }
      const key = arg.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      args[key] = value;
      i += 1;
      continue;
    }

    if (arg === "--changed-files" || arg === "--validation") {
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

  if (!args.phase) {
    throw new Error("Required argument: phase.");
  }

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

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function findPhaseFile(args) {
  const dir = path.resolve(args.phaseDir);
  if (!fs.existsSync(dir)) {
    throw new Error(`Phase directory not found: ${args.phaseDir}`);
  }

  const matches = fs
    .readdirSync(dir)
    .filter((name) => name.startsWith(`Phase-${args.phase}-`) && name.endsWith(".md"))
    .sort((a, b) => a.localeCompare(b));

  if (matches.length === 0) {
    throw new Error(`Phase document not found for phase: ${args.phase}`);
  }
  if (matches.length > 1) {
    throw new Error(`Multiple phase documents found for phase: ${args.phase}`);
  }

  return path.join(dir, matches[0]);
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
  return match ? match[1].trim() : "";
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

function section(body, name) {
  const lines = body.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === `## ${name}`);
  if (start === -1) {
    return "";
  }

  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^##\s+/.test(lines[i])) {
      end = i;
      break;
    }
  }

  return lines.slice(start + 1, end).join("\n").trim();
}

function metadata(data) {
  return [
    "---",
    `phase: ${data.phase}`,
    `title: ${data.title}`,
    `date: ${data.date}`,
    "status: completed",
    "summary_version: 1",
    "---",
    "",
  ].join("\n");
}

function bulletList(values) {
  if (!values.length) {
    return "- Keine vorhanden.";
  }

  return values.map((value) => `- ${value}`).join("\n");
}

function referencesFromText(text) {
  const matches = text.match(/\b(?:AKB|ACC|PT)-[0-9][0-9A-Za-z]*(?:-[0-9A-Za-z]+)*\b/g) || [];
  return matches;
}

function evidenceFiles() {
  const files = [];
  EVIDENCE_DIRS.forEach((dir) => {
    const absolute = path.resolve(dir);
    if (!fs.existsSync(absolute)) {
      return;
    }

    fs.readdirSync(absolute)
      .filter((name) => name.endsWith(".md"))
      .forEach((name) => files.push(path.join(dir, name).replace(/\\/g, "/")));
  });
  return files;
}

function collectEvidence(phaseText) {
  const statusText = fs.existsSync(STATUS_FILE) ? fs.readFileSync(STATUS_FILE, "utf8") : "";
  return uniqueSorted([
    ...referencesFromText(phaseText),
    ...referencesFromText(statusText),
    ...evidenceFiles(),
  ]);
}

function phaseData(args) {
  const phasePath = findPhaseFile(args);
  const text = fs.readFileSync(phasePath, "utf8");
  const parsed = splitFrontMatter(text);
  const title = frontMatterScalar(parsed.frontMatter, "title") || `Phase ${args.phase}`;
  const validation = args.validation.length
    ? args.validation
    : frontMatterList(parsed.frontMatter, "validation");

  return {
    phasePath,
    text,
    body: parsed.body,
    phase: args.phase,
    title,
    ziel: section(parsed.body, "Ziel") || "Keine Angaben aus dem Phasendokument übernommen.",
    ergebnis: section(parsed.body, "Ergebnis") || "Keine Angaben aus dem Phasendokument übernommen.",
    risiken: section(parsed.body, "Risiken") || "Keine Risiken dokumentiert.",
    offenePunkte: section(parsed.body, "Offene Punkte") || "Keine offenen Punkte dokumentiert.",
    naechstePhase: section(parsed.body, "Nächste Phase") || "Keine nächste Phase dokumentiert.",
    validation,
  };
}

function sectionContent(name, data, args) {
  if (name === "Phase") {
    return data.phase;
  }
  if (name === "Titel") {
    return data.title;
  }
  if (name === "Ziel") {
    return data.ziel;
  }
  if (name === "Ergebnis") {
    return data.ergebnis;
  }
  if (name === "Geänderte Dateien") {
    return bulletList(args.changedFiles);
  }
  if (name === "Validierungen") {
    return bulletList(data.validation);
  }
  if (name === "Evidenzen") {
    return bulletList(collectEvidence(data.text));
  }
  if (name === "Risiken") {
    return data.risiken;
  }
  if (name === "Offene Punkte") {
    return data.offenePunkte;
  }
  if (name === "Nächste Phase") {
    return data.naechstePhase;
  }

  return "Keine Angaben.";
}

function buildDocument(data, args) {
  return [
    metadata({ phase: data.phase, title: data.title, date: today() }),
    "# Sprint",
    "",
    ...STANDARD_SECTIONS.flatMap((name) => [
      `## ${name}`,
      "",
      sectionContent(name, data, args),
      "",
    ]),
  ].join("\n").trimEnd();
}

function replaceSection(body, name, content) {
  const lines = body.split(/\r?\n/);
  const start = lines.findIndex((line) => line.trim() === `## ${name}`);

  if (start === -1) {
    return `${body.trimEnd()}\n\n## ${name}\n\n${content}`;
  }

  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (/^##\s+/.test(lines[i])) {
      end = i;
      break;
    }
  }

  return [...lines.slice(0, start), `## ${name}`, "", content, "", ...lines.slice(end)].join("\n").trimEnd();
}

function updateDocument(existing, data, args) {
  const parsed = splitFrontMatter(existing);
  let body = parsed.body.trimEnd();

  if (!/^#\s+Sprint/m.test(body)) {
    body = ["# Sprint", "", body].filter(Boolean).join("\n");
  }

  STANDARD_SECTIONS.forEach((name) => {
    body = replaceSection(body, name, sectionContent(name, data, args));
  });

  return `${metadata({ phase: data.phase, title: data.title, date: today() })}${body.trimEnd()}\n`;
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

  const data = phaseData(args);
  const outputDir = path.resolve(args.output);
  const outputPath = path.join(outputDir, `Sprint-${args.phase}.md`);

  fs.mkdirSync(outputDir, { recursive: true });

  if (fs.existsSync(outputPath)) {
    const existing = fs.readFileSync(outputPath, "utf8");
    fs.writeFileSync(outputPath, updateDocument(existing, data, args), "utf8");
    console.log(`Updated ${path.relative(process.cwd(), outputPath).replace(/\\/g, "/")}`);
    return;
  }

  fs.writeFileSync(outputPath, `${buildDocument(data, args)}\n`, "utf8");
  console.log(`Created ${path.relative(process.cwd(), outputPath).replace(/\\/g, "/")}`);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
