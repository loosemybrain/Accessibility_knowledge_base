# Projektanalyse: Accessibility Knowledge Base (ITZBund)

Diese Dokumentation fasst eine vollständige Analyse des Repositorys **`loosemybrain/Accessibility_knowledge_base`** zusammen: Zweck, Struktur, Governance-Modell, Redaktionsworkflow, Tooling und aktueller Bearbeitungsstand.

> Aktualisierungshinweis: Diese Fassung ersetzt die ursprüngliche Analyse (Stand: lokaler Zip-Export, Commit `ec3ff58` / "AKB Task 0023") und berücksichtigt den Fortschritt bis Commit `e7992c1` ("AKB Task 0030").

---

## 1 Überblick

Das Projekt trägt intern den Namen **"Accessibility Knowledge Base" (AKB)** des ITZBund (Informationstechnikzentrum Bund) und ist trotz des ursprünglichen Arbeitstitels "SAP-Handbuch" kein reines SAP-Handbuch, sondern eine übergeordnete Wissensplattform zur digitalen Barrierefreiheit, in der SAP GUI for Windows das erste bearbeitete Referenzthema ist.

| Eigenschaft | Wert |
|-------------|------|
| Projektname | Accessibility Knowledge Base – ITZBund |
| Repository | github.com/loosemybrain/Accessibility_knowledge_base (öffentlich) |
| Projektversion | 0.6 |
| Status | In Bearbeitung |
| Aktuelle Phase | Phase 3 – Fachliche Dokumentation |
| Erstes Referenzhandbuch | AKB-200 – SAP GUI for Windows |
| Git-Historie | 7 Commits ("Initial commit" bis "AKB Task 0030") |
| Markdown-Dateien gesamt | 53 (laut projekteigener Validierung, Stand aktueller Commit) |
| Technologie | Node.js-CLI-Tooling + reine Markdown-Wissensbasis |

Kernprinzip: **"Qualität hat Vorrang vor Vollständigkeit."** Fachliche Aussagen werden erst veröffentlicht, wenn sie durch Primärquellen (Herstellerdokumentation) oder reproduzierbare eigene Praxistests belegt sind. Unbelegte Annahmen, Vermutungen oder erfundene Quellen sind explizit untersagt — und werden, wie der aktuelle Fortschritt zeigt, auch konsequent eingehalten (siehe Abschnitt 6.3, blockierte Praxistests).

---

## 2 Projektstruktur

```text
Accessibility_knowledge_base/
├── 00_Governance/                        Verbindliche Regelwerke (11 Dokumente)
├── 01_Handbuecher/                       Fachliche Referenzhandbücher (aktuell: SAP_GUI)
│   └── SAP_GUI/
│       ├── AKB-200-Referenzhandbuch-SAP-GUI.md
│       ├── kapitel/                      17 Kapiteldateien (Kapitel 5 mit Inhalt)
│       ├── steckbriefe/                  Planungs- und Steuerungsdokumente je Kapitel
│       ├── quellen/                      Recherche-/Evidenzdateien (ACC-001, ACC-002)
│       ├── praxistests/                  7 dokumentierte eigene Tests (PT-001 bis PT-007)
│       └── screenshots/                  7 Screenshots (neu seit letzter Analyse)
├── 02_Confluence/                        Platzhalter für abgeleitete Confluence-Inhalte
├── 03_Assets/                            Diagramme, Logos, Screenshots, Vorlagen (leer)
├── 04_Quellenarchiv/                     Archiv externer Quellen (BITV, BSI, EN301549, Microsoft, SAP, WCAG – leer)
├── 90_Projektverwaltung/
│   ├── Architecture Decision Records/    NEU: ADR-001
│   ├── Phasen/                           Phasenberichte
│   ├── Sprintberichte/
│   ├── Roadmap/, Releases/, Changelog/   (leer, Platzhalter)
├── 99_Archiv/                            Alte Versionen / Releases (leer)
├── tools/                                Node.js-CLI und Automatisierungsskripte
├── AGENTS.md                             Regelwerk für KI-/Automatisierungsagenten (jetzt inkl. ADR-Abschnitt)
├── TASKS.md                              Standardformat für Arbeitsaufträge an den Agenten
├── README.md, CHANGELOG.md, PROJECT_STATUS.md
└── package.json                          npm-Skripte für das AKB-Tooling
```

