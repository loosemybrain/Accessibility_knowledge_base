# Projektanalyse: Accessibility Knowledge Base des ITZBund

Diese Dokumentation fasst den aktuellen lokalen Stand des Repositorys `loosemybrain/Accessibility_knowledge_base` zusammen. Analysiert wurden Projektzweck, Struktur, Governance, Dokumentationsworkflow, Tooling, fachlicher Bearbeitungsstand und erkennbare Statusabweichungen.

| Eigenschaft | Analysestand |
|-------------|--------------|
| Analysedatum | 14.07.2026 |
| Git-HEAD | `0059604` – `clean up` |
| Git-Commits | 10 |
| Remote | `https://github.com/loosemybrain/Accessibility_knowledge_base.git` |
| Betrachtungsgrundlage | Lokaler Arbeitsstand einschließlich noch nicht versionierter Phasendokumentation |
| Markdown-Dateien | 63 im Arbeitsstand, davon 62 versioniert |
| JavaScript-Dateien | 25 |
| JavaScript-Zeilen unter `tools/` | 2.723 |

Der vorherige Analysestand bezog sich auf Commit `e7992c1` und 53 validierte Markdown-Dateien. Die vorliegende Fassung ersetzt diesen Stand vollständig.

---

## 1 Projektzweck und Einordnung

Die Accessibility Knowledge Base des ITZBund ist eine langfristig wartbare Wissensplattform zur digitalen Barrierefreiheit. SAP GUI for Windows ist das erste Referenzthema, das Projekt ist jedoch nicht auf ein einzelnes SAP-Handbuch begrenzt.

| Eigenschaft | Wert |
|-------------|------|
| Projektname | Accessibility Knowledge Base – ITZBund |
| Projektversion laut README | 0.6 |
| Status laut README | In Bearbeitung |
| Aktuelle Phase laut README | Phase 3 – Fachliche Dokumentation |
| Referenzhandbuch | AKB-200 – SAP GUI for Windows |
| Technologie | Markdown-Wissensbasis mit Node.js-CLI |

Das zentrale Qualitätsprinzip lautet: „Qualität hat Vorrang vor Vollständigkeit.“ Fachliche Aussagen sollen erst veröffentlicht werden, wenn sie durch dokumentierte Quellen oder reproduzierbare Praxistests abgesichert sind.

---

## 2 Projektstruktur

```text
Accessibility_knowledge_base/
├── 00_Governance/                        14 Governance- und Standarddokumente
├── 01_Handbuecher/
│   └── SAP_GUI/
│       ├── AKB-200-Referenzhandbuch-SAP-GUI.md
│       ├── kapitel/                      17 Kapiteldateien
│       ├── steckbriefe/                  1 Kapitel-Steckbrief
│       ├── quellen/                      4 Recherchedateien
│       ├── praxistests/                  7 Praxistests
│       └── screenshots/                  7 Bilddateien und .gitkeep
├── 02_Confluence/                        Zielstruktur für abgeleitete Inhalte
├── 03_Assets/                            Zielstruktur für zentrale Assets
├── 04_Quellenarchiv/                     Zielstruktur für archivierte Quellen
├── 90_Projektverwaltung/
│   ├── Architecture Decision Records/    1 ADR
│   ├── Phasen/                           8 Phasenberichte im Arbeitsstand
│   ├── Sprintberichte/                   3 Sprintberichte
│   ├── Roadmap/
│   ├── Releases/
│   └── Changelog/
├── 99_Archiv/
├── tools/                                AKB CLI, Hilfsmodule und Tests
├── AGENTS.md
├── TASKS.md
├── README.md
├── PROJECT_STATUS.md
├── CHANGELOG.md
└── package.json
```

Die fachliche Dokumentation und die Projektverwaltung sind organisatorisch getrennt. Fachliche Inhalte liegen unter `01_Handbuecher`, während Phasen, Sprints und Architekturentscheidungen unter `90_Projektverwaltung` verwaltet werden.

---

## 3 Governance und Dokumentstandards

Unter `00_Governance` liegen 14 Markdown-Dokumente:

