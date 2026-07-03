# Projektanalyse: Accessibility Knowledge Base (SAP-Handbuch)

Diese Dokumentation fasst eine vollständige Analyse des Repositorys `SAP-Handbuch.zip` zusammen: Zweck, Struktur, Governance-Modell, Redaktionsworkflow, Tooling und aktueller Bearbeitungsstand.

---

## 1 Überblick

Das Projekt trägt intern den Namen **"Accessibility Knowledge Base" (AKB)** des ITZBund (Informationstechnikzentrum Bund) und ist trotz des Dateinamens "SAP-Handbuch" kein reines SAP-Handbuch, sondern eine übergeordnete Wissensplattform zur digitalen Barrierefreiheit, in der SAP GUI for Windows aktuell das erste bearbeitete Referenzthema ist.

| Eigenschaft | Wert |
|-------------|------|
| Projektname | Accessibility Knowledge Base – ITZBund |
| Projektversion | 0.6 |
| Status | In Bearbeitung |
| Aktuelle Phase | Phase 3 – Fachliche Dokumentation |
| Erstes Referenzhandbuch | AKB-200 – SAP GUI for Windows |
| Git-Historie | 6 Commits (Initial commit bis "AKB Task 0023") |
| Markdown-Dateien gesamt | 51 (laut projekteigener Validierung) |
| Technologie | Node.js-CLI-Tooling + reine Markdown-Wissensbasis |

Das Kernprinzip des Projekts lautet: **"Qualität hat Vorrang vor Vollständigkeit."** Fachliche Aussagen dürfen erst veröffentlicht werden, wenn sie durch Primärquellen (Herstellerdokumentation) oder reproduzierbare eigene Praxistests belegt sind. Unbelegte Annahmen, Vermutungen oder erfundene Quellen sind explizit untersagt.

---

## 2 Projektstruktur

```text
SAP-Handbuch/
├── 00_Governance/           Verbindliche Regelwerke (11 Dokumente)
├── 01_Handbuecher/          Fachliche Referenzhandbücher (aktuell: SAP_GUI)
│   └── SAP_GUI/
│       ├── AKB-200-Referenzhandbuch-SAP-GUI.md
│       ├── kapitel/         17 Kapiteldateien (nur Kapitel 5 mit Inhalt)
│       ├── steckbriefe/     Planungs- und Steuerungsdokumente je Kapitel
│       ├── quellen/         Recherche-/Evidenzdateien
│       ├── praxistests/     Dokumentierte eigene Tests
│       └── screenshots/     Bildmaterial (aktuell leer)
├── 02_Confluence/           Platzhalter für abgeleitete Confluence-Inhalte
├── 03_Assets/               Diagramme, Logos, Screenshots, Vorlagen (leer)
├── 04_Quellenarchiv/        Archiv externer Quellen (BITV, BSI, EN301549, Microsoft, SAP, WCAG – leer)
├── 90_Projektverwaltung/    Phasenberichte, Sprintberichte, Roadmap, Changelog, Releases
├── 99_Archiv/               Alte Versionen / Releases (leer)
├── tools/                   Node.js-CLI und Automatisierungsskripte
├── AGENTS.md                Regelwerk für KI-/Automatisierungsagenten
├── TASKS.md                 Standardformat für Arbeitsaufträge an den Agenten
├── README.md, CHANGELOG.md, PROJECT_STATUS.md
└── package.json             npm-Skripte für das AKB-Tooling
```

Die meisten Ordner unter `02_Confluence/`, `03_Assets/`, `04_Quellenarchiv/` und `99_Archiv/` enthalten aktuell nur `.gitkeep`-Platzhalter — die Struktur ist bereits vollständig angelegt, inhaltlich aber noch nicht befüllt. Das bestätigt: Das Projekt befindet sich in einer frühen, aber organisatorisch bereits sehr reifen Phase.

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

**Zentrale Prinzipien, die sich durch alle Governance-Dokumente ziehen:**