Neu seit der letzten Analyse ist der Ordner `90_Projektverwaltung/Architecture Decision Records/` — eine strukturelle Erweiterung, die eine neue Dokumentart (ADR) neben den bisherigen Governance-Dokumenten einführt (siehe Abschnitt 4).

---

## 3 Governance-Modell (`00_Governance/`)

Das Projekt verfügt über ein ungewöhnlich detailliertes Regelwerk aus 11 Governance-Dokumenten (AKB-001 bis AKB-102), die den gesamten Lebenszyklus der Dokumentation steuern:

| Dokument | Zweck |
|----------|-------|
| AKB-000 | README / Einstiegspunkt der Governance |
| AKB-001 | Dokumentationsrichtlinie |
| AKB-002 | Redaktionsleitfaden |
| AKB-003 | Quellenrichtlinie |
| AKB-004 | Dokumententypen (Referenzhandbuch, Checkliste, FAQ, Vergleichsdokument, Praxistest, Confluence-Beitrag) |
| AKB-005 | Screenshot-Richtlinie |
| AKB-006 | Reviewprozess |
| AKB-007 | Projektarchitektur |
| AKB-008 | Projektstatus (einziges automatisiert gepflegtes Governance-Dokument) |
| AKB-100 | Markdown-Styleguide |
| AKB-101 | Dokumentenarchitektur |
| AKB-102 | Dokumentendesign |

**Zentrale Prinzipien:**

- **Single Source of Truth:** Referenzhandbücher sind die einzige fachlich maßgebliche Quelle. Confluence-Seiten, Word- und PDF-Exporte leiten sich ausschließlich daraus ab.
- **Evidenzprinzip:** Jede fachliche Aussage wird als "Evidenz" mit Quellenzuordnung, Praxistestverweis, Interpretation, fachlicher Bewertung und Ergebnis dokumentiert, bevor sie ins Referenzhandbuch übernommen werden darf.
- **Forschungsmodus:** Bis zur vollständigen Prüfung bleibt der Status ausdrücklich "Noch nicht recherchiert" bzw. "Noch nicht durchgeführt" bzw. seit dem neuesten Sprint auch **"Blockiert"**, wenn eine Prüfung technisch nicht möglich ist (siehe Abschnitt 6.3).
- **Markdown-Regeln (AKB-100):** genau eine H1 pro Datei, keine übersprungenen Überschriftenebenen, keine Emojis/dekorativen Icons, Status ausschließlich als Klartext, Tabellen stets mit Kopfzeile — technisch erzwungen durch `validate-markdown.js`.

---

## 4 Neu: Architecture Decision Records (ADR-001)

Mit dem aktuellen Sprint hat das Projekt eine neue, bislang nicht vorhandene Dokumentkategorie eingeführt: **Architecture Decision Records**. `AGENTS.md` wurde um Abschnitt 17 ergänzt und grenzt ADRs klar von Governance-Standards ab:

> "Standards beschreiben Regeln. ADRs beschreiben Begründungen."

Die erste und bislang einzige ADR, **ADR-001**, trifft eine strategisch bedeutsame Entscheidung:

**Kontext:** Im Projektverlauf sind neben den fachlichen SAP-GUI-Inhalten zunehmend generische, themenunabhängige Bestandteile entstanden — Dokumentationsstandards, Evidenzmodell, Praxistestmodell, Sprint-/Phasenmodell, Tooling, Automatisierungsagent, Exportkonzept.

**Entscheidung:** Diese generischen Bestandteile werden konzeptionell zu einem eigenständigen **"ITZ Documentation Framework"** zusammengefasst. Die Accessibility Knowledge Base bleibt als fachliches Projekt bestehen, gilt aber künftig als **Referenzimplementierung** dieses Frameworks.

**Begründung:** Trennung von Framework und Fachprojekt verbessert die Wartbarkeit, erlaubt unabhängige Weiterentwicklung generischer Bestandteile und erleichtert die Übertragung der Methodik auf zukünftige Dokumentationsprojekte, ohne fachliche Inhalte kopieren zu müssen.

