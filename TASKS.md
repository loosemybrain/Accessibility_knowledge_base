# TASKS.md

## 1 Zweck

Diese Datei definiert das Standardformat für Arbeitsaufträge an Codex innerhalb der Accessibility Knowledge Base.

Jeder Task muss klein, eindeutig und prüfbar sein.

---

## 2 Task-Format

```text
Task-ID:
AKB-TASK-0001

Phase:
...

Sprint:
...

Ziel:
...

Scope:
...

Dateien:
...

Aktion:
...

Einfügeposition:
...

Erwartetes Ergebnis:
...

Nicht erlaubt:
...

Validierung:
...
```

---

## 3 Standardaktionen

Zulässige Aktionen:

- Neue Datei anlegen
- Abschnitt ergänzen
- Abschnitt ersetzen
- Status aktualisieren
- Validierung ausführen
- Projektstatus aktualisieren

Nicht zulässig ohne Freigabe:

- Datei umbenennen
- Ordnerstruktur ändern
- Governance ändern
- freigegebene Evidenz ändern
- abgeschlossene Praxistests ändern

---

## 4 Beispieltask – Recherche ergänzen

```text
Task-ID:
AKB-TASK-0001

Phase:
Phase 3 – Fachliche Dokumentation

Sprint:
Sprint 3.7

Ziel:
Evidenz ACC-001-E02 nach RCH-2.0 ergänzen.

Scope:
Nur die angegebene Recherchedatei ändern.

Dateien:
01_Handbuecher/SAP_GUI/quellen/ACC-001-Accessibility-Mode.md

Aktion:
Abschnitt ersetzen

Einfügeposition:
### 3.2 Evidenz ACC-001-E02

Erwartetes Ergebnis:
Der Abschnitt enthält Fragestellung, Ziel, Herstellerinformation, Quellenzuordnung, Praxistestverweis, Interpretation, Bewertung und Ergebnis.

Nicht erlaubt:
Keine weiteren Dateien ändern.
Keine fachlichen Aussagen ergänzen, die nicht im Task genannt sind.
Keine Freigabe setzen, wenn sie nicht ausdrücklich angegeben ist.

Validierung:
npm run akb:validate
```

---

## 5 Beispieltask – Praxistest anlegen

```text
Task-ID:
AKB-TASK-0002

Phase:
Phase 3 – Fachliche Dokumentation

Sprint:
Sprint 3.7

Ziel:
Praxistest PT-001 nach PT-1.0 anlegen.

Scope:
Nur neue Praxistestdatei erstellen.

Dateien:
01_Handbuecher/SAP_GUI/praxistests/PT-001-Accessibility-Mode-Aktivierung.md

Aktion:
Neue Datei anlegen

Erwartetes Ergebnis:
Datei enthält Metadaten, Ziel, Testumgebung, Voraussetzungen, Testschritte, erwartetes Ergebnis, tatsächliches Ergebnis, Abweichungen, Screenshots, Bewertung, zugehörige Dokumente und Freigabe.

Nicht erlaubt:
Test nicht als durchgeführt markieren.
Keine Ergebnisse erfinden.
Keine Freigabe setzen.

Validierung:
npm run akb:validate
```

---

## 6 Beispieltask – Projektstatus aktualisieren

```text
Task-ID:
AKB-TASK-0003

Phase:
Projektsteuerung

Sprint:
Nach Sprintabschluss

Ziel:
AKB-008 Projektstatus aktualisieren.

Scope:
Nur AKB-008 ändern.

Dateien:
00_Governance/AKB-008-Projektstatus.md

Aktion:
Status aktualisieren

Erwartetes Ergebnis:
Aktueller Sprint, Evidenzstatus, Praxisteststatus und nächster Sprint sind aktualisiert.

Nicht erlaubt:
Keine Governance-Regeln ändern.
Keine abgeschlossenen Inhalte entfernen.

Validierung:
npm run akb:validate
```

---

## 7 Standardtask – Projektstatus aktualisieren