| Gruppe | Dokumente | Zweck |
|--------|-----------|-------|
| Governance | AKB-000 bis AKB-008 | Dokumentation, Redaktion, Quellen, Dokumenttypen, Screenshots, Review, Projektarchitektur und Projektstatus |
| Struktur und Darstellung | AKB-100 bis AKB-102 | Markdown, Dokumentenarchitektur und Dokumentendesign |
| Themenpakete | TMP-1.0 | standardisierte Themenpaket-Vorlagen |
| Lifecycle | TOP-1.0 | Status, Review und Abschluss von Themenpaketen |

Die in `AGENTS.md` benannten Dokumentstandards sind:

| Standard | Dokumenttyp |
|----------|-------------|
| GOV-1.0 | Governance-Dokumente |
| STB-1.0 | Kapitel-Steckbriefe |
| RCH-2.0 | Recherchedateien |
| PT-1.0 | Praxistests |
| DOC-1.0 | Kapiteldateien |
| TMP-1.0 | Themenpaket-Vorlagen |
| PHS-1.0 | Phasenberichte |

### 3.1 Zentrale Prinzipien

- Single Source of Truth: Fachliche Informationen werden nur einmal gepflegt.
- Evidenzprinzip: Eine Evidenz dokumentiert genau eine fachliche Aussage.
- Forschungsmodus: Nicht geprüfte Inhalte bleiben als nicht recherchiert oder nicht durchgeführt gekennzeichnet.
- Rollenmodell: Autor, Fachredaktion, Reviewer, Praxistester und Automatisierungsagent besitzen getrennte Verantwortlichkeiten.
- Kontrollierter Scope: Änderungen benötigen Datei, Aktion, Position und erwartetes Ergebnis.
- Technische Validierung: Markdown-Regeln werden automatisiert geprüft.
- Topic Lifecycle: Neue Themenpakete werden nach TOP-1.0 bearbeitet und durch die CLI begleitet.

### 3.2 Architecture Decision Record

ADR-001 beschreibt die Accessibility Knowledge Base als Referenzimplementierung eines allgemeineren ITZ Documentation Framework. Das ADR trennt wiederverwendbare Methoden und Werkzeuge von den projektspezifischen SAP- und Accessibility-Inhalten.

---

## 4 Dokumentationsworkflow

Der fachliche Standard-Workflow besteht aus vier Schritten:

```text
Recherche → Validierung → Redaktion → Veröffentlichung
```

Die Dokumenttypen bilden folgende Verarbeitungskette:

```text
Steckbrief
  → plant und steuert ein Kapitel
Recherchedatei
  → dokumentiert Evidenzen und Quellen
Praxistest
  → dokumentiert reproduzierbare Prüfungen
Kapitel
  → enthält freigegebenen Fachtext
Referenzhandbuch
  → führt freigegebene Kapitel zusammen
```

Neue Themenpakete sollen nicht manuell angelegt werden. TMP-1.0 und der CLI-Befehl `create-topic` erzeugen die erforderlichen Platzhalterstrukturen. Die Lifecycle-Befehle `topic status`, `topic review` und `topic finish` begleiten Statusprüfung, Review und organisatorischen Abschluss, setzen jedoch keine fachlichen Freigaben.

---

## 5 Tooling

Das Projekt enthält 25 JavaScript-Dateien mit insgesamt 2.723 Zeilen unter `tools/`. Es werden ausschließlich Node.js-Bordmittel verwendet; `package.json` weist keine externen Abhängigkeiten aus.

### 5.1 CLI-Befehle

| Befehl | Zweck |
|--------|-------|
| `validate` | Markdown-Struktur und Projektregeln prüfen |
| `insert` | Abschnitt anhand eines Heading-Pfads einfügen oder ersetzen |
| `phase` | Phasenbericht erzeugen oder aktualisieren |
| `sprint-summary` | Sprintbericht erzeugen |
| `create-topic` | Themenpaket nach TMP-1.0 erzeugen |
| `topic status` | Status eines Themenpakets anzeigen |
| `topic review` | Abschlusskriterien eines Themenpakets prüfen |
| `topic finish` | organisatorische Abschlussartefakte erzeugen |
| `status` | Projektstatus über das vorgesehene Statuswerkzeug pflegen |
| `doctor` | zentrale Ordner und Pflichtdateien prüfen |

