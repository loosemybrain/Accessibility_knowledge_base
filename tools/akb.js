#!/usr/bin/env node

const commands = {
  validate: require("./commands/validate"),
  insert: require("./commands/insert"),
  phase: require("./commands/phase"),
  "sprint-summary": require("./commands/sprint-summary"),
  "create-topic": require("./commands/create-topic"),
  topic: require("./commands/topic"),
  status: require("./commands/status"),
  doctor: require("./commands/doctor"),
};

function usage() {
  console.error(
    [
      "Usage:",
      "  node tools/akb.js <command> [args]",
      "",
      "Commands:",
      "  validate",
      "  insert",
      "  phase",
      "  sprint-summary",
      "  create-topic",
      "  topic",
      "  status",
      "  doctor",
    ].join("\n")
  );
}

function main(argv) {
  const [commandName, ...commandArgs] = argv;

  if (!commandName || commandName === "--help" || commandName === "-h") {
    usage();
    return commandName ? 0 : 2;
  }

  const command = commands[commandName];
  if (!command) {
    console.error(`Unknown command: ${commandName}`);
    usage();
    return 2;
  }

  return command.run(commandArgs);
}

process.exitCode = main(process.argv.slice(2));