- **Single Source of Truth:** Referenzhandbücher sind die einzige fachlich maßgebliche Quelle. Confluence-Seiten, Word- und PDF-Exporte leiten sich ausschließlich daraus ab und enthalten keine eigenständigen Inhalte.
- **Evidenzprinzip:** Jede fachliche Aussage muss als "Evidenz" mit Quellenzuordnung, Praxistestverweis, Interpretation, fachlicher Bewertung und Ergebnis dokumentiert werden, bevor sie ins Referenzhandbuch übernommen werden darf.
- **Forschungsmodus:** Bis zur vollständigen Prüfung bleibt der Status ausdrücklich "Noch nicht recherchiert" bzw. "Noch nicht durchgeführt" — Platzhalter-Inhalte als fachliche Aussage sind verboten.
- **Markdown-Regeln (AKB-100):** genau eine H1 pro Datei, keine übersprungenen Überschriftenebenen, keine Emojis/dekorativen Icons, Status ausschließlich als Klartext ohne Markdown-Formatierung, Tabellen stets mit Kopfzeile. Diese Regeln werden durch das Tool `validate-markdown.js` technisch erzwungen (siehe Abschnitt 5).

---

## 4 Rollen- und Prozessmodell

### 4.1 Rollen (aus `AGENTS.md`)

| Rolle | Verantwortung |
|-------|---------------|
| Autor | Erstellt fachliche Inhalte auf Basis freigegebener Evidenzen |
| Fachredaktion | Prüft Sprache, Struktur, Verständlichkeit |
| Reviewer | Prüft fachliche Nachvollziehbarkeit und Freigabereife |
| Praxistester | Führt reproduzierbare Tests durch und dokumentiert sie |
| Automatisierungsagent | Übernimmt ausschließlich mechanische/strukturelle Aufgaben in eng begrenztem Scope |

### 4.2 Standard-Workflow

Jeder fachliche Sprint folgt: **Recherche → Validierung → Redaktion → Veröffentlichung.** Vor Veröffentlichung müssen Evidenz und ggf. Praxistest abgeschlossen sein.

### 4.3 Dokumenttypen und ihr Zusammenspiel (Single-Source-of-Truth-Kette)

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

Jede fachliche Aussage wird nur an genau einer Stelle gepflegt (dem Referenzhandbuch); alle anderen Formate (Confluence, Word, PDF) sind reine Ableitungen.

### 4.4 Rolle des Automatisierungsagenten (KI)

`AGENTS.md` grenzt sehr präzise ab, was ein KI-Agent im Projekt tun darf und was nicht:

**Erlaubt:** Dateien anlegen, Markdown-Strukturen erzeugen, klar adressierte Abschnitte ergänzen/ersetzen, Statusinformationen und Projektstatus pflegen, Validierungen ausführen, Vorlagen nach Standard erzeugen.

**Nicht erlaubt:** fachliche Aussagen erfinden, Quellen interpretieren ohne Vorlage, Praxistests als durchgeführt markieren, Freigaben setzen, Inhalte ohne eindeutigen Auftrag umstrukturieren, mehrere Dateien außerhalb des Scopes ändern.

Ergänzend definiert `TASKS.md` ein striktes, textbasiertes Auftragsformat (Task-ID, Phase, Sprint, Ziel, Scope, Dateien, Aktion, Einfügeposition, erwartetes Ergebnis, Verbote, Validierung), mit dem jede Änderung durch den Automatisierungsagenten eindeutig, klein und prüfbar gehalten wird — ein bewusst restriktives Muster, um "Halluzinationen" oder ungewollte Nebenwirkungen von KI-gestützter Redaktion zu verhindern.

---

## 5 Tooling (`tools/`)

Das Projekt bringt eine selbst entwickelte Node.js-CLI namens **AKB CLI** mit (kein externes Framework, keine Abhängigkeiten laut `package.json` außer den Node-Bordmitteln). Umfang: ca. 2.120 Zeilen JavaScript über 18 Dateien.

| Datei | Zweck |
|-------|-------|
| `tools/akb.js` | CLI-Einstiegspunkt (`node tools/akb.js <command>`), registriert Subcommands: `validate`, `insert`, `phase`, `sprint-summary`, `status`, `doctor` |
| `tools/validate-markdown.js` | Technischer Linter für die AKB-Markdown-Regeln (H1-Anzahl, Überschriftensprünge, Emojis/Symbole, Tabellenköpfe, Klartext-Status) |
| `tools/insert-section.js` | Setzt oder ersetzt einen Abschnitt in einer Markdown-Datei anhand eines Heading-Pfads (z. B. `"2 Kapitel > 2.1 Unterkapitel"`); legt vor jeder Änderung automatisch ein Backup (`*.bak-<timestamp>`) an |
| `tools/update-project-status.js` | Aktualisiert kontrolliert Evidenz-/Teststatus sowie aktuellen/nächsten Sprint in `AKB-008-Projektstatus.md` |
| `tools/create-phase-report.js` | Erzeugt standardisierte Phasenberichte nach Standard PHS-1.0 (Abschnitte: Ziel, Ausgangslage, Scope, Umgesetzt, Geänderte Dateien, Validierung, Nicht Bestandteil, Risiken, Ergebnis, Nächste Phase) |
| `tools/create-sprint-summary.js` | Erzeugt Sprintberichte |
| `tools/sprint-finish.js` | Bündelt den Abschluss eines Sprints |
| `tools/commands/*.js` | Dünne Wrapper, die die CLI-Subcommands an die jeweiligen Skripte durchreichen |
| `tools/lib/filesystem.js`, `lib/logger.js`, `lib/project.js` | Kleine Hilfsmodule (Pfadauflösung, einheitliches Logging, zentrale Projektkonstanten) |
| `tools/tests/*.test.js` | Eigene Tests für Phasen- und Sprint-Tooling |

