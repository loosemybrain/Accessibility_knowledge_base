const { runNodeScript } = require("./run-script");

function run(argv) {
  return runNodeScript("validate-markdown.js", argv);
}

module.exports = {
  run,
};