### 5.2 Automatisierte Tests

| npm-Skript | Prüfbereich |
|------------|-------------|
| `akb:test:phase` | Phasen-Tooling |
| `akb:test:sprint-summary` | Sprintberichte |
| `akb:test:topic` | Topic Lifecycle |
| `akb:test:status` | Projektstatuspflege |

### 5.3 Aktueller technischer Prüfstand

| Prüfung | Ergebnis |
|---------|----------|
| `npm run akb:validate` | Erfolgreich; 63 Markdown-Dateien geprüft |
| `npm run akb -- doctor` | Erfolgreich; 11 Prüfungen bestanden |

---

## 6 Fachlicher Stand des Referenzhandbuchs AKB-200

Das Referenzhandbuch ist in 17 Kapiteldateien gegliedert. Kapitel 5 „Barrierefreiheit“ ist das derzeit fachlich bearbeitete Kapitel; die übrigen Kapitel sind nach AKB-008 offen.

### 6.1 Veröffentlichter Inhalt in Kapitel 5

Kapitel 5 enthält aktuell folgende Abschnitte:

1. Zweck
2. Voraussetzungen
3. Accessibility Mode aktivieren
4. Schreibgeschützte und deaktivierte Elemente in die Tabulatorreihenfolge einbeziehen
5. Grenzen der dokumentierten Prüfung
6. Nachweise

Die veröffentlichten Aussagen sind im Kapitel folgenden Nachweisen zugeordnet:

| Aussagebereich | Evidenzen | Praxistest |
|----------------|-----------|------------|
| Accessibility Mode und Aktivierung | ACC-001-E01, ACC-001-E02 | PT-001 |
| Neustartverhalten | ACC-001-E03 | PT-001 |
| Schreibgeschützte und deaktivierte Elemente in der Tabulatorreihenfolge | ACC-002-E03 | PT-003 |

Screenreader-spezifisches Verhalten war nicht Bestandteil der dokumentierten Praxistests und wird im Kapitel ausdrücklich abgegrenzt.

### 6.2 Recherchedateien und Evidenzen

Es bestehen vier Recherchedateien mit insgesamt 18 Evidenzen:

| Recherche | Thema | Evidenzen | Dokumentstatus |
|-----------|-------|-----------|----------------|
| ACC-001 | Accessibility Mode | E01 bis E03 | In Bearbeitung |
| ACC-002 | Einstellungen zur Barrierefreiheit | E01 bis E07 | In Bearbeitung |
| ACC-003 | SAP Screen Reader Extensions | E01 bis E04 und E06 | In Bearbeitung |
| ACC-004 | Assistive Technologien | E01 bis E03 | In Bearbeitung |

Der dokumentierte Evidenzstatus verteilt sich wie folgt:

| Status | Anzahl | Evidenzen |
|--------|--------|-----------|
| Verifiziert | 5 | ACC-001-E01 bis E03, ACC-002-E02, ACC-002-E03 |
| In Vorbereitung | 1 | ACC-002-E01 |
| In Bearbeitung | 12 | ACC-002-E04 bis E07, alle dokumentierten Evidenzen aus ACC-003 und ACC-004 |

ACC-002-E03 ist für das Referenzhandbuch freigegeben. ACC-002-E02 ist als verifiziert und der zugehörige PT-002 als abgeschlossen dokumentiert, der Referenzhandbuchstatus lautet jedoch weiterhin „Nicht freigegeben“.

### 6.3 Praxistests

| Test-ID | Thema | Status |
|---------|-------|--------|
| PT-001 | Accessibility Mode – Aktivierung | Abgeschlossen |
| PT-002 | Einstellungen zur Barrierefreiheit | Abgeschlossen |
| PT-003 | Schreibgeschützte und deaktivierte Elemente in der Tabulatorreihenfolge | Abgeschlossen |
| PT-004 | Symbole in Listen als Buchstaben darstellen | Blockiert |
| PT-005 | Dialogfeld für Meldungen | Blockiert |
| PT-006 | F4-Hilfe als modales Dialogfeld | Blockiert |
| PT-007 | Weitere Accessibility-Einstellungen | Blockiert |

