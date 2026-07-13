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

function phaseFile(outputDir) {
  return path.join(outputDir, "Phase-001a-Automated-Phase-Documentation.md");
}

function testPhaseCreate(outputDir) {
  runNode(["tools/akb.js", "phase", "001a", "--output", outputDir]);
  const filePath = phaseFile(outputDir);
  assert.ok(fs.existsSync(filePath), "phase document should be created");

  const text = read(filePath);
  assert.ok(text.startsWith("---\nphase: 001a"), "metadata block should exist");
  [
    "## Ziel",
    "## Ausgangslage",
    "## Scope",
    "## Umgesetzt",
    "## Geänderte Dateien",
    "## Validierung",
    "## Nicht Bestandteil",
    "## Risiken",
    "## Ergebnis",
    "## Nächste Phase",
  ].forEach((heading) => assert.ok(text.includes(heading), `${heading} should exist`));
}

function testPhaseUpdatePreservesContent(outputDir) {
  const filePath = phaseFile(outputDir);
  fs.appendFileSync(filePath, "\n## Manuelle Ergaenzung\n\nBleibt erhalten.\n", "utf8");
  runNode(["tools/akb.js", "phase", "001a", "--output", outputDir, "--validation", "validate,doctor"]);

  const text = read(filePath);
  assert.ok(text.includes("## Manuelle Ergaenzung"), "manual section should remain");
  assert.ok(text.includes("Bleibt erhalten."), "manual content should remain");
  assert.strictEqual((text.match(/## Ziel/g) || []).length, 1, "template sections should not duplicate");
}

function testSprintFinish(outputDir) {
  runNode([
    "tools/sprint-finish.js",
    "--phase",
    "001a",
    "--output",
    outputDir,
    "--summary-output",
    outputDir,
  ]);
  const text = read(phaseFile(outputDir));
  assert.ok(text.includes("- validate"), "sprint finish should document validate");
  assert.ok(text.includes("- doctor"), "sprint finish should document doctor");
  assert.ok(text.includes("- node --check tools/akb.js"), "sprint finish should document node check");
}

function testMissingPhaseError() {
  const result = spawnSync(process.execPath, ["tools/sprint-finish.js"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  assert.notStrictEqual(result.status, 0, "missing phase should fail");
  assert.ok(result.stderr.includes("Required argument: --phase."), "missing phase error should be clear");
}

const outputDir = fs.mkdtempSync(path.join(os.tmpdir(), "akb-phase-test-"));

testPhaseCreate(outputDir);
testPhaseUpdatePreservesContent(outputDir);
testSprintFinish(outputDir);
testMissingPhaseError();

console.log("Phase tooling tests passed.");
