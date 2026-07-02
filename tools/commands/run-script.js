const { spawnSync } = require("child_process");
const path = require("path");

function normalizeArgs(argv) {
  return argv[0] === "--" ? argv.slice(1) : argv;
}

function runNodeScript(scriptName, argv) {
  const scriptPath = path.join(__dirname, "..", scriptName);
  const result = spawnSync(process.execPath, [scriptPath, ...normalizeArgs(argv)], {
    stdio: "inherit",
  });

  if (result.error) {
    console.error(`Error: ${result.error.message}`);
    return 1;
  }

  return result.status === null ? 1 : result.status;
}

module.exports = {
  runNodeScript,
};
