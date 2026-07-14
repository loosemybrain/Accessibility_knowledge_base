---
phase: ACC002-R1
title: Freigabe von E02 und Evidenzrahmen für E01
status: completed

created: 2026-07-14
updated: 2026-07-14

validation:
  - akb:validate
  - topic status ACC-002
  - topic review ACC-002

next_phase: Herstellerrecherche für ACC-002-E01

breaking_changes: false
---

# Phase ACC002-R1 - Freigabe von E02 und Evidenzrahmen für E01

## Ziel

Freigabe von ACC-002-E02 für das Referenzhandbuch und Festlegung des Evidenzrahmens für ACC-002-E01.

## Ausgangslage

ACC-002-E02 war fachlich verifiziert, aber noch nicht für das Referenzhandbuch freigegeben. ACC-002-E01 enthielt einen falschen Bezug zu PT-002, obwohl die Evidenz ausschließlich durch Herstellerquellen abgesichert werden soll.

## Scope

- Referenzhandbuchstatus und Ergebnis von ACC-002-E02
- Praxistestbezug von ACC-002-E01
- organisatorische Statusdarstellung im Steckbrief zu Kapitel 5

## Umgesetzt

- ACC-002-E02 für das Referenzhandbuch freigegeben
- Ergebnisabschnitt von ACC-002-E02 mit der Freigabe synchronisiert
- Praxisteststatus von ACC-002-E01 auf `Nicht erforderlich` gesetzt
- ausschließliche Absicherung von ACC-002-E01 durch Herstellerquellen dokumentiert
- offenen Review-Punkt für E02 geschlossen
- offenen Review-Punkt für E01 auf die noch ausstehende Herstellerrecherche eingegrenzt

## Geänderte Dateien

- `01_Handbuecher/SAP_GUI/quellen/ACC-002-Einstellungen-zur-Barrierefreiheit.md`
- `01_Handbuecher/SAP_GUI/steckbriefe/Kapitel-05-Barrierefreiheit.md`
- `90_Projektverwaltung/Phasen/Phase-ACC002-R1-Freigabe-von-E02-und-Evidenzrahmen-fur-E01.md`

## Validierung

- `npm run akb:validate`: bestanden, 67 Markdown-Dateien geprüft
- `npm run akb -- topic status ACC-002`: E02 als `Verifiziert` und `Freigegeben` erkannt
- `npm run akb -- topic review ACC-002`: ausgeführt; Gesamtpaket wegen weiterer offener Evidenzen und Praxistests noch nicht abschlussbereit
- `git diff --check`: keine inhaltlichen Diff-Fehler im bearbeiteten Scope

## Nicht Bestandteil

- Recherche oder Auswertung von Herstellerquellen für ACC-002-E01
- Freigabe von ACC-002-E01
- Änderungen an PT-004 bis PT-007
- Änderungen am Kapitel oder Referenzhandbuch
- Abschluss des Themenpakets ACC-002

## Risiken

| Risiko | Einordnung |
|--------|------------|
| Für ACC-002-E01 liegen noch keine ausgewerteten Herstellerquellen vor. | Evidenz bleibt `In Vorbereitung` und `Nicht freigegeben`. |
| Weitere Evidenzen und Praxistests des Themenpakets sind offen. | Der Topic Review bleibt nicht erfolgreich. |

## Ergebnis

Phase abgeschlossen.

ACC-002-E02 ist für das Referenzhandbuch freigegeben. Für ACC-002-E01 ist kein Praxistest erforderlich; die fachliche Absicherung erfolgt ausschließlich durch noch zu recherchierende Herstellerquellen.

## Nächste Phase

Recherche und dokumentierte Auswertung geeigneter SAP-Herstellerquellen für ACC-002-E01.
