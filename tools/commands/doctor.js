const filesystem = require("../lib/filesystem");
const logger = require("../lib/logger");
const project = require("../lib/project");

function checkDirectory(relativePath, results) {
  if (filesystem.isDirectory(relativePath)) {
    results.push({ ok: true, message: `Ordner vorhanden: ${relativePath}` });
    return;
  }

  results.push({ ok: false, message: `Ordner fehlt: ${relativePath}` });
}

function checkFile(relativePath, results) {
  if (filesystem.isFile(relativePath)) {
    results.push({ ok: true, message: `Datei vorhanden: ${relativePath}` });
    return;
  }

  results.push({ ok: false, message: `Datei fehlt: ${relativePath}` });
}

function run() {
  const results = [];

  logger.info("AKB Doctor");
  logger.info("Prüfung: zentrale Ordner und Pflichtdateien");
  logger.info("");

  project.CENTRAL_DIRECTORIES.forEach((directory) => checkDirectory(directory, results));
  project.REQUIRED_FILES.forEach((file) => checkFile(file, results));

  results.forEach((result) => {
    if (result.ok) {
      logger.ok(result.message);
    } else {
      logger.error(result.message);
    }
  });

  const failed = results.filter((result) => !result.ok);
  logger.info("");

  if (failed.length === 0) {
    logger.info(`AKB Doctor passed (${results.length} checks).`);
    return 0;
  }

  logger.error(`AKB Doctor failed: ${failed.length} issue(s).`);
  return 1;
}

module.exports = {
  run,
};