PT-004 bis PT-007 dokumentieren weiterhin, dass SAP GUI for Windows in der Entwicklungsumgebung nicht installiert sei. PT-002 dokumentiert inzwischen eine Testumgebung und einen abgeschlossenen Test. Diese Angaben sind im aktuellen Arbeitsstand nicht vollständig konsistent.

### 6.4 Screenshots

Im Screenshot-Ordner liegen sieben Bilddateien:

- `sap_logon.PNG`
- `sap_logon_optionen.PNG`
- `sap_logon_schrift.png`
- `sap_logon_sicherheit.png`
- `sap_logon_skripte.PNG`
- `sap_logon_themes.PNG`
- `sap_logon_themes_auswahl.png`

Zusätzlich liegt dort die strukturerhaltende Datei `.gitkeep`.

---

## 7 Projektverwaltung

Der lokale Arbeitsstand enthält:

| Dokumentklasse | Anzahl |
|----------------|--------|
| Architecture Decision Records | 1 |
| Phasenberichte | 8 |
| Sprintberichte | 3 |

Die jüngsten Phasenberichte dokumentieren unter anderem:

- Baseline 1.1 Freeze
- Analyse und Abschlussstand von PT-002
- Statussynchronisation von ACC-002-E02
- projektweite Korrektur deutscher Umlaute in Dokumentations- und Tooling-Texten

Der Phasenbericht UML-001 war zum Zeitpunkt der Analyse im lokalen Arbeitsstand vorhanden, aber noch nicht versioniert.

---

## 8 Statuskonsistenz

Die technische Projektstruktur ist valide. Inhaltlich bestehen jedoch mehrere voneinander abweichende Statusdarstellungen.

### 8.1 README und PROJECT_STATUS.md

README und `PROJECT_STATUS.md` nennen weiterhin Phase 3 und Projektversion 0.6. `PROJECT_STATUS.md` führt jedoch noch ACC-001 als aktuellen Sprint, nennt 39 validierte Dateien und trägt den Aktualisierungsstand 01.07.2026.

Diese Angaben bilden den aktuellen lokalen Stand mit 63 Markdown-Dateien, ACC-002-Fortschritt, ACC-003, ACC-004 und Topic Lifecycle nicht mehr vollständig ab.

### 8.2 AKB-008

AKB-008 wurde zuletzt am 08.07.2026 aktualisiert und nennt:

- Projektphase „Baseline Management“
- aktuellen Sprint „Baseline 1.1 Freeze“
- aktuelles Themenpaket Kapitel 5.3
- aktuelle Recherche ACC-002
- aktuellen Praxistest PT-002
- Baseline-Status „Aktiv“
- Gesamtstatus „Produktionsreif“

Die Evidenz- und Praxistesttabellen in AKB-008 führen dennoch nur ACC-001-E01 bis E03 und PT-001. Der inzwischen dokumentierte Stand von ACC-002, PT-002 und PT-003 ist dort nicht vollständig nachgeführt.

### 8.3 ACC-002 und Kapitel-Steckbrief

Der Kapitel-Steckbrief weist das Themenpaket 5.3 als „Abgeschlossen mit ausgewiesenem Evidenzstatus“ aus, sein Topic-Review lautet jedoch „Nicht freigabefähig“. Die dort aufgeführten offenen Punkte betreffen insbesondere:

- nicht vollständig synchronisierte Texte innerhalb von ACC-002-E02
- den noch nicht freigegebenen Referenzhandbuchstatus von ACC-002-E02
- die weiterhin blockierten Evidenzen und Praxistests E04 bis E07 beziehungsweise PT-004 bis PT-007
- widersprüchliche Angaben zur Verfügbarkeit einer SAP-GUI-Testumgebung

Diese Abweichungen sind im Steckbrief bereits als offene Reviewpunkte dokumentiert und dürfen nicht ohne eigenen fachlichen Scope automatisch bereinigt werden.