**Konsequenz für die Struktur:**

| Wird Framework-Bestandteil | Bleibt projektspezifisch (AKB) |
|---|---|
| Dokumentationsstandards, Rollenmodell | Fachliche Inhalte zur Barrierefreiheit |
| Evidenz- und Praxistestmodell | SAP-GUI-spezifische Recherchedateien |
| Sprint-/Phasenmodell, Projektverwaltungsstruktur | SAP-GUI-spezifische Praxistests |
| Tooling/CLI-Struktur | Kapitel des Referenzhandbuchs AKB-200 |
| Export-/Veröffentlichungsprozesse | Quellen- und Evidenzzuordnungen, Screenshots |

Dieser Schritt zeigt eine Reifung des Projekts von einer reinen SAP-GUI-Dokumentation hin zu einem methodischen Baukasten mit Ambition auf Wiederverwendbarkeit über das ITZBund hinaus.

---

## 5 Rollen- und Prozessmodell

### 5.1 Rollen (aus `AGENTS.md`)

| Rolle | Verantwortung |
|-------|---------------|
| Autor | Erstellt fachliche Inhalte auf Basis freigegebener Evidenzen |
| Fachredaktion | Prüft Sprache, Struktur, Verständlichkeit |
| Reviewer | Prüft fachliche Nachvollziehbarkeit und Freigabereife |
| Praxistester | Führt reproduzierbare Tests durch und dokumentiert sie |
| Automatisierungsagent | Übernimmt ausschließlich mechanische/strukturelle Aufgaben in eng begrenztem Scope |

### 5.2 Standard-Workflow

Jeder fachliche Sprint folgt: **Recherche → Validierung → Redaktion → Veröffentlichung.** Vor Veröffentlichung müssen Evidenz und ggf. Praxistest abgeschlossen sein.

### 5.3 Dokumenttypen und ihr Zusammenspiel (Single-Source-of-Truth-Kette)

```text
Steckbrief  →  Planung & Steuerung eines Kapitels
   ↓
Recherchedatei (quellen/*.md)  →  Evidenzen mit Primärquellen
   ↓
Praxistest (praxistests/*.md)  →  reproduzierbare eigene Verifikation
   ↓
Kapitel (kapitel/*.md)  →  veröffentlichungsreifer Fachtext
   ↓
Referenzhandbuch (AKB-200)  →  Zusammenführung aller freigegebenen Kapitel
```

### 5.4 Rolle des Automatisierungsagenten (KI)

`AGENTS.md` grenzt präzise ab, was ein KI-Agent tun darf:

**Erlaubt:** Dateien anlegen, Markdown-Strukturen erzeugen, klar adressierte Abschnitte ergänzen/ersetzen, Statusinformationen pflegen, Validierungen ausführen, Vorlagen nach Standard erzeugen.

**Nicht erlaubt:** fachliche Aussagen erfinden, Quellen interpretieren ohne Vorlage, Praxistests als durchgeführt markieren, Freigaben setzen, Inhalte ohne eindeutigen Auftrag umstrukturieren, mehrere Dateien außerhalb des Scopes ändern.

`TASKS.md` definiert dazu ein striktes, textbasiertes Auftragsformat (Task-ID, Phase, Sprint, Ziel, Scope, Dateien, Aktion, Einfügeposition, erwartetes Ergebnis, Verbote, Validierung) — ein bewusst restriktives Muster, um Halluzinationen oder ungewollte Nebenwirkungen KI-gestützter Redaktion zu verhindern. Der aktuelle Sprint trägt konsequenterweise die Bezeichnung "AKB Task 0030".

---

## 6 Tooling (`tools/`)

Unverändert gegenüber der letzten Analyse: eine selbst entwickelte Node.js-CLI **AKB CLI** (ca. 2.120 Zeilen JavaScript, 18 Dateien, keine externen Abhängigkeiten außer Node-Bordmitteln).

