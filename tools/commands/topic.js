const lifecycle = require("../lib/topic-lifecycle");

function run(argv) {
  return lifecycle.run(argv);
}

module.exports = {
  run,
};
