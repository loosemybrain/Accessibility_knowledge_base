const { runNodeScript } = require("./run-script");

function usage() {
  console.log(
    [
      "Usage:",
      "  npm run akb -- status -- [options]",
      "",
      "Options:",
      "  --evidence <id>",
      "  --evidence-status <status>",
      "  --test <id>",
      "  --test-status <status>",
      "  --task <task>",
      "  --task-status <status>",
      "  --current-sprint <sprint>",
      "  --next-sprint <next work package>",
    ].join("\n")
  );
}

function run(argv) {
  if (argv.length === 0 || argv[0] === "--help" || argv[0] === "-h") {
    usage();
    return 0;
  }

  return runNodeScript("update-project-status.js", argv);
}

module.exports = {
  run,
};
