#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

function usage() {
  console.error(
    [
      "Usage:",
      "  node tools/insert-section.js --file <markdown-file> --heading-path <H2[ > H3[ > H4]]> --content-file <file> [--replace]",
      "",
      "Examples:",
      '  node tools/insert-section.js --file 00_Governance/AKB-100-Markdown-Styleguide.md --heading-path "9 Neuer Abschnitt" --content-file section.md',
      '  node tools/insert-section.js --file doc.md --heading-path "2 Kapitel > 2.1 Unterkapitel" --content-file section.md --replace',
    ].join("\n")
  );
}

function parseArgs(argv) {
  const args = {
    replace: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--replace") {
      args.replace = true;
      continue;
    }

    if (arg === "--file" || arg === "--heading-path" || arg === "--path" || arg === "--content-file") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`);
      }
      const key = arg === "--path" ? "headingPath" : arg.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      args[key] = value;
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!args.file || !args.headingPath || !args.contentFile) {
    throw new Error("Required arguments: --file, --heading-path, --content-file.");
  }

  return args;
}

function splitHeadingPath(value) {
  const parts = value
    .split(">")
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length < 1 || parts.length > 3) {
    throw new Error("Heading path must target H2, H3, or H4.");
  }

  return parts;
}

function detectEol(text) {
  return text.includes("\r\n") ? "\r\n" : "\n";
}

function normalizeContent(content, eol) {
  return content.replace(/\r?\n/g, eol).replace(new RegExp(`${eol}*$`), "");
}

function headingText(line) {
  const match = /^(#{1,6})\s+(.+?)\s*$/.exec(line);
  if (!match) {
    return null;
  }

  return {
    level: match[1].length,
    text: match[2].trim(),
  };
}

function buildHeading(level, text) {
  return `${"#".repeat(level)} ${text}`;
}

function parseHeadings(lines) {
  const headings = [];

  lines.forEach((line, index) => {
    const parsed = headingText(line);
    if (parsed) {
      headings.push({
        ...parsed,
        index,
      });
    }
  });

  return headings;
}

function findHeadingPath(headings, parts) {
  let startAt = 0;
  let parent = null;

  for (let partIndex = 0; partIndex < parts.length; partIndex += 1) {
    const expectedLevel = partIndex + 2;
    const part = parts[partIndex];
    let match = null;

    for (let i = startAt; i < headings.length; i += 1) {
      const heading = headings[i];
      if (parent && heading.index <= parent.index) {
        continue;
      }
      if (parent && heading.level <= parent.level) {
        break;
      }
      if (heading.level === expectedLevel && heading.text === part) {
        match = heading;
        startAt = i + 1;
        break;
      }
    }

    if (!match) {
      return null;
    }

    parent = match;
  }

  return parent;
}

function sectionEnd(lines, startIndex, level) {
  for (let i = startIndex + 1; i < lines.length; i += 1) {
    const heading = headingText(lines[i]);
    if (heading && heading.level <= level) {
      return i;
    }
  }

  return lines.length;
}

function findInsertIndex(lines, parentHeading) {
  if (!parentHeading) {
    return lines.length;
  }

  return sectionEnd(lines, parentHeading.index, parentHeading.level);
}

function timestamp() {
  return new Date().toISOString().replace(/[:.]/g, "-");
}

function writeBackup(filePath, content) {
  const backupPath = `${filePath}.bak-${timestamp()}`;
  fs.writeFileSync(backupPath, content, "utf8");
  return backupPath;
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

  const filePath = path.resolve(args.file);
  const contentPath = path.resolve(args.contentFile);
  const parts = splitHeadingPath(args.headingPath);
  const targetLevel = parts.length + 1;
  const targetHeading = buildHeading(targetLevel, parts[parts.length - 1]);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file not found: ${args.file}`);
  }
  if (!fs.existsSync(contentPath)) {
    throw new Error(`Content file not found: ${args.contentFile}`);
  }

  const original = fs.readFileSync(filePath, "utf8");
  const eol = detectEol(original);
  const lines = original.split(/\r?\n/);
  if (lines[lines.length - 1] === "") {
    lines.pop();
  }

  const headings = parseHeadings(lines);
  const existing = findHeadingPath(headings, parts);
  const content = normalizeContent(fs.readFileSync(contentPath, "utf8"), eol);
  const contentLines = content ? content.split(eol) : [];
  const contentStartsWithTargetHeading = contentLines[0] === targetHeading;
  let nextLines;

  if (existing) {
    if (!args.replace) {
      throw new Error(`Section already exists: ${args.headingPath}. Use --replace to overwrite it.`);
    }

    const end = sectionEnd(lines, existing.index, existing.level);
    const replacement = contentStartsWithTargetHeading ? contentLines : [targetHeading, "", ...contentLines];
    nextLines = [...lines.slice(0, existing.index), ...replacement, ...lines.slice(end)];
  } else {
    const parentParts = parts.slice(0, -1);
    const parent = parentParts.length ? findHeadingPath(headings, parentParts) : null;

    if (parentParts.length && !parent) {
      throw new Error(`Parent heading path not found: ${parentParts.join(" > ")}`);
    }

    const insertAt = findInsertIndex(lines, parent);
    const insertion = contentStartsWithTargetHeading ? contentLines : [targetHeading, "", ...contentLines];
    const prefix = insertAt > 0 && lines[insertAt - 1] !== "" ? [""] : [];
    const suffix = insertAt < lines.length && lines[insertAt] !== "" ? [""] : [];
    nextLines = [...lines.slice(0, insertAt), ...prefix, ...insertion, ...suffix, ...lines.slice(insertAt)];
  }

  const backupPath = writeBackup(filePath, original);
  fs.writeFileSync(filePath, `${nextLines.join(eol)}${eol}`, "utf8");
  console.log(`Updated ${path.relative(process.cwd(), filePath).replace(/\\/g, "/")}`);
  console.log(`Backup ${path.relative(process.cwd(), backupPath).replace(/\\/g, "/")}`);
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
