---
phase: ACC002-E01-R
title: Herstellerrecherche für ACC-002-E01
status: completed

created: 2026-07-14
updated: 2026-07-14

validation:
  - akb:validate
  - topic status ACC-002
  - topic review ACC-002

next_phase: Fachreview und Freigabe von ACC-002-E01

breaking_changes: false
---

# Phase ACC002-E01-R - Herstellerrecherche für ACC-002-E01

## Ziel

Quellenbasierte Bestandsaufnahme der von SAP auf der Seite `Accessibility` dokumentierten Einstellungen für ACC-002-E01.

## Ausgangslage

Für ACC-002-E01 war festgelegt, dass die Evidenz ausschließlich durch Herstellerquellen abgesichert wird. Die erforderliche Herstellerrecherche war noch nicht durchgeführt.

## Scope

- offizielle SAP-Dokumentation für SAP GUI for Windows 8.00 PL08
- Evidenz ACC-002-E01
- organisatorischer Evidenz- und Reviewstatus im Steckbrief zu Kapitel 5

## Umgesetzt

- SAP-Seite `Accessibility Page` ausgewertet
- SAP-Hinweise für Screenreader- und Vergrößerungsnutzende ergänzend ausgewertet
- vier unmittelbar auf der Seite `Accessibility` dokumentierte Einstellungen erfasst
- Einstellungen anderer Seiten ausdrücklich von der Bestandsaufnahme abgegrenzt
- Quellenzuordnung und Abrufdatum dokumentiert
- Status von ACC-002-E01 auf `In Bearbeitung` und Herstellerquelle auf `Ja` aktualisiert

## Geänderte Dateien

- `01_Handbuecher/SAP_GUI/quellen/ACC-002-Einstellungen-zur-Barrierefreiheit.md`
- `01_Handbuecher/SAP_GUI/steckbriefe/Kapitel-05-Barrierefreiheit.md`
- `90_Projektverwaltung/Phasen/Phase-ACC002-E01-R-Herstellerrecherche-fur-ACC-002-E01.md`

## Validierung

- `npm run akb:validate`: bestanden, 68 Markdown-Dateien geprüft
- `npm run akb -- topic status ACC-002`: E01 als `In Bearbeitung` und `Nicht freigegeben` erkannt
- `npm run akb -- topic review ACC-002`: ausgeführt; Gesamtpaket weiterhin nicht abschlussbereit
- `git diff --check`: keine inhaltlichen Diff-Fehler im bearbeiteten Scope

## Nicht Bestandteil

- fachliche Freigabe von ACC-002-E01
- Praxistest für ACC-002-E01
- Änderungen an PT-004 bis PT-007
- Änderungen am Kapitel oder Referenzhandbuch

## Risiken

| Risiko | Einordnung |
|--------|------------|
| Die dokumentierte Quellenbewertung ist noch nicht fachlich freigegeben. | E01 bleibt `In Bearbeitung` und `Nicht freigegeben`. |
| SAP führt weitere empfohlene Einstellungen außerhalb der Seite `Accessibility`. | Die Abgrenzung ist in E01 ausdrücklich dokumentiert. |

## Ergebnis

Phase abgeschlossen.

Die Herstellerrecherche für ACC-002-E01 ist vollständig dokumentiert. Die Evidenz wartet auf Fachreview und Freigabe.

## Nächste Phase

Fachreview der Quellenbewertung und Entscheidung über die Freigabe von ACC-002-E01.
