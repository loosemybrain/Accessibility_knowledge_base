const { runNodeScript } = require("./run-script");

function run(argv) {
  if (argv[0] === "--help" || argv[0] === "-h") {
    return runNodeScript("create-phase-report.js", argv);
  }

  return runNodeScript("create-phase-report.js", argv);
}

module.exports = {
  run,
};