**npm-Skripte (`package.json`):**

```text
npm run akb                    → CLI-Einstiegspunkt
npm run akb:validate           → Markdown-Validierung
npm run akb:insert             → Abschnitt einfügen/ersetzen
npm run akb:phase              → Phasenbericht erzeugen
npm run akb:status             → Projektstatus aktualisieren
npm run sprint:finish          → Sprint abschließen
npm run akb:test:phase         → Tests für Phasen-Tooling
npm run akb:test:sprint-summary→ Tests für Sprint-Tooling
```

**Validierungsergebnis (im Rahmen dieser Analyse ausgeführt):**

```text
AKB Markdown validation passed (51 files).
```

Das Regelwerk wird also nicht nur dokumentiert, sondern aktiv technisch durchgesetzt — ein Hinweis auf ein bewusst hohes Qualitätsniveau für ein internes Verwaltungsprojekt.

---

## 6 Fachlicher Inhalt: Referenzhandbuch AKB-200 (SAP GUI for Windows)

Das Referenzhandbuch ist in 17 Kapitel gegliedert:

1. Vorwort
2. Grundlagen
3. SAP-GUI
4. Installation
5. **Barrierefreiheit** (einziges Kapitel mit ausgearbeitetem Inhalt)
6. Themes
7. Schrift und Darstellung
8. Screenreader
9. Tastaturbedienung
10. Scripting
11. Sicherheit
12. Administration
13. Bekannte Einschränkungen
14. Troubleshooting
15. FAQ
16. Glossar
17. Quellen

Kapitel 1–4 und 6–17 liegen bislang nur als Platzhalter vor (`Status: Entwurf`, keine inhaltliche Substanz). **Kapitel 5 (Barrierefreiheit)** ist der inhaltlich am weitesten entwickelte Teil und dient offensichtlich als Pilot-/Referenzkapitel für den gesamten Redaktionsprozess.

### 6.1 Inhaltlicher Stand von Kapitel 5

Bereits fertiggestellt und freigegeben sind zwei Unterabschnitte zum **Accessibility Mode**:

- SAP GUI for Windows verfügt über einen Accessibility Mode zur Unterstützung barrierefreier Nutzung.
- Aktivierung erfolgt über die SAP-GUI-Optionen (Menüpfad `Accessibility & Scripting → Accessibility`, Option `Use Accessibility Mode`).
- Änderungen werden erst nach einem Neustart von SAP Logon bzw. SAP Logon Pad wirksam (durch eigenen Praxistest PT-001 verifiziert).

Diese drei Aussagen durchlaufen im Repository sichtbar den kompletten Nachweisprozess: Recherchedatei `ACC-001-Accessibility-Mode.md` (3 Evidenzen, alle Status "Verifiziert") → Praxistest `PT-001` → Übernahme in `kapitel/05-Barrierefreiheit.md`.

Noch offen laut Steckbrief `Kapitel-05-Barrierefreiheit.md`:

- Einstellungen zur Barrierefreiheit (Recherche ACC-002, Praxistest PT-002 – Vorbereitung abgeschlossen)
- SAP Screen Reader Extensions
- Unterstützte Screenreader (JAWS, NVDA, Windows Narrator)
- Tastaturunterstützung
- Themes und Kontraste
- Bekannte Einschränkungen
- Empfehlungen für das ITZBund

### 6.2 Praxistests

Im Ordner `praxistests/` liegen 7 Testdateien (PT-001 bis PT-007), von denen laut Projektstatus aktuell **PT-001 abgeschlossen** und die übrigen in Vorbereitung bzw. geplant sind. Jeder Praxistest dokumentiert nach Standard PT-1.0 mindestens: Testgegenstand, Testumgebung, Produkt-/Versionsstand, Testdatum, Testdurchführung, Ergebnis und bekannte Einschränkungen.