```text
Task-ID:
AKB-TASK-....

Phase:
Projektsteuerung

Sprint:
Nach Sprintabschluss

Ziel:
AKB-008 Projektstatus automatisiert aktualisieren.

Scope:
Nur 00_Governance/AKB-008-Projektstatus.md über tools/update-project-status.js ändern.

Dateien:
00_Governance/AKB-008-Projektstatus.md

Aktion:
Projektstatus aktualisieren.

Erlaubte Änderungen:
Vorhandene Zeilen in bestehenden Tabellen aktualisieren.
Aktueller Sprint, aktuelles Arbeitspaket, nächstes Arbeitspaket, Evidenzstatus und Praxisteststatus aktualisieren.

Erwartetes Ergebnis:
AKB-008 enthält die angegebenen Statuswerte.
Keine neuen Tabellen, Abschnitte oder fachlichen Inhalte wurden angelegt.

Nicht erlaubt:
Keine Governance-Regeln ändern.
Keine neuen Abschnitte in AKB-008 erzeugen.
Keine Handbuchdateien ändern.
Keine Recherchedateien ändern.
Keine Praxistests ändern.

Validierung:
npm run akb:validate
```

---

## 8 Standardtask – Projektphase abschließen

```text
Task-ID:
AKB-TASK-....

Phase:
Projektabschluss

Sprint:
Nach Abschluss der Projektphase

Ziel:
Projektphase nach PHS-1.0 abschließen und Phasenbericht erzeugen.

Scope:
Nur Phasenbericht und ausdrücklich freigegebene Projektsteuerungsdateien ändern.

Dateien:
90_Projektverwaltung/Phasen/Phase-XXX-Titel.md

Aktion:
Phasenbericht erzeugen oder ergänzen.

Erlaubte Änderungen:
Phasenbericht nach PHS-1.0 erstellen.
Projektstatus nur bei ausdrücklicher Freigabe aktualisieren.

Erwartetes Ergebnis:
Phasenbericht enthält die vollständige PHS-1.0-Struktur.
Alle Abschnitte sind nachvollziehbar ausgefüllt oder als offen markiert.

Nicht erlaubt:
Keine fachlichen Inhalte erfinden.
Keine Governance-Regeln ändern.
Keine Referenzhandbücher ändern.
Keine Recherchedateien ändern.
Keine Praxistests ändern.

Validierung:
npm run akb:validate
```

---

## 9 Standardtask – AKB CLI Command erweitern

```text
Task-ID:
AKB-TASK-....

Phase:
Tooling Foundation

Sprint:
AKB CLI Foundation

Ziel:
AKB CLI um einen klar abgegrenzten Command erweitern.

Scope:
Nur tools/, package.json, AGENTS.md und TASKS.md ändern.

Dateien:
tools/akb.js
tools/commands/<command>.js
tools/lib/<helper>.js
package.json
AGENTS.md
TASKS.md

Aktion:
CLI Command ergänzen oder bestehenden CLI Command strukturell erweitern.

Erlaubte Änderungen:
Neue Command-Datei unter tools/commands/ anlegen.
Wiederverwendbare Hilfslogik unter tools/lib/ anlegen.
CLI Einstiegspunkt tools/akb.js um den Command ergänzen.
package.json nur ergänzen, wenn ein Script-Einstieg benötigt wird.
AGENTS.md und TASKS.md nur im direkten Bezug zum CLI Command ergänzen.

Erwartetes Ergebnis:
Der Command ist über npm run akb -- <command> ausführbar.
Bestehende Einzelskripte funktionieren weiterhin.
Der Command ändert fachliche Inhalte nur bei eindeutigem Scope.

Nicht erlaubt:
Keine Handbuchdateien ändern.
Keine Recherchedateien ändern.
Keine Praxistests ändern.
Keine Phasenberichte ändern.
Keine bestehenden Skripte entfernen.
Keine globalen Refactorings durchführen.

Validierung:
node --check tools/akb.js
npm run akb -- validate
npm run akb:validate
npm run akb -- doctor
```

---

## 10 Qualitätsregel

Ein Task ist nur gültig, wenn eindeutig ist:

- welche Datei betroffen ist,
- welche Aktion ausgeführt wird,
- welche Inhalte geändert werden dürfen,
- welche Inhalte nicht geändert werden dürfen,
- wie das Ergebnis geprüft wird.
