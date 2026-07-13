const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");

const ROOT = process.cwd();
const HANDBOOK_DIR = path.join("01_Handbuecher", "SAP_GUI");

function normalizeArgs(argv) {
  return argv[0] === "--" ? argv.slice(1) : argv;
}

function usage() {
  return [
    "Usage:",
    "  npm run akb -- topic status <ACC-xxx>",
    "  npm run akb -- topic review <ACC-xxx>",
    "  npm run akb -- topic finish <ACC-xxx> --phase <id> --title <title>",
  ].join("\n");
}

function parseArgs(argv) {
  const normalized = normalizeArgs(argv);
  const [action, topicId, ...rest] = normalized;
  const args = { action, topicId };

  for (let i = 0; i < rest.length; i += 1) {
    const arg = rest[i];
    if (arg === "--phase" || arg === "--title" || arg === "--status") {
      const value = rest[i + 1];
      if (!value || value.startsWith("--")) {
        throw new Error(`Missing value for ${arg}.`);
      }
      args[arg.slice(2)] = value;
      i += 1;
      continue;
    }

    throw new Error(`Unknown argument: ${arg}`);
  }

  if (!["status", "review", "finish"].includes(action)) {
    throw new Error("Action must be one of: status, review, finish.");
  }

  if (!topicId || !/^ACC-\d{3}$/.test(topicId)) {
    throw new Error("Topic id must use format ACC-005.");
  }

  if (action === "finish" && (!args.phase || !args.title)) {
    throw new Error("topic finish requires --phase and --title.");
  }

  args.number = topicId.slice(4);
  args.testId = `PT-${args.number}`;
  return args;
}

function projectPath(...parts) {
  return path.join(ROOT, ...parts);
}

function listMarkdownFiles(relativeDir) {
  const absolute = projectPath(relativeDir);
  if (!fs.existsSync(absolute)) {
    return [];
  }

  return fs
    .readdirSync(absolute)
    .filter((name) => name.endsWith(".md"))
    .map((name) => path.join(relativeDir, name).replace(/\\/g, "/"));
}

function read(relativePath) {
  return fs.readFileSync(projectPath(relativePath), "utf8");
}

function matchingFiles(relativeDir, predicate) {
  return listMarkdownFiles(relativeDir).filter((file) => {
    const text = read(file);
    return predicate(file, text);
  });
}

