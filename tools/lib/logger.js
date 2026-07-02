function info(message) {
  console.log(message);
}

function ok(message) {
  console.log(`[OK] ${message}`);
}

function warn(message) {
  console.warn(`[WARN] ${message}`);
}

function error(message) {
  console.error(`[ERROR] ${message}`);
}

module.exports = {
  info,
  ok,
  warn,
  error,
};
