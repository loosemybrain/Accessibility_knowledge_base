---
phase: PT002-A
title: Praxistest PT-002 und Scope-Analyse
status: completed

created: 2026-07-13
updated: 2026-07-13

validation:
  - akb:validate
  - topic status ACC-002
  - git diff --check

next_phase: Scope-Freigabe ACC-002-E02

breaking_changes: false
---

# Phase PT002-A - Praxistest PT-002 und Scope-Analyse

## Ziel

Dokumentation der zuletzt vorgenommenen Änderungen an PT-002 und Abgrenzung eines möglichen Folgescopes für ACC-002-E02.

Der Bericht setzt keine fachliche Freigabe und beauftragt keine Änderungen an Folgedokumenten.

## Ausgangslage

PT-002 war als blockiert dokumentiert, weil keine Testumgebung mit installiertem SAP GUI for Windows verfügbar war.

Im aktuellen Arbeitsstand ist PT-002 vollständig ausgefüllt. Die Recherchedatei ACC-002 und der Steckbrief zu Kapitel 5 führen PT-002 weiterhin als blockiert.

## Scope

Analysiert wurde ausschließlich der aktuelle Arbeitsstand folgender Datei:

- `01_Handbuecher/SAP_GUI/praxistests/PT-002-Einstellungen-zur-Barrierefreiheit.md`

Zusätzlich wurden die vorhandenen Statusverweise auf PT-002 in der Recherchedatei ACC-002 und im Steckbrief zu Kapitel 5 gelesen. Diese Dateien wurden nicht geändert.

## Umgesetzt

- Statusänderung von `Blockiert` auf `Abgeschlossen` im aktuellen Arbeitsstand von PT-002 dokumentiert
- Testumgebung, Voraussetzungen, Testschritte und Ergebnisse als vorhandene Änderungen erfasst
- Screenshot-Verweis auf `sap_logon_optionen.PNG` geprüft
- abweichende Statusangaben in den zugehörigen Dokumenten identifiziert
- möglichen Folgescope ohne fachliche Statussetzung abgegrenzt

## Geänderte Dateien

- `01_Handbuecher/SAP_GUI/praxistests/PT-002-Einstellungen-zur-Barrierefreiheit.md`
- `90_Projektverwaltung/Phasen/Phase-PT002-A-Praxistest-und-Scope-Analyse.md`

## Validierung

- `npm run akb:validate`: bestanden, 61 Markdown-Dateien geprüft
- `npm run akb -- topic status ACC-002`: Themenpaket und abweichende Statuswerte ermittelt
- `git diff --check`: keine inhaltlichen Diff-Fehler gemeldet
- Screenshot-Datei `01_Handbuecher/SAP_GUI/screenshots/sap_logon_optionen.PNG`: vorhanden

## Nicht Bestandteil

- fachliche Prüfung oder Interpretation der Testergebnisse
- Bestätigung der in PT-002 eingetragenen Freigabe
- Änderung bestehender Evidenzen
- Änderung der Recherchedatei ACC-002
- Änderung des Steckbriefs zu Kapitel 5
- Änderung des Kapitels oder Referenzhandbuchs
- Aktualisierung des Projektstatus

## Risiken

| Risiko | Einordnung |
|--------|------------|
| Die in PT-002 eingetragene Freigabe ist keiner autorisierten Rolle zugeordnet. | Vor Folgeschritten organisatorisch klären. |
| ACC-002-E02 führt PT-002 weiterhin als blockiert. | Status nur nach fachlicher Prüfung und eindeutigem Auftrag ändern. |
| Der Steckbrief zu Kapitel 5 führt PT-002 weiterhin als blockiert. | Erst nach Klärung der Single Source of Truth synchronisieren. |
| Der Topic-Status meldet ACC-002-E02 weiterhin als nicht abschlussbereit. | Der Abschluss des gesamten Themenpakets ist nicht Teil dieser Phase. |

## Ergebnis

Die Änderungen an PT-002 sind strukturell valide dokumentiert. Der daraus ableitbare Folgescope ist noch nicht freigegeben.

Vorgeschlagener Folgescope:

1. Zuständigkeit und Gültigkeit der in PT-002 eingetragenen Freigabe klären.
2. ACC-002-E02 unter dem Heading-Pfad `## 3 Evidenz` > `### 3.2 Evidenz ACC-002-E02` fachlich prüfen.
3. Bei bestätigtem Ergebnis ausschließlich die veralteten PT-002-Statusverweise in ACC-002 aktualisieren.
4. Danach die PT-002-Statusverweise unter `### 3.5 Evidenzstatus Abschnitt 5.3` und `### 5.2 Testfälle` im Steckbrief zu Kapitel 5 synchronisieren.
5. Anschließend `npm run akb:validate` und `npm run akb -- topic review ACC-002` ausführen.

## Nächste Phase

Scope-Freigabe für die Nachführung von ACC-002-E02 und den zugehörigen organisatorischen Statusverweisen.

Voraussetzung ist die Bestätigung durch eine zuständige Fach- oder Reviewrolle. Bis dahin bleiben die vorgeschlagenen Änderungen offen.
