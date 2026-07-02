const fs = require("fs");
const path = require("path");

function projectPath(...parts) {
  return path.resolve(process.cwd(), ...parts);
}

function exists(...parts) {
  return fs.existsSync(projectPath(...parts));
}

function isDirectory(...parts) {
  const target = projectPath(...parts);
  return fs.existsSync(target) && fs.statSync(target).isDirectory();
}

function isFile(...parts) {
  const target = projectPath(...parts);
  return fs.existsSync(target) && fs.statSync(target).isFile();
}

function toProjectRelative(filePath) {
  return path.relative(process.cwd(), filePath).replace(/\\/g, "/");
}

module.exports = {
  exists,
  isDirectory,
  isFile,
  projectPath,
  toProjectRelative,
};
