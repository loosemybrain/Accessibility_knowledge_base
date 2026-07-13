#!/usr/bin/env node

const assert = require("assert");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..", "..");
const SCRIPT = path.join(ROOT, "tools", "update-project-status.js");
const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "akb-status-test-"));
const governanceDir = path.join(tempRoot, "00_Governance");
const statusFile = path.join(governanceDir, "AKB-008-Projektstatus.md");

fs.mkdirSync(governanceDir, { recursive: true });
fs.writeFileSync(
  statusFile,
  `# Projektstatus

## 2 Aktueller Projektstatus

| Eigenschaft | Wert |
|-------------|------|
| Aktueller Sprint | Test |

## 7 Evidenzstatus

| Evidenz | Status |
|----------|--------|
| ACC-001-E03 | Offen |

## 8 Praxistests

| Test-ID | Thema | Status |
|----------|-------|--------|
| PT-001 | Accessibility Mode | Abgeschlossen |

## 9 Offene Aufgaben

| Prioritaet | Aufgabe | Status |
|------------|---------|--------|
| Hoch | Recherche ACC-001-E03 vorbereiten | Offen |
`,
  "utf8"
);

const result = spawnSync(
  process.execPath,
  [
    SCRIPT,
    "--evidence",
    "ACC-001-E03",
    "--evidence-status",
    "Verifiziert",
    "--task",
    "Recherche ACC-001-E03 vorbereiten",
    "--task-status",
    "Abgeschlossen",
  ],
  { cwd: tempRoot, encoding: "utf8" }
);

assert.strictEqual(result.status, 0, `${result.stdout}\n${result.stderr}`);
const updated = fs.readFileSync(statusFile, "utf8");
assert.ok(updated.includes("| ACC-001-E03 | Verifiziert |"));
assert.ok(
  updated.includes("| Hoch | Recherche ACC-001-E03 vorbereiten | Abgeschlossen |")
);

console.log("Project status tests passed.");
