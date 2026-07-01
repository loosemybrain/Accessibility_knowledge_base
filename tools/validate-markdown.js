#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const IGNORED_DIRS = new Set([".git", "node_modules"]);
const DECORATIVE_SYMBOL_RE =
  /[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2022}\u{25A0}-\u{25FF}]/u;
const STATUS_MARKDOWN_RE = /[`*_~[\]<>!]|^\s*\[[^\]]+\]\s*$/;

function rel(filePath) {
  return path.relative(ROOT, filePath).replace(/\\/g, "/");
}

function listMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) {
        files.push(...listMarkdownFiles(path.join(dir, entry.name)));
      }
      continue;
    }

    if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
      files.push(path.join(dir, entry.name));
    }
  }

  return files;
}

function addError(errors, filePath, line, code, message) {
  errors.push({
    file: rel(filePath),
    line,
    code,
    message,
  });
}

function fenceMarker(line) {
  const match = /^\s*(`{3,}|~{3,})/.exec(line);
  if (!match) {
    return null;
  }

  return {
    char: match[1][0],
    length: match[1].length,
  };
}

function headingLevel(line) {
  const match = /^(#{1,6})\s+\S/.exec(line);
  return match ? match[1].length : 0;
}

function tableCells(line) {
  const trimmed = line.trim();
  if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) {
    return null;
  }

  return trimmed
    .slice(1, -1)
    .split("|")
    .map((cell) => cell.trim());
}

function isTableSeparator(line) {
  const cells = tableCells(line);
  return Boolean(cells && cells.every((cell) => /^:?-{3,}:?$/.test(cell)));
}

function isTableRow(line) {
  return Boolean(tableCells(line));
}

function validateTableAt(errors, filePath, lines, index) {
  const lineNumber = index + 1;
  const currentCells = tableCells(lines[index]);
  const nextLine = lines[index + 1] || "";
  const nextCells = tableCells(nextLine);

  if (!currentCells || isTableSeparator(lines[index])) {
    return;
  }

  if (!nextCells || !isTableSeparator(nextLine)) {
    addError(
      errors,
      filePath,
      lineNumber,
      "AKB_TABLE_HEADER",
      "Tabellen muessen mit Kopfzeile und Trennzeile beginnen."
    );
    return;
  }

  if (currentCells.some((cell) => cell.length === 0)) {
    addError(
      errors,
      filePath,
      lineNumber,
      "AKB_TABLE_HEADER_EMPTY",
      "Tabellenkopf darf keine leeren Spalten enthalten."
    );
  }
}

function statusValueFromLine(line) {
  const plain = /^Status:\s*(.+?)\s*$/.exec(line);
  if (plain) {
    return plain[1];
  }

  const emphasized = /^[_*]+Status:\s*(.+?)\s*[_*]+$/.exec(line);
  if (emphasized) {
    return emphasized[1];
  }

  const boldLabel = /^\*\*Status:\*\*\s*(.+?)\s*$/.exec(line);
  if (boldLabel) {
    return boldLabel[1];
  }

  const tableStatus = /^\|\s*Status\s*\|\s*(.+?)\s*\|$/.exec(line);
  if (tableStatus) {
    return tableStatus[1];
  }

  return null;
}

function validateStatus(errors, filePath, line, lineNumber) {
  const value = statusValueFromLine(line);
  if (value === null) {
    return;
  }

  if (!value.trim()) {
    addError(errors, filePath, lineNumber, "AKB_STATUS_EMPTY", "Statuswert fehlt.");
    return;
  }

  if (STATUS_MARKDOWN_RE.test(value) || /^[_*]+Status:/.test(line) || /^\*\*Status:\*\*/.test(line)) {
    addError(
      errors,
      filePath,
      lineNumber,
      "AKB_STATUS_FORMAT",
      "Statuswerte muessen als Klartext ohne Markdown-Formatierung angegeben werden."
    );
  }
}

function validateFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const lines = text.split(/\r?\n/);
  const errors = [];
  let activeFence = null;
  let h1Count = 0;
  let previousHeadingLevel = 0;

  lines.forEach((line, index) => {
    const lineNumber = index + 1;

    const marker = fenceMarker(line);
    if (marker && !activeFence) {
      activeFence = marker;
      return;
    }

    if (
      marker &&
      activeFence &&
      marker.char === activeFence.char &&
      marker.length >= activeFence.length
    ) {
      activeFence = null;
      return;
    }

    if (activeFence) {
      return;
    }

    if (DECORATIVE_SYMBOL_RE.test(line)) {
      addError(
        errors,
        filePath,
        lineNumber,
        "AKB_DECORATIVE_SYMBOL",
        "Emojis und dekorative Symbole sind nicht zulaessig."
      );
    }

    validateStatus(errors, filePath, line, lineNumber);

    if (isTableRow(line) && !isTableRow(lines[index - 1] || "")) {
      validateTableAt(errors, filePath, lines, index);
    }

    const level = headingLevel(line);
    if (!level) {
      return;
    }

    if (level === 1) {
      h1Count += 1;
    }

    if (previousHeadingLevel > 0 && level > previousHeadingLevel + 1) {
      addError(
        errors,
        filePath,
        lineNumber,
        "AKB_HEADING_SKIP",
        `Ueberschriftenebene uebersprungen: H${previousHeadingLevel} auf H${level}.`
      );
    }

    previousHeadingLevel = level;
  });

  if (h1Count !== 1) {
    addError(
      errors,
      filePath,
      1,
      "AKB_H1_COUNT",
      `Genau eine H1 pro Datei erwartet, gefunden: ${h1Count}.`
    );
  }

  return errors;
}

function main() {
  const files = listMarkdownFiles(ROOT);
  const errors = files.flatMap(validateFile);

  if (errors.length === 0) {
    console.log(`AKB Markdown validation passed (${files.length} files).`);
    return;
  }

  for (const error of errors) {
    console.error(`${error.file}:${error.line}: ${error.code}: ${error.message}`);
  }

  console.error(`AKB Markdown validation failed: ${errors.length} error(s).`);
  process.exitCode = 1;
}

main();
