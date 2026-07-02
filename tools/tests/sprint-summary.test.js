#!/usr/bin/env node

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");

function runNode(args) {
  const result = spawnSync(process.execPath, args, {
    cwd: ROOT,
    encoding: "utf8",
  });

  if (result.status !== 0) {
    throw new Error(`${args.join(" ")} failed\n${result.stdout}\n${result.stderr}`);
  }

  return result;
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

const phaseDir = fs.mkdtempSync(path.join(os.tmpdir(), "akb-summary-phase-"));
const summaryDir = fs.mkdtempSync(path.join(os.tmpdir(), "akb-summary-output-"));

runNode([
  "tools/akb.js",
  "phase",
  "001b",
  "--output",
  phaseDir,
  "--validation",
  "validate,doctor,node --check tools/akb.js",
  "--changed-files",
  "tools/create-sprint-summary.js,tools/sprint-finish.js",
]);

runNode([
  "tools/akb.js",
  "sprint-summary",
  "001b",
  "--phase-dir",
  phaseDir,
  "--output",
  summaryDir,
  "--validation",
  "validate,doctor",
  "--changed-files",
  "tools/create-sprint-summary.js,tools/sprint-finish.js",
]);

const summaryPath = path.join(summaryDir, "Sprint-001b.md");
assert.ok(fs.existsSync(summaryPath), "summary should be created");

let text = read(summaryPath);
assert.ok(text.startsWith("---\nphase: 001b"), "metadata should exist");
assert.ok(text.includes("summary_version: 1"), "summary version should exist");
[
  "## Phase",
  "## Titel",
  "## Ziel",
  "## Ergebnis",
  "## Geänderte Dateien",
  "## Validierungen",
  "## Evidenzen",
  "## Risiken",
  "## Offene Punkte",
  "## Nächste Phase",
].forEach((heading) => assert.ok(text.includes(heading), `${heading} should exist`));
assert.ok(text.includes("- tools/create-sprint-summary.js"), "changed files should be copied");
assert.ok(text.includes("- validate"), "validation should be copied");
assert.ok(text.includes("01_Handbuecher/SAP_GUI/quellen/ACC-001-Accessibility-Mode.md"), "evidence files should be referenced");
assert.ok(text.includes("ACC-001-E03"), "project status references should be referenced");
assert.ok(text.includes("Keine Risiken") || text.includes("Risiken"), "risks should be present");

fs.appendFileSync(summaryPath, "\n## Manuelle Ergaenzung\n\nBleibt erhalten.\n", "utf8");
runNode([
  "tools/akb.js",
  "sprint-summary",
  "001b",
  "--phase-dir",
  phaseDir,
  "--output",
  summaryDir,
  "--validation",
  "validate,doctor",
  "--changed-files",
  "tools/create-sprint-summary.js,tools/sprint-finish.js",
]);

text = read(summaryPath);
assert.ok(text.includes("## Manuelle Ergaenzung"), "manual section should remain");
assert.strictEqual((text.match(/^# Sprint$/gm) || []).length, 1, "H1 should not duplicate");
assert.strictEqual(fs.readdirSync(summaryDir).filter((name) => name === "Sprint-001b.md").length, 1, "summary should not duplicate");

const finishPhaseDir = fs.mkdtempSync(path.join(os.tmpdir(), "akb-summary-finish-phase-"));
const finishSummaryDir = fs.mkdtempSync(path.join(os.tmpdir(), "akb-summary-finish-output-"));
runNode([
  "tools/sprint-finish.js",
  "--phase",
  "001b",
  "--output",
  finishPhaseDir,
  "--summary-output",
  finishSummaryDir,
]);
assert.ok(fs.existsSync(path.join(finishSummaryDir, "Sprint-001b.md")), "sprint finish should create summary");

console.log("Sprint summary tests passed.");
