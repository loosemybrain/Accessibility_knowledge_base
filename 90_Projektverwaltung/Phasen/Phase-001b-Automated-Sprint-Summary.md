---
phase: 001b
title: Automated Sprint Summary
status: completed

created: 2026-07-02
updated: 2026-07-02

validation:
  - node --check tools/akb.js
  - node --check tools/create-sprint-summary.js
  - node --check tools/sprint-finish.js
  - npm.cmd run akb -- doctor
  - npm.cmd run akb -- validate
  - npm.cmd run akb:test:phase
  - npm.cmd run akb:test:sprint-summary
  - npm.cmd run akb:validate

next_phase: 

breaking_changes: false
---

# Phase 001b - Automated Sprint Summary

## Ziel

Nach einem erfolgreichen Sprint wird automatisch eine kompakte Sprint-Zusammenfassung erzeugt.

Die Sprint Summary ergänzt die Phasendokumentation. Sie richtet sich an Projektleitung, Architektur und spätere Nachvollziehbarkeit und fasst den Sprint so zusammen, dass die wichtigsten Informationen in wenigen Minuten erfassbar sind.

## Ausgangslage

Mit Phase 001a wurde die Phasendokumentation Teil des Sprint-Abschlusses.

Nach jedem Sprint kann damit ein standardisiertes Phasendokument mit Metadaten, Ziel, Scope, Änderungen, Validierung, Risiken und Ergebnis erzeugt oder aktualisiert werden. Was fehlte, war eine separate Kurzfassung, die Phase, Validierungen, Evidenzbezüge, geänderte Dateien, Risiken und offene Punkte bündelt.

## Scope

Diese Phase erweitert ausschließlich das Tooling für Sprint-Zusammenfassungen.

Im Scope waren:

- neuer CLI-Command `sprint-summary`
- Generator für Sprintberichte unter `90_Projektverwaltung/Sprintberichte/`
- einheitliches Summary-Format mit Metadatenblock
- Übernahme vorhandener Informationen aus dem Phasendokument
- automatische Sammlung vorhandener AKB-, ACC- und PT-Referenzen
- Integration in `npm run sprint:finish`
- Tests für Erzeugung, Aktualisierung, Metadaten, Validierungsübernahme, Evidenzreferenzen und Idempotenz

Nicht im Scope waren fachliche Dokumentation, Release Notes, Git-Integration, Roadmap-Generierung oder Projektstatistiken.

## Umgesetzt

Der neue Command `npm run akb -- sprint-summary 001b` erzeugt oder aktualisiert eine Sprint Summary unter `90_Projektverwaltung/Sprintberichte/Sprint-001b.md`.

Der Summary-Generator liest das vorhandene Phasendokument anhand der Phase-ID und übernimmt daraus Phase, Titel, Ziel, Ergebnis, Validierung, Risiken und nächste Phase. Zusätzlich werden geänderte Dateien und tatsächlich ausgeführte Validierungen aus dem Sprint-Finish-Workflow übergeben.

Die Evidenzsammlung erzeugt keine neuen Evidenzen. Sie referenziert vorhandene AKB-, ACC- und PT-Kennungen aus Phasendokument und Projektstatus sowie vorhandene Evidenzdateien aus dem Quellenbereich.

Der Sprint-Finish-Workflow wurde erweitert: Nach erfolgreicher Validierung, Doctor-Prüfung und Phasendokumentation wird automatisch die Sprint Summary erzeugt oder aktualisiert.

Idempotenz ist umgesetzt, indem pro Phase genau eine Datei `Sprint-<Phase>.md` verwendet wird. Bei erneutem Lauf wird diese Datei aktualisiert, nicht dupliziert.

## Geänderte Dateien

- 90_Projektverwaltung/Phasen/Phase-001b-Automated-Sprint-Summary.md
- 90_Projektverwaltung/Sprintberichte/Sprint-001b.md
- package.json
- tools/akb.js
- tools/commands/sprint-summary.js
- tools/create-phase-report.js
- tools/create-sprint-summary.js
- tools/sprint-finish.js
- tools/tests/sprint-summary.test.js

## Validierung

- node --check tools/akb.js
- node --check tools/create-sprint-summary.js
- node --check tools/sprint-finish.js
- npm.cmd run akb -- doctor
- npm.cmd run akb -- validate
- npm.cmd run akb:test:phase
- npm.cmd run akb:test:sprint-summary
- npm.cmd run akb:validate

## Nicht Bestandteil

Nicht Bestandteil dieser Phase waren:

- Git-Commits
- GitHub API
- Release Notes
- PDF-Export
- HTML-Export
- automatische Roadmap
- automatische ADR-Erzeugung
- Versionsverwaltung
- Projektstatistiken
- Burndown-Charts
- fachliche Dokumentation

## Risiken

Die Sprint Summary ist eine kompakte Ableitung aus vorhandenen Projektverwaltungsdaten. Sie ersetzt nicht die detaillierte Phasendokumentation.

Die Evidenzsammlung arbeitet referenziell. Sie darf keine Evidenzen erzeugen, bewerten oder fachlich interpretieren.

Wenn ein Phasendokument unvollständig ist, kann die Summary nur die vorhandenen Informationen übernehmen und dokumentiert fehlende Angaben als nicht vorhanden.

## Ergebnis

Phase abgeschlossen

## Nächste Phase

Die Struktur ist für spätere automatische Auswertungen vorbereitet.

Mögliche spätere Erweiterungen:

- maschinenlesbare Aggregation mehrerer Sprint Summaries
- Roadmap-Vorbereitung auf Basis vorhandener Metadaten
- strengere Konsistenzprüfung zwischen Phase, Summary und Projektstatus
- optionale Übergabe sprint-spezifischer Testlisten
