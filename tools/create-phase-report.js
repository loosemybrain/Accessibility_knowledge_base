#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function usage() {
  console.error(
    [
      "Usage:",
      "  node tools/create-phase-report.js --id <id> --title <title> [--output <directory>]",
      "",
      "Example:",
      '  node tools/create-phase-report.js --id 001 --title "Governance Foundation" --output "90_Projektverwaltung/Phasen"',
    ].join("\n")
  );
}

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--id" || arg === "--title" || arg === "--output") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`);
      }
      args[arg.slice(2)] = value;
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!args.id || !args.title) {
    throw new Error("Required arguments: --id, --title.");
  }

  args.output = args.output || "90_Projektverwaltung/Phasen";

  return args;
}

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function phaseId(value) {
  const trimmed = value.trim();
  if (!/^[A-Za-z0-9-]+$/.test(trimmed)) {
    throw new Error("Phase id may contain only letters, numbers, and hyphens.");
  }
  return trimmed;
}

function template(id, title) {
  const sections = [
    "## 1 Metadaten",
    "## 2 Ziel",
    "## 3 Bearbeiteter Scope",
    "## 4 Erstellte Dokumente",
    "## 5 Aktualisierte Dokumente",
    "## 6 Neue Evidenzen",
    "## 7 Neue Praxistests",
    "## 8 Neue Standards",
    "## 9 Architekturänderungen",
    "## 10 Automatisierungsgrad",
    "## 11 Lessons Learned",
    "## 12 Offene Punkte",
    "## 13 Risiken",
    "## 14 Nächste Phase",
  ];

  return [
    `# Phase ${id} – ${title}`,
    "",
    ...sections.flatMap((section) => [section, "", "Vorlage.", ""]),
  ].join("\n");
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

  const id = phaseId(args.id);
  const title = args.title.trim();
  const outputDir = path.resolve(args.output);
  const fileName = `Phase-${id}-${slugify(title)}.md`;
  const outputPath = path.join(outputDir, fileName);

  if (!title) {
    throw new Error("Title must not be empty.");
  }

  if (fs.existsSync(outputPath)) {
    throw new Error(`Output file already exists: ${path.relative(process.cwd(), outputPath)}`);
  }

  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(outputPath, `${template(id, title)}\n`, "utf8");
  console.log(`Created ${path.relative(process.cwd(), outputPath).replace(/\\/g, "/")}`);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