| Datei | Zweck |
|-------|-------|
| `tools/akb.js` | CLI-Einstiegspunkt, registriert Subcommands: `validate`, `insert`, `phase`, `sprint-summary`, `status`, `doctor` |
| `tools/validate-markdown.js` | Technischer Linter für die AKB-Markdown-Regeln |
| `tools/insert-section.js` | Setzt/ersetzt Abschnitte anhand eines Heading-Pfads, mit automatischem Backup |
| `tools/update-project-status.js` | Aktualisiert kontrolliert Evidenz-/Teststatus und Sprintinformationen in AKB-008 |
| `tools/create-phase-report.js` | Erzeugt standardisierte Phasenberichte (Standard PHS-1.0) |
| `tools/create-sprint-summary.js` | Erzeugt Sprintberichte |
| `tools/sprint-finish.js` | Bündelt den Abschluss eines Sprints |
| `tools/commands/*.js`, `tools/lib/*.js` | CLI-Wrapper und Hilfsmodule |
| `tools/tests/*.test.js` | Eigene Tests für Phasen- und Sprint-Tooling |

**Aktuelles Validierungsergebnis (im Rahmen dieser Analyse ausgeführt):**

```text
AKB Markdown validation passed (53 files).
```

(zuvor 51, davor 39 — die Dateizahl wächst mit jedem Sprint kontinuierlich, ohne dass die Validierung bricht.)

---

## 7 Fachlicher Inhalt: Referenzhandbuch AKB-200 (SAP GUI for Windows)

Das Referenzhandbuch ist weiterhin in 17 Kapitel gegliedert, wobei nur **Kapitel 5 (Barrierefreiheit)** inhaltlich ausgearbeitet ist. Kapitel 1–4 und 6–17 bleiben Platzhalter (`Status: Entwurf`).

### 7.1 Kapitel 5 – aktueller Stand

**5.2 Accessibility Mode** (bereits zuvor abgeschlossen, unverändert):

- SAP GUI for Windows verfügt über einen Accessibility Mode zur Unterstützung barrierefreier Nutzung.
- Aktivierung über SAP-GUI-Optionen (`Accessibility & Scripting → Accessibility`, Option `Use Accessibility Mode`).
- Änderungen werden erst nach Neustart von SAP Logon bzw. SAP Logon Pad wirksam (durch Praxistest PT-001 verifiziert).

**5.3 Einstellungen zur Barrierefreiheit** (NEU, seit Commit "AKB Task 0030"):

Der Abschnitt ist jetzt vollständig als Fließtext vorhanden und beschreibt sechs Einstellungen:

1. Use Accessibility Mode
2. Include read-only and disabled elements in tab chain
3. Display symbols in lists as letters
4. Dialog box for messages
5. Set F4 help to modal dialog
6. Open Office documents outplace for better screen reader support

Der Abschnitt trägt jedoch einen expliziten Warnhinweis:

> Dieser Abschnitt basiert derzeit ausschließlich auf den dokumentierten Herstellerinformationen. Die zugehörigen Praxistests konnten aufgrund einer fehlenden SAP-GUI-Testumgebung noch nicht durchgeführt werden. Eine fachliche Freigabe erfolgt nach Abschluss der Praxistests.

Das ist ein direktes, sichtbares Beispiel für das Evidenzprinzip in der Praxis: Herstellerbasierte Inhalte werden zwar bereits redaktionell aufbereitet, aber ausdrücklich **nicht** als verifiziert oder freigegeben gekennzeichnet, solange die eigene Nachweisführung fehlt.

Noch offen laut Steckbrief: SAP Screen Reader Extensions, unterstützte Screenreader (JAWS, NVDA, Windows Narrator), Tastaturunterstützung, Themes und Kontraste, bekannte Einschränkungen, Empfehlungen für das ITZBund.

### 7.2 Recherchedatei ACC-002 – Einstellungen zur Barrierefreiheit

Deutlich ausgebaut (von einer leeren Vorlage auf 785 Zeilen). Enthält jetzt 7 Evidenzen (ACC-002-E01 bis E07), passend zu den sechs im Kapitel beschriebenen Einstellungen plus einer weiteren:

| Evidenz | Status |
|---------|--------|
| ACC-002-E01 | In Vorbereitung |
| ACC-002-E02 | In Bearbeitung |
| ACC-002-E03 | **Verifiziert** |
| ACC-002-E04 | In Bearbeitung |
| ACC-002-E05 | In Bearbeitung |
| ACC-002-E06 | In Bearbeitung |
| ACC-002-E07 | In Bearbeitung |