---

## 9 Bewertung

### 9.1 Stärken

- Das Projekt verfügt über ein klar getrenntes Governance-, Evidenz-, Test- und Veröffentlichungsmodell.
- Markdown-Regeln und zentrale Strukturvorgaben werden automatisiert geprüft.
- Der Themenpaket-Generator und der Topic Lifecycle unterstützen wiederholbare Arbeitsabläufe.
- Fachliche Unsicherheiten und nicht durchgeführte Tests werden sichtbar dokumentiert.
- Phasenberichte schaffen eine nachvollziehbare Historie struktureller und organisatorischer Änderungen.
- Die Trennung zwischen fachlicher Dokumentation und Projektverwaltung ist konsequent umgesetzt.

### 9.2 Aktuelle Engpässe

- Mehrere zentrale Statusdokumente bilden unterschiedliche Zeitstände ab.
- ACC-002 ist trotz einzelner abgeschlossener Evidenzen und Praxistests insgesamt nicht freigabefähig.
- PT-004 bis PT-007 sind blockiert und enthalten eine Begründung, die nicht zum inzwischen dokumentierten PT-002-Teststand passt.
- ACC-003 und ACC-004 enthalten umfangreiche Recherchearbeit, ihre Evidenzen sind jedoch noch nicht abgeschlossen oder für das Referenzhandbuch freigegeben.
- Von 17 Kapiteln ist weiterhin nur Kapitel 5 fachlich bearbeitet.

### 9.3 Reifegrad

| Ebene | Einordnung |
|-------|------------|
| Governance | weitgehend etabliert und technisch abgesichert |
| Tooling | funktionsfähig, getestet und um Topic Lifecycle erweitert |
| Projektverwaltung | umfangreich dokumentiert, aber Statusübersichten teilweise asynchron |
| Fachliche Dokumentation | belastbarer Teilstand in Kapitel 5 |
| Themenpaket ACC-002 | teilweise verifiziert, insgesamt nicht freigabefähig |
| Themenpakete ACC-003 und ACC-004 | in Bearbeitung |
| Gesamtumfang AKB-200 | frühe fachliche Ausbaustufe |

---

## 10 Empfohlene nächste organisatorische Schritte

Aus dem dokumentierten Arbeitsstand ergeben sich folgende getrennte, noch nicht freigegebene Scope-Kandidaten:

1. `PROJECT_STATUS.md` und AKB-008 über das vorgesehene Statuswerkzeug gegen den aktuellen Projektstand abgleichen.
2. Die bereits im Kapitel-Steckbrief dokumentierten Reviewpunkte für ACC-002 in getrennten fachlichen Tasks bearbeiten.
3. Die Blockierungsbegründungen von PT-004 bis PT-007 gegen die inzwischen dokumentierte PT-002-Testumgebung prüfen.
4. Nach jeder fachlichen Synchronisation `topic review ACC-002` erneut ausführen.
5. ACC-003 und ACC-004 erst nach vollständiger Evidenzprüfung in Kapiteltext überführen.

Diese Punkte sind Analyseergebnisse. Sie setzen keine fachliche Freigabe und ändern keine bestehenden Statuswerte.

---

## 11 Fazit

Die Accessibility Knowledge Base hat sich seit der vorherigen Projektanalyse sowohl strukturell als auch fachlich weiterentwickelt. Besonders sichtbar sind der Topic Lifecycle, der standardisierte Themenpaket-Generator, zwei zusätzliche Recherchedateien, der Abschluss von PT-002 sowie die Erweiterung der Projekt- und Phasendokumentation.

Die technische Basis ist stabil: Die zentrale Markdown-Validierung und der Doctor-Check sind erfolgreich. Der wichtigste organisatorische Handlungsbedarf liegt derzeit nicht in der Struktur, sondern in der kontrollierten Synchronisation der unterschiedlichen Statusstände. Fachlich bleibt Kapitel 5 der belastbare Schwerpunkt; ACC-002 ist teilweise verifiziert, während ACC-003 und ACC-004 noch in Bearbeitung sind.
