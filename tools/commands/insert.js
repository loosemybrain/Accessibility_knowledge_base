const { runNodeScript } = require("./run-script");

function run(argv) {
  return runNodeScript("insert-section.js", argv);
}

module.exports = {
  run,
};
