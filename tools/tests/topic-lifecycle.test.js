#!/usr/bin/env node

const assert = require("assert");
const {
  evidenceDetails,
  parseArgs,
  profileDetails,
  readiness,
  testDetails,
} = require("../lib/topic-lifecycle");

function readyTopic() {
  return {
    research: ["research.md"],
    evidence: [
      {
        id: "ACC-999-E01",
        status: "Verifiziert",
        handbook: "Freigegeben",
      },
    ],
    tests: ["test.md"],
    testStatus: [{ status: "Abgeschlossen", release: "Ja" }],
    chapters: ["chapter.md"],
    profiles: ["profile.md"],
    profileStatus: [{ finalReview: "Ja", publication: "Bereit" }],
  };
}

function testArgumentParsing() {
  assert.deepStrictEqual(parseArgs(["status", "ACC-005"]), {
    action: "status",
    topicId: "ACC-005",
    number: "005",
    testId: "PT-005",
  });
  assert.throws(() => parseArgs(["review", "ACC-5"]), /format ACC-005/);
  assert.throws(
    () => parseArgs(["finish", "ACC-005"]),
    /requires --phase and --title/
  );
}

function testStatusExtraction() {
  const research = `### 3.1 Evidenz ACC-999-E01

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-999-E01 |
| Status | Verifiziert |
| Referenzhandbuch | Freigegeben |
`;
  const evidence = evidenceDetails("research.md", research, "ACC-999");
  assert.strictEqual(evidence.length, 1);
  assert.strictEqual(evidence[0].status, "Verifiziert");
  assert.strictEqual(evidence[0].handbook, "Freigegeben");

  const test = testDetails(
    "test.md",
    `## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Status | Abgeschlossen |

## 13 Freigabe

| Pruefschritt | Status |
|--------------|--------|
| Freigabe erfolgt | Ja |
`
  );
  assert.strictEqual(test.status, "Abgeschlossen");
  assert.strictEqual(test.release, "Ja");

  const profile = profileDetails(
    "profile.md",
    `## 9 Reviewstatus

| Pruefschritt | Status |
|--------------|--------|
| Abschlussreview | Ja |
| Veroeffentlichung | Bereit |
`
  );
  assert.strictEqual(profile.finalReview, "Ja");
  assert.strictEqual(profile.publication, "Bereit");
}

function testReadiness() {
  const complete = readiness(readyTopic());
  assert.ok(Object.values(complete).every(Boolean), "ready topic should pass every check");

  const blockedTest = readyTopic();
  blockedTest.testStatus[0] = { status: "Blockiert", release: "Nein" };
  assert.strictEqual(readiness(blockedTest).testsReady, false);

  const unfinishedEvidence = readyTopic();
  unfinishedEvidence.evidence[0].status = "In Bearbeitung";
  assert.strictEqual(readiness(unfinishedEvidence).evidenceReady, false);

  const missingReview = readyTopic();
  missingReview.profileStatus[0].finalReview = "Nein";
  assert.strictEqual(readiness(missingReview).profilesReady, false);
}

testArgumentParsing();
testStatusExtraction();
testReadiness();

console.log("Topic lifecycle tests passed.");