Nur ACC-002-E03 hat den vollständigen Nachweiszyklus durchlaufen (entsprechend dem Praxistest PT-003, siehe unten).

### 7.3 Praxistests: sichtbare Blockade durch fehlende Testumgebung

Von den 7 Praxistests (PT-001 bis PT-007) ist der Bearbeitungsstand jetzt differenzierter als zuvor:

| Test-ID | Thema | Status |
|---------|-------|--------|
| PT-001 | Accessibility Mode – Aktivierung | Abgeschlossen |
| PT-002 | Einstellungen zur Barrierefreiheit (Übersicht) | **Blockiert** |
| PT-003 | Include read-only and disabled elements in tab chain | Abgeschlossen |
| PT-004 | Display symbols in lists as letters | **Blockiert** |
| PT-005 | Dialog box for messages | **Blockiert** |
| PT-006 | Set F4 help to modal dialog | **Blockiert** |
| PT-007 | Weitere Accessibility-Einstellungen | **Blockiert** |

Die Blockade ist explizit begründet, z. B. in PT-002:

> Begründung: SAP GUI for Windows ist auf der aktuellen Entwicklungsumgebung nicht installiert.
> Offener nächster Schritt: Durchführung in einer Umgebung mit installierter SAP GUI for Windows.

Bemerkenswert: **PT-003 konnte trotzdem abgeschlossen werden** — vermutlich, weil die zugrunde liegende Fragestellung (Herstellerdefinition der Einstellung) ohne praktische SAP-GUI-Umgebung beantwortbar war, ähnlich wie zuvor bei Evidenz ACC-001-E01. Dies bestätigt erneut das etablierte Muster: Nicht jede Evidenz benötigt zwingend einen praktischen Test, wenn die Aussage bereits durch Herstellerdokumentation hinreichend belegt ist.

### 7.4 Screenshots

Der zuvor leere Ordner `screenshots/` enthält jetzt 7 Bilddateien: `sap_logon.PNG`, `sap_logon_optionen.PNG`, `sap_logon_schrift.png`, `sap_logon_sicherheit.png`, `sap_logon_skripte.PNG`, `sap_logon_themes.PNG`, `sap_logon_themes_auswahl.png`. Diese dienen voraussichtlich als Bildbelege für Kapitel 5.2/5.3, sind aber noch nicht in den Steckbrief-Statustabellen als "vorhanden" nachgezogen (Stand Steckbrief: mehrere Screenshot-IDs weiterhin "Offen").

---

## 8 Projektsteuerung (`90_Projektverwaltung/`)

| Bereich | Inhalt |
|---------|--------|
| `Architecture Decision Records/` | NEU: ADR-001 (siehe Abschnitt 4) |
| `Phasen/` | 4 Phasenberichte, u. a. "Phase-001-Tooling-Foundation", "Phase-P002-AKB-Baseline-1-0" |
| `Sprintberichte/` | Sprintdokumentation (z. B. Sprint-001b, Sprint-P002) |
| `Roadmap/`, `Releases/`, `Changelog/` | weiterhin nur Platzhalter, `CHANGELOG.md` im Projektroot wird stattdessen genutzt |

`PROJECT_STATUS.md` selbst spiegelt inhaltlich noch den älteren Stand wider (Sprint ACC-001, 39 validierte Dateien) — die Aktualisierung dieses Dokuments über `tools/update-project-status.js` scheint dem neuesten Sprint (ACC-002, Kapitel 5.3, ADR-001) noch nicht nachgezogen worden zu sein. Das ist der einzige inhaltliche Nachpflegebedarf, der bei dieser Analyse auffällt.

---

## 9 Bewertung und Einordnung

**Stärken:**