---

## 7 Projektsteuerung (`90_Projektverwaltung/`)

| Bereich | Inhalt |
|---------|--------|
| `Phasen/` | 4 Phasenberichte, u. a. "Phase-001-Tooling-Foundation", "Phase-P002-AKB-Baseline-1-0" |
| `Sprintberichte/` | Sprintdokumentation (z. B. Sprint-001b, Sprint-P002) |
| `Roadmap/`, `Releases/`, `Changelog/` | Aktuell nur Platzhalter, `CHANGELOG.md` im Projektroot wird stattdessen genutzt |

Laut `CHANGELOG.md` (Version 0.6, "Strukturkonsolidierung") wurde das Projekt kürzlich strukturell aufgeräumt: Projektverwaltungsdateien wurden zentral unter `90_Projektverwaltung/` gebündelt, SAP-GUI-Unterordner wurden auf deutsche Zielbezeichnungen vereinheitlicht (`chapters/` → `kapitel/`, `sources/` → `quellen/`), veraltete Ordner und Platzhalterdateien entfernt.

`PROJECT_STATUS.md` bestätigt den aktuellen Arbeitsstand:

| Bereich | Status |
|---------|--------|
| ACC-001-E01 | Verifiziert |
| ACC-001-E02 | Verifiziert |
| PT-001 | Abgeschlossen |
| ACC-001-E03 | Nächster Sprint |

---

## 8 Bewertung und Einordnung

**Stärken:**

- Sehr konsequentes Qualitäts- und Nachweismodell (Evidenzprinzip), das Spekulation und unbelegte Aussagen aktiv verhindert — ungewöhnlich streng für ein Dokumentationsprojekt.
- Governance ist nicht nur beschrieben, sondern durch eigenes Tooling technisch erzwungen (Linter, Backup-sicheres Einfügen, kontrollierte Statuspflege).
- Klare Trennung zwischen fachlicher Dokumentation und Projektverwaltung sowie zwischen "Single Source of Truth" (Referenzhandbuch) und abgeleiteten Veröffentlichungen.
- Präzise definierte Leitplanken für den Einsatz eines KI-Automatisierungsagenten (`AGENTS.md`, `TASKS.md`) — ein durchdachtes Muster, um KI-gestützte Redaktion kontrollierbar zu halten.

**Aktueller Reifegrad:**

- Governance- und Tooling-Ebene: vollständig aufgebaut und "eingefroren" (laut README).
- Fachliche Ebene: sehr früh — von 17 geplanten SAP-GUI-Kapiteln ist nur Kapitel 5 teilweise ausgearbeitet, und auch dort sind erst 3 von vielen geplanten Evidenzen/Themenpaketen abgeschlossen.
- Weitere Bereiche (Confluence-Export, Quellenarchiv, Assets, Archiv) sind strukturell vorbereitet, aber inhaltlich leer.

**Kurz gesagt:** Es handelt sich um ein methodisch sehr reifes, aber inhaltlich noch am Anfang stehendes Dokumentationsprojekt des ITZBund zur digitalen Barrierefreiheit, das SAP GUI for Windows als erstes Referenzthema bearbeitet und dabei besonderen Wert auf Nachvollziehbarkeit, Quellentreue und kontrollierte (auch KI-gestützte) Redaktion legt.

---

## 9 Anhang: Vollständige Dateiliste (ohne `.git`)

<details>
<summary>Alle 90 Projektdateien</summary>

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
01_Handbuecher/SAP_GUI/steckbriefe/Kapitel-05-Barrierefreiheit.md
02_Confluence/{Dokumente,Entwicklung,SAP-GUI,Screenreader}/.gitkeep
03_Assets/{diagrams,logos,screenshots,templates}/.gitkeep
04_Quellenarchiv/{BITV,BSI,EN301549,Microsoft,SAP,WCAG}/.gitkeep
90_Projektverwaltung/Phasen/ (4 Berichte)
90_Projektverwaltung/Sprintberichte/ (2 Berichte)
90_Projektverwaltung/{Changelog,Releases,Roadmap}/.gitkeep
99_Archiv/{Alte-Versionen,Releases}/.gitkeep
AGENTS.md, CHANGELOG.md, PROJECT_STATUS.md, README.md, TASKS.md, package.json
tools/ (18 JavaScript-Dateien, ca. 2.120 Zeilen)
```

</details>
