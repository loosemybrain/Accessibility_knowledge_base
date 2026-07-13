const { runNodeScript } = require("./run-script");

function run(argv) {
  return runNodeScript("create-topic.js", argv);
}

module.exports = {
  run,
};
