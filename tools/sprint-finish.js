#!/usr/bin/env node

const { spawnSync } = require("child_process");
const path = require("path");

const DEFAULT_TITLES = {
  "001a": "Automated Phase Documentation",
  "001b": "Automated Sprint Summary",
};

function usage() {
  console.error(
    [
      "Usage:",
      "  node tools/sprint-finish.js --phase <id> [--title <title>] [--output <directory>] [--summary-output <directory>]",
      "",
      "Example:",
      "  npm run sprint:finish -- --phase 001a",
    ].join("\n")
  );
}

function parseArgs(argv) {
  const args = {};

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--phase" || arg === "--title" || arg === "--output" || arg === "--summary-output") {
      const value = argv[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`);
      }
      const key = arg.slice(2).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      args[key] = value;
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!args.phase) {
    throw new Error("Required argument: --phase.");
  }

  args.title = args.title || DEFAULT_TITLES[args.phase];
  if (!args.title) {
    throw new Error("Title is required for unknown phase ids.");
  }

  return args;
}

function run(label, command, args) {
  console.log(`Running ${label}`);
  const result = spawnSync(command, args, {
    stdio: "inherit",
    shell: false,
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`${label} failed with exit code ${result.status}.`);
  }
}

function gitChangedFiles() {
  const result = spawnSync("git", ["status", "--short"], {
    encoding: "utf8",
    shell: false,
  });

  if (result.status !== 0) {
    return [];
  }

  return result.stdout
    .split(/\r?\n/)
    .map((line) => line.slice(3).trim())
    .filter(Boolean)
    .sort((a, b) => a.localeCompare(b));
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

  const akb = path.join("tools", "akb.js");
  const checks = ["node --check tools/akb.js", "validate", "doctor"];

  run(checks[0], process.execPath, ["--check", akb]);
  run("validate", process.execPath, [akb, "validate"]);
  run("doctor", process.execPath, [akb, "doctor"]);

  const phaseArgs = [
    akb,
    "phase",
    args.phase,
    "--title",
    args.title,
    "--validation",
    checks.join(","),
    "--changed-files",
    gitChangedFiles().join(","),
  ];

  if (args.output) {
    phaseArgs.push("--output", args.output);
  }

  run("phase document", process.execPath, phaseArgs);
  const summaryArgs = [
    akb,
    "sprint-summary",
    args.phase,
    "--phase-dir",
    args.output || path.join("90_Projektverwaltung", "Phasen"),
    "--validation",
    checks.join(","),
    "--changed-files",
    gitChangedFiles().join(","),
  ];

  if (args.summaryOutput) {
    summaryArgs.push("--output", args.summaryOutput);
  }

  run("sprint summary", process.execPath, summaryArgs);
  console.log("Sprint finished.");
}

try {
  main();
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
