#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const HANDBOOK_DIR = path.join("01_Handbuecher", "SAP_GUI");
const STATUS_FILE = path.join("00_Governance", "AKB-008-Projektstatus.md");

function usage() {
  console.error(
    [
      "Usage:",
      "  node tools/create-topic.js ACC-005 [--title <title>] [--chapter <number>]",
      "",
      "Examples:",
      "  npm run akb -- create-topic ACC-005",
      "  npm run akb -- create-topic ACC-005 -- --title \"Assistive Technologien\" --chapter 05",
    ].join("\n")
  );
}

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--") {
      continue;
    }

    if (!arg.startsWith("--") && !args.topicId) {
      args.topicId = arg;
      continue;
    }

    if (arg === "--title" || arg === "--chapter") {
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

  if (!args.topicId || !/^ACC-\d{3}$/.test(args.topicId)) {
    throw new Error("Required topic id in format ACC-005.");
  }

  args.number = args.topicId.slice(4);
  args.testId = `PT-${args.number}`;
  args.title = args.title || "Themenpaket";
  args.chapter = args.chapter || "XX";
  return args;
}

function slug(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-Za-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "Themenpaket";
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function writeNew(relativePath, content, created) {
  const target = path.resolve(relativePath);
  if (fs.existsSync(target)) {
    throw new Error(`File already exists: ${relativePath.replace(/\\/g, "/")}`);
  }

  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${content.trimEnd()}\n`, "utf8");
  created.push(relativePath.replace(/\\/g, "/"));
}

function researchTemplate(args) {
  return `# Recherche - ${args.topicId} ${args.title}

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Recherche-ID | ${args.topicId} |
| Thema | ${args.title} |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Zugehoeriges Kapitel | Kapitel ${args.chapter} - ${args.title} |
| Abschnitt | Kapitel ${args.chapter} - ${args.title} |
| Status | In Bearbeitung |
| Version | 2.0 |
| Letzte Aktualisierung | ${today()} |

---

## 2 Bearbeitungsstatus

| Pruefschritt | Status |
|--------------|--------|
| Recherchedatei erstellt | Ja |
| Evidenz angelegt | Ja |
| Primaerquellen identifiziert | Nein |
| Primaerquellen ausgewertet | Nein |
| Praxistests durchgefuehrt | Nein |
| Vergleich abgeschlossen | Nein |
| Fachliche Bewertung abgeschlossen | Nein |
| Freigabe erfolgt | Nein |

---

## 3 Evidenz

### 3.1 Evidenz ${args.topicId}-E01

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ${args.topicId}-E01 |
| Status | In Vorbereitung |
| Herstellerquelle | Noch nicht recherchiert. |
| Praxistest | Vorgesehen |
| Referenzhandbuch | Nicht freigegeben |

---

#### Fragestellung

Noch nicht festgelegt.

#### Ziel

Noch nicht festgelegt.

---

#### Dokumentierte Herstellerinformation

Noch nicht recherchiert.

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | Noch nicht recherchiert. |
| Produkt | Noch nicht recherchiert. |
| Dokumentversion | Noch nicht recherchiert. |
| Kapitel | Noch nicht recherchiert. |
| Abschnitt | Noch nicht recherchiert. |
| URL | Noch nicht recherchiert. |
| Abrufdatum | Noch nicht recherchiert. |

---

#### Eigene Praxistests

${args.testId} vorgesehen.

Testergebnisse liegen noch nicht vor.

---

#### Interpretation

Erfolgt nach Abschluss des Praxistests.

---

#### Fachliche Bewertung

Erfolgt nach Vergleich zwischen Herstellerdokumentation und Praxistest.

---

#### Ergebnis

Die Evidenz befindet sich in Vorbereitung.

---

## 4 Verwendete Quellen

| Quelle | Dokumentversion | Status |
|--------|-----------------|--------|
| SAP Help Portal | | Noch nicht recherchiert. |
| SAP GUI Administration Guide | | Noch nicht recherchiert. |
| SAP GUI Installation Guide | | Noch nicht recherchiert. |
| SAP Notes | | Nicht verwendet |

---

## 5 Zugehoerige Praxistests

| Test-ID | Beschreibung | Status |
|---------|--------------|--------|
| ${args.testId} | ${args.title} | Vorgesehen |

---

## 6 Freigabe

| Pruefschritt | Status |
|--------------|--------|
| Herstellerdokumentation vollstaendig ausgewertet | Nein |
| Praxistests abgeschlossen | Nein |
| Fachliche Bewertung abgeschlossen | Nein |
| Freigabe fuer Referenzhandbuch | Nein |`;
}

function testTemplate(args) {
  return `# Praxistest - ${args.testId} ${args.title}

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Test-ID | ${args.testId} |
| Zugehoerige Evidenz | ${args.topicId}-E01 |
| Thema | ${args.title} |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Kapitel | Kapitel ${args.chapter} - ${args.title} |
| Abschnitt | Kapitel ${args.chapter} - ${args.title} |
| Status | Vorgesehen |
| Version | 1.0 |
| Letzte Aktualisierung | ${today()} |

---

## 2 Ziel

Noch nicht festgelegt.

---

## 3 Testumgebung

| Eigenschaft | Wert |
|-------------|------|
| Betriebssystem | Noch nicht dokumentiert. |
| SAP GUI Version | Noch nicht dokumentiert. |
| Patchlevel | Noch nicht dokumentiert. |
| Theme | Noch nicht dokumentiert. |
| Bildschirmaufloesung | Noch nicht dokumentiert. |
| Screenreader | Noch nicht dokumentiert. |
| Weitere Software | Noch nicht dokumentiert. |

---

## 4 Voraussetzungen

Noch nicht festgelegt.

---

## 5 Testschritte

| Nr. | Testschritt | Ergebnis |
|-----|-------------|----------|
| 1 | Noch nicht festgelegt. | Noch nicht durchgefuehrt. |

---

## 6 Erwartetes Ergebnis

Noch nicht festgelegt.

---

## 7 Tatsaechliches Ergebnis

Noch nicht durchgefuehrt.

---

## 8 Abweichungen

Noch nicht durchgefuehrt.

---

## 9 Screenshots

| Screenshot-ID | Beschreibung | Status |
|---------------|--------------|--------|
| Noch nicht vergeben. | Noch nicht definiert. | Nicht vorhanden |

---

## 10 Bewertung

Noch nicht durchgefuehrt.

---

## 11 Zugehoerige Dokumente

| Dokumenttyp | Referenz |
|-------------|----------|
| Evidenz | ${args.topicId}-E01 |
| Recherche | ${args.topicId} |
| Kapitel | Kapitel ${args.chapter} - ${args.title} |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |

---

## 12 Freigabe

| Pruefschritt | Status |
|--------------|--------|
| Test durchgefuehrt | Nein |
| Ergebnis dokumentiert | Nein |
| Screenshots geprueft | Nein |
| Fachliche Bewertung abgeschlossen | Nein |
| Freigabe erfolgt | Nein |`;
}

function chapterTemplate(args) {
  return `# ${args.title}

## ${args.chapter}.1 Ueberblick

Noch nicht erstellt.

## ${args.chapter}.2 Evidenzstatus

| Evidenz | Status |
|---------|--------|
| ${args.topicId}-E01 | In Vorbereitung |

## ${args.chapter}.3 Praxistests

| Test-ID | Status |
|---------|--------|
| ${args.testId} | Vorgesehen |`;
}

function profileTemplate(args) {
  return `# Kapitel-Steckbrief - Kapitel ${args.chapter}: ${args.title}

## 1 Allgemeine Informationen

### 1.1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Kapitel | ${args.chapter} |
| Titel | ${args.title} |
| Status | In Vorbereitung |
| Verantwortlich | |
| Letzte Aktualisierung | ${today()} |
| Version | 1.0 |

---

## 2 Kapitelplanung

### 2.1 Ziel

Noch nicht festgelegt.

### 2.2 Zielgruppe

- Noch nicht festgelegt.

### 2.3 Voraussetzungen

- Noch nicht festgelegt.

### 2.4 Kapitelstruktur

| Abschnitt | Bearbeitungsstatus |
|-----------|--------------------|
| Ueberblick | In Vorbereitung |
| Evidenzstatus | In Vorbereitung |
| Praxistests | In Vorbereitung |

---

## 3 Evidenzmatrix

| Evidenz | Praxistest | Status |
|---------|------------|--------|
| ${args.topicId}-E01 | ${args.testId} | In Vorbereitung |

---

## 4 Reviewstatus

| Pruefschritt | Status |
|--------------|--------|
| Steckbrief erstellt | Ja |
| Recherche abgeschlossen | Nein |
| Praxistests abgeschlossen | Nein |
| Kapitel erstellt | Nein |
| Fachliche Pruefung | Nein |
| Sprachliche Pruefung | Nein |
| Abschlussreview | Nein |
| Veroeffentlichung | Nein |`;
}

function isTableRow(line) {
  const trimmed = line.trim();
  return trimmed.startsWith("|") && trimmed.endsWith("|");
}

function insertTableRow(lines, heading, row, key) {
  const start = lines.findIndex((line) => line.trim() === heading);
  if (start === -1) {
    return false;
  }

  let tableStart = -1;
  for (let i = start + 1; i < lines.length; i += 1) {
    if (isTableRow(lines[i])) {
      tableStart = i;
      break;
    }
    if (/^##\s+/.test(lines[i])) {
      return false;
    }
  }

  if (tableStart === -1) {
    return false;
  }

  let tableEnd = tableStart;
  while (tableEnd < lines.length && isTableRow(lines[tableEnd])) {
    if (lines[tableEnd].includes(key)) {
      return false;
    }
    tableEnd += 1;
  }

  lines.splice(tableEnd, 0, row);
  return true;
}

function updateProjectStatus(args, created) {
  if (!fs.existsSync(STATUS_FILE)) {
    return;
  }

  const original = fs.readFileSync(STATUS_FILE, "utf8");
  const eol = original.includes("\r\n") ? "\r\n" : "\n";
  const lines = original.split(/\r?\n/);
  if (lines[lines.length - 1] === "") {
    lines.pop();
  }

  const changedEvidence = insertTableRow(
    lines,
    "## 7 Evidenzstatus",
    `| ${args.topicId}-E01 | In Vorbereitung |`,
    `${args.topicId}-E01`
  );
  const changedTest = insertTableRow(
    lines,
    "## 8 Praxistests",
    `| ${args.testId} | ${args.title} | Vorgesehen |`,
    args.testId
  );

  if (changedEvidence || changedTest) {
    fs.writeFileSync(STATUS_FILE, `${lines.join(eol)}${eol}`, "utf8");
    created.push(STATUS_FILE.replace(/\\/g, "/"));
  }
}

function createTopic(args) {
  const created = [];
  const fileSlug = slug(args.title);
  const chapterFile = `Kapitel-${args.chapter}-${fileSlug}.md`;
  const profileFile = `Kapitel-${args.chapter}-${fileSlug}.md`;

  writeNew(
    path.join(HANDBOOK_DIR, "quellen", `${args.topicId}-${fileSlug}.md`),
    researchTemplate(args),
    created
  );
  writeNew(
    path.join(HANDBOOK_DIR, "praxistests", `${args.testId}-${fileSlug}.md`),
    testTemplate(args),
    created
  );
  writeNew(
    path.join(HANDBOOK_DIR, "kapitel", chapterFile),
    chapterTemplate(args),
    created
  );
  writeNew(
    path.join(HANDBOOK_DIR, "steckbriefe", profileFile),
    profileTemplate(args),
    created
  );
  updateProjectStatus(args, created);

  return created;
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

  try {
    const created = createTopic(args);
    created.forEach((file) => console.log(`Created ${file}`));
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  createTopic,
  parseArgs,
};