function headingMatches(text, pattern) {
  return text
    .split(/\r?\n/)
    .filter((line) => /^#{1,6}\s+/.test(line))
    .filter((line) => pattern.test(line));
}

function tableRows(text) {
  const rows = new Map();

  text.split(/\r?\n/).forEach((line) => {
    const match = line.match(/^\|\s*([^|]+?)\s*\|\s*([^|]+?)\s*\|\s*$/);
    if (!match || /^[-: ]+$/.test(match[1]) || match[1] === "Eigenschaft" || match[1] === "Pruefschritt" || match[1] === "Prüfschritt") {
      return;
    }
    rows.set(match[1].trim(), match[2].trim());
  });

  return rows;
}

function section(text, headingPattern) {
  const lines = text.split(/\r?\n/);
  const start = lines.findIndex((line) => headingPattern.test(line));
  if (start === -1) {
    return "";
  }

  const level = (lines[start].match(/^#+/) || [""])[0].length;
  let end = lines.length;
  for (let i = start + 1; i < lines.length; i += 1) {
    const heading = lines[i].match(/^(#+)\s+/);
    if (heading && heading[1].length <= level) {
      end = i;
      break;
    }
  }

  return lines.slice(start, end).join("\n");
}

function evidenceDetails(file, text, topicId) {
  const lines = text.split(/\r?\n/);
  const pattern = new RegExp(`^###\\s+.*\\b(${topicId}-E\\d+)\\b`);
  const details = [];

  lines.forEach((line, index) => {
    const match = line.match(pattern);
    if (!match) {
      return;
    }

    let end = lines.length;
    for (let i = index + 1; i < lines.length; i += 1) {
      if (/^###\s+/.test(lines[i])) {
        end = i;
        break;
      }
    }
    const statusSection = section(lines.slice(index, end).join("\n"), /^####\s+Evidenzstatus\s*$/);
    const values = tableRows(statusSection);
    details.push({
      file,
      heading: line.replace(/^#+\s+/, ""),
      id: match[1],
      status: values.get("Status") || "Nicht dokumentiert",
      handbook: values.get("Referenzhandbuch") || "Nicht dokumentiert",
    });
  });

  return details;
}

function testDetails(file, text) {
  const metadata = tableRows(section(text, /^##\s+1\s+Metadaten\s*$/));
  const release = tableRows(section(text, /^##\s+\d+\s+Freigabe\s*$/));
  return {
    file,
    status: metadata.get("Status") || "Nicht dokumentiert",
    release: release.get("Freigabe erfolgt") || "Nicht dokumentiert",
  };
}

function profileDetails(file, text) {
  const reviewStatus = tableRows(section(text, /^##\s+\d+\s+Reviewstatus\s*$/));
  return {
    file,
    finalReview: reviewStatus.get("Abschlussreview") || "Nicht dokumentiert",
    publication:
      reviewStatus.get("Veröffentlichung") ||
      reviewStatus.get("Veroeffentlichung") ||
      "Nicht dokumentiert",
  };
}

function collectTopic(topicId) {
  const number = topicId.slice(4);
  const testId = `PT-${number}`;
  const research = matchingFiles(path.join(HANDBOOK_DIR, "quellen"), (file, text) =>
    file.includes(topicId) || text.includes(`| Recherche-ID | ${topicId} |`)
  );
  const tests = matchingFiles(path.join(HANDBOOK_DIR, "praxistests"), (file, text) =>
    text.includes(topicId)
  );
  const chapters = matchingFiles(path.join(HANDBOOK_DIR, "kapitel"), (file, text) =>
    text.includes(topicId)
  );
  const profiles = matchingFiles(path.join(HANDBOOK_DIR, "steckbriefe"), (file, text) =>
    text.includes(topicId)
  );
  const evidence = research.flatMap((file) => evidenceDetails(file, read(file), topicId));
  const testStatus = tests.map((file) => testDetails(file, read(file)));
  const profileStatus = profiles.map((file) => profileDetails(file, read(file)));

  return {
    topicId,
    testId,
    research,
    evidence,
    tests,
    testStatus,
    chapters,
    profiles,
    profileStatus,
  };
}

function readiness(topic) {
  return {
    researchPresent: topic.research.length > 0,
    evidencePresent: topic.evidence.length > 0,
    evidenceReady:
      topic.evidence.length > 0 &&
      topic.evidence.every(
        (item) => item.status === "Verifiziert" && item.handbook === "Freigegeben"
      ),
    testsPresent: topic.tests.length > 0,
    testsReady:
      topic.testStatus.length > 0 &&
      topic.testStatus.every(
        (item) => item.status === "Abgeschlossen" && item.release === "Ja"
      ),
    chaptersPresent: topic.chapters.length > 0,
    profilesPresent: topic.profiles.length > 0,
    profilesReady:
      topic.profileStatus.length > 0 &&
      topic.profileStatus.every(
        (item) => item.finalReview === "Ja" && item.publication === "Bereit"
      ),
  };
}

function printList(label, values) {
  console.log(`${label}:`);
  if (!values.length) {
    console.log("- Keine vorhanden.");
    return;
  }
  values.forEach((value) => {
    if (typeof value === "string") {
      console.log(`- ${value}`);
      return;
    }
    console.log(`- ${value.heading} (${value.file})`);
  });
}

function status(topic) {
  const ready = readiness(topic);
  console.log(`Topic: ${topic.topicId}`);
  console.log(`Praxistestkennung: ${topic.testId}`);
  printList("Recherchedateien", topic.research);
  printList("Evidenzen", topic.evidence);
  printList("Praxistests", topic.tests);
  printList("Kapitel", topic.chapters);
  printList("Steckbriefe", topic.profiles);
  console.log("Dokumentierte Statuswerte:");
  topic.evidence.forEach((item) =>
    console.log(`- ${item.id}: ${item.status}; Referenzhandbuch: ${item.handbook}`)
  );
  topic.testStatus.forEach((item) =>
    console.log(`- ${item.file}: ${item.status}; Freigabe: ${item.release}`)
  );
  console.log("Reviewstatus:");
  console.log(`- Recherchedatei vorhanden: ${ready.researchPresent ? "Ja" : "Nein"}`);
  console.log(`- Evidenzen vorhanden: ${ready.evidencePresent ? "Ja" : "Nein"}`);
  console.log(`- Evidenzen abschlussbereit: ${ready.evidenceReady ? "Ja" : "Nein"}`);
  console.log(`- Praxistests vorhanden: ${ready.testsPresent ? "Ja" : "Nein"}`);
  console.log(`- Praxistests abschlussbereit: ${ready.testsReady ? "Ja" : "Nein"}`);
  console.log(`- Kapitel vorhanden: ${ready.chaptersPresent ? "Ja" : "Nein"}`);
  console.log(`- Steckbrief vorhanden: ${ready.profilesPresent ? "Ja" : "Nein"}`);
  console.log(`- Steckbrief abschlussbereit: ${ready.profilesReady ? "Ja" : "Nein"}`);
}

function runNode(label, args) {
  console.log(`Running ${label}`);
  const result = spawnSync(process.execPath, args, {
    cwd: ROOT,
    stdio: "inherit",
  });

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(`${label} failed with exit code ${result.status}.`);
  }
}

function review(topic) {
  const ready = readiness(topic);
  const checks = [
    ["Recherchedatei vorhanden", ready.researchPresent],
    ["Evidenzen vorhanden", ready.evidencePresent],
    ["Evidenzen verifiziert und freigegeben", ready.evidenceReady],
    ["Praxistests vorhanden", ready.testsPresent],
    ["Praxistests abgeschlossen und freigegeben", ready.testsReady],
    ["Kapitel vorhanden", ready.chaptersPresent],
    ["Steckbrief vorhanden", ready.profilesPresent],
    ["Abschlussreview und Veroeffentlichungsbereitschaft dokumentiert", ready.profilesReady],
  ];

  checks.forEach(([label, ok]) => console.log(`${ok ? "[OK]" : "[FEHLER]"} ${label}`));
  runNode("validate", [path.join("tools", "akb.js"), "validate"]);
  return checks.every(([, ok]) => ok);
}

function finish(topic, args) {
  const reviewOk = review(topic);
  if (!reviewOk) {
    throw new Error("Topic review failed. Finish aborted.");
  }

  runNode("doctor", [path.join("tools", "akb.js"), "doctor"]);
  runNode("phase", [
    path.join("tools", "akb.js"),
    "phase",
    args.phase,
    "--title",
    args.title,
    "--validation",
    "doctor,validate",
    "--changed-files",
    [
      ...topic.research,
      ...topic.tests,
      ...topic.chapters,
      ...topic.profiles,
    ].join(","),
  ]);
  runNode("sprint summary", [
    path.join("tools", "akb.js"),
    "sprint-summary",
    args.phase,
    "--validation",
    "doctor,validate",
    "--changed-files",
    [
      ...topic.research,
      ...topic.tests,
      ...topic.chapters,
      ...topic.profiles,
    ].join(","),
  ]);

  console.log("Topic Status aktualisieren:");
  console.log(`- ${topic.topicId}: ${args.status || "Completed"}`);
}

function run(argv) {
  let args;
  try {
    args = parseArgs(argv);
  } catch (error) {
    console.error(error.message);
    console.error(usage());
    return 2;
  }

  try {
    const topic = collectTopic(args.topicId);
    if (args.action === "status") {
      status(topic);
      return 0;
    }
    if (args.action === "review") {
      return review(topic) ? 0 : 1;
    }
    finish(topic, args);
    return 0;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return 1;
  }
}

module.exports = {
  collectTopic,
  evidenceDetails,
  parseArgs,
  profileDetails,
  readiness,
  run,
  testDetails,
};