- Sehr konsequentes Qualitäts- und Nachweismodell (Evidenzprinzip), das Spekulation aktiv verhindert — und sich jetzt auch im Umgang mit **Blockaden** bewährt: Fehlende Testinfrastruktur führt zu ehrlichem "Blockiert" statt zu übersprungenen oder erfundenen Ergebnissen.
- Governance ist technisch erzwungen (Linter, Backup-sicheres Einfügen, kontrollierte Statuspflege) und wächst mit dem Projekt mit (53 statt 51 statt 39 Dateien, Validierung bleibt grün).
- Mit ADR-001 zeigt das Projekt eine methodische Weiterentwicklung: Bewusste Trennung zwischen wiederverwendbarem Framework und fachlichem Projekt — ein Schritt in Richtung Skalierbarkeit über die Accessibility Knowledge Base hinaus.
- Präzise definierte Leitplanken für den Einsatz eines KI-Automatisierungsagenten bleiben bestehen und werden konsequent für die Sprintarbeit genutzt (aktueller Sprint: "AKB Task 0030").

**Aktueller Reifegrad:**

- Governance- und Tooling-Ebene: vollständig aufgebaut, jetzt zusätzlich um eine Framework/Projekt-Trennung (ADR-001) erweitert.
- Fachliche Ebene: Kapitel 5 macht sichtbaren Fortschritt (5.2 abgeschlossen, 5.3 im Entwurf mit klar benannter Testlücke); die übrigen 16 Kapitel sind weiterhin unangetastet.
- Neuer, konkreter Engpass identifiziert: **fehlende SAP-GUI-Testumgebung** blockiert 5 von 7 Praxistests und damit indirekt die Freigabe von Abschnitt 5.3.
- `PROJECT_STATUS.md` ist gegenüber dem tatsächlichen Fortschritt leicht veraltet und sollte im nächsten Sprint per `npm run akb:status` nachgezogen werden.

**Kurz gesagt:** Das Projekt entwickelt sich konsequent nach seinen eigenen Regeln weiter. Der bemerkenswerteste Fortschritt ist nicht nur inhaltlich (Kapitel 5.3), sondern strukturell: Mit ADR-001 beginnt das Projekt, seine eigene Methodik als wiederverwendbares Framework zu begreifen — bei gleichzeitig transparent dokumentiertem, konkretem Hemmnis (fehlende Testumgebung), das den nächsten sinnvollen Arbeitsschritt klar vorgibt.

---

## 10 Anhang: Vollständige Dateiliste (ohne `.git`)

<details>
<summary>Alle Projektdateien (Stand Commit e7992c1, "AKB Task 0030")</summary>

```text
.gitignore
.markdownlint.json
.vscode/extensions.json
.vscode/settings.json
00_Governance/AKB-000-README.md … AKB-102-Dokumentendesign.md (11 Dateien)
01_Handbuecher/SAP_GUI/AKB-200-Referenzhandbuch-SAP-GUI.md
01_Handbuecher/SAP_GUI/kapitel/01-Vorwort.md … 17-Quellen.md (17 Dateien)
01_Handbuecher/SAP_GUI/praxistests/PT-001 … PT-007 (7 Dateien)
01_Handbuecher/SAP_GUI/quellen/ACC-001, ACC-002
01_Handbuecher/SAP_GUI/screenshots/ (7 Bilddateien, neu)
01_Handbuecher/SAP_GUI/steckbriefe/Kapitel-05-Barrierefreiheit.md
02_Confluence/{Dokumente,Entwicklung,SAP-GUI,Screenreader}/.gitkeep
03_Assets/{diagrams,logos,screenshots,templates}/.gitkeep
04_Quellenarchiv/{BITV,BSI,EN301549,Microsoft,SAP,WCAG}/.gitkeep
90_Projektverwaltung/Architecture Decision Records/ADR-001-...md (neu)
90_Projektverwaltung/Phasen/ (4 Berichte)
90_Projektverwaltung/Sprintberichte/ (2 Berichte)
90_Projektverwaltung/{Changelog,Releases,Roadmap}/.gitkeep
99_Archiv/{Alte-Versionen,Releases}/.gitkeep
AGENTS.md, CHANGELOG.md, PROJECT_STATUS.md, README.md, TASKS.md, package.json
SAP-Handbuch-Projektanalyse.md (diese Dokumentation, im Repo abgelegt)
tools/ (18 JavaScript-Dateien, ca. 2.120 Zeilen)
```

</details>
