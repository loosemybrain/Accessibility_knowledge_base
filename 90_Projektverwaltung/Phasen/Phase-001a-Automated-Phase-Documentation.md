---
phase: 001a
title: Automated Phase Documentation
status: completed

created: 2026-07-02
updated: 2026-07-02

validation:
  - node --check tools/akb.js
  - npm.cmd run akb -- doctor
  - npm.cmd run akb -- validate
  - npm.cmd run akb:test:phase
  - npm.cmd run akb:validate

next_phase: 

breaking_changes: false
---
# Phase 001a - Automated Phase Documentation

## Ziel

Der Abschluss eines Sprints erzeugt oder aktualisiert automatisch eine standardisierte Phasendokumentation.

Die Phasendokumentation wird dadurch Teil des Tooling-Workflows und nicht zu manueller Nacharbeit. Eine Phase gilt im Tooling erst dann als abgeschlossen, wenn die zentrale Validierung, der Doctor-Check und die Phasendokument-Erzeugung erfolgreich ausgeführt wurden.

## Ausgangslage

Die AKB CLI stellt bereits zentrale Befehle für Validierung, Strukturprüfung, Statuspflege, Abschnittseinfügung und Phasenberichte bereit.

Vor dieser Erweiterung konnte ein Phasenbericht zwar erzeugt werden, der Sprint-Abschluss war jedoch nicht mit einer automatischen, konsistenten Phasendokumentation verbunden. Dadurch konnten Projektstatus, Sprint-Abschluss und Phasenhistorie auseinanderlaufen.

## Scope

Diese Phase erweitert ausschließlich das Tooling für automatisierte Phasendokumentation und Sprint-Finalisierung.

Im Scope waren:

- Erweiterung des bestehenden Phase-Commands
- einheitliches Phasen-Template mit Metadatenblock
- Aktualisierung vorhandener Phasendokumente ohne Überschreiben manueller Inhalte
- Sprint-Finish-Workflow mit Validierung, Doctor-Check und Phasendokument-Erzeugung
- Tests für Erzeugung, Aktualisierung, Template-Vollständigkeit, Metadaten und Fehlerfälle

Nicht im Scope waren fachliche Handbuch-, Recherche- oder Praxisteständerungen.

## Umgesetzt

Der Phase-Generator unterstützt jetzt sowohl die bestehende Form mit `--id` und `--title` als auch den CLI-Aufruf `npm run akb -- phase 001a`.

Neue Phasendokumente erhalten einen maschinenlesbaren Metadatenblock und dieselbe feste Abschnittsstruktur. Existierende Dokumente werden aktualisiert, indem fehlende Standardabschnitte ergänzt und der Metadatenblock aktualisiert werden. Vorhandene manuelle Ergänzungen bleiben erhalten.

Der Sprint-Finish-Workflow wurde als `npm run sprint:finish -- --phase 001a` ergänzt. Er führt `node --check tools/akb.js`, `validate` und `doctor` aus und erzeugt anschließend das Phasendokument. Die tatsächlich ausgeführten Prüfungen werden im Phasendokument dokumentiert.

Die Projektstatus-Synchronisation ist zunächst als Konsistenzprüfung umgesetzt: `doctor` stellt sicher, dass AKB-008 vorhanden ist, bevor der Sprint-Finish-Workflow abgeschlossen wird. Fachliche Statuswerte werden nicht automatisch erfunden oder ohne eindeutige Parameter geändert.

## Geänderte Dateien

- 90_Projektverwaltung/Phasen/Phase-001a-Automated-Phase-Documentation.md
- package.json
- tools/create-phase-report.js
- tools/sprint-finish.js
- tools/tests/phase-tooling.test.js

## Validierung

- node --check tools/akb.js
- npm.cmd run akb -- doctor
- npm.cmd run akb -- validate
- npm.cmd run akb:test:phase
- npm.cmd run akb:validate

## Nicht Bestandteil

Nicht Bestandteil dieser Phase waren:

- automatische Git-Commits
- automatische Pull Requests
- Changelog-Generierung
- Release Notes
- PDF-Export
- HTML-Export
- Roadmap-Rendering
- Versionsverwaltung
- GitHub API
- neue Projektstruktur
- fachliche Änderungen an Handbuch-, Recherche- oder Praxistestdateien

## Risiken

Die automatische Projektstatus-Synchronisation ist bewusst eng begrenzt. Ohne eindeutige fachliche Parameter darf das Tool keine Statuswerte in AKB-008 erfinden.

Bestehende Phasendokumente mit abweichender Struktur werden nicht vollständig umgeschrieben. Das Tool ergänzt fehlende Standardabschnitte, respektiert aber vorhandene manuelle Inhalte.

Die Ergebnisstatuswerte werden als Klartext dokumentiert, damit die AKB-Markdown-Regeln eingehalten werden. Symbolbasierte Statuskennzeichnungen werden nicht verwendet.

## Ergebnis

Phase abgeschlossen

## Nächste Phase

Die Struktur ist für eine spätere Roadmap-Auswertung vorbereitet.

Mögliche spätere Erweiterungen:

- maschinenlesbare Auswertung mehrerer Phasendokumente
- strengere Konsistenzprüfung zwischen Projektstatus und Phasenmetadaten
- gezielte Übergabe von Statusparametern an den bestehenden Status-Command
- optionale Zusammenfassung ausgeführter Sprint-Finish-Schritte
