const { runNodeScript } = require("./run-script");

function run(argv) {
  return runNodeScript("create-sprint-summary.js", argv);
}

module.exports = {
  run,
};
