---
phase: ACC002-K1
title: ACC-002 Konsistenzprüfung und Scope-Abgrenzung
status: completed

created: 2026-07-14
updated: 2026-07-14

validation:
  - akb:validate
  - topic status ACC-002
  - topic review ACC-002

next_phase: ACC-002 redaktionelle und fachliche Klärung

breaking_changes: false
---

# Phase ACC002-K1 - ACC-002 Konsistenzprüfung und Scope-Abgrenzung

## Ziel

Konsistenzprüfung des Themenpakets ACC-002 und eindeutige Abgrenzung der nächsten Bearbeitungsschritte.

Die Phase ändert keine fachlichen Aussagen, Testresultate oder Freigaben.

## Ausgangslage

PT-002 ist als abgeschlossen dokumentiert und enthält Testumgebung, Testschritte und Ergebnisse. In der Recherchedatei ACC-002 bestehen dazu abweichende oder veraltete Aussagen. Die Praxistests PT-004 bis PT-007 sind weiterhin als blockiert dokumentiert.

Der Topic Review führt diese Abweichungen bereits als offene Punkte und bewertet das Themenpaket als nicht freigabefähig.

## Scope

Gelesen und strukturell verglichen wurden:

- die Evidenzen ACC-002-E01 bis ACC-002-E07 in der Recherchedatei ACC-002
- die Praxistests PT-002 sowie PT-004 bis PT-007
- der Evidenzstatus und der Topic Review im Steckbrief zu Kapitel 5
- der maschinell ermittelte Topic-Status für ACC-002

Die fachlichen Dateien wurden nicht geändert.

## Umgesetzt

- Zuordnung von PT-002 zu ACC-002-E02 geprüft
- widersprüchlichen PT-002-Verweis in ACC-002-E01 ermittelt
- veraltete Aussagen zum fehlenden Testergebnis in ACC-002-E02 ermittelt
- Blockierungsangaben und nicht dokumentierte Testumgebungen in PT-004 bis PT-007 verglichen
- mechanisch mögliche Nachführungen von fachlich oder organisatorisch zu bestätigenden Entscheidungen getrennt
- nächsten Bearbeitungsscope festgelegt

## Geänderte Dateien

- `90_Projektverwaltung/Phasen/Phase-ACC002-K1-ACC-002-Konsistenzprufung-und-Scope-Abgrenzung.md`

## Validierung

- `npm run akb -- topic status ACC-002`: Status des Themenpakets ermittelt
- `npm run akb -- topic review ACC-002`: ausgeführt; erwartungsgemäß nicht erfolgreich, da Evidenzen und Praxistests noch nicht vollständig verifiziert beziehungsweise freigegeben sind
- `npm run akb:validate`: bestanden, 65 Markdown-Dateien geprüft

## Nicht Bestandteil

- fachliche Bewertung oder Interpretation von PT-002
- Bestätigung der in PT-002 eingetragenen Freigabe
- Änderung der Evidenzen ACC-002-E01 bis ACC-002-E07
- Änderung der Praxistests PT-002 bis PT-007
- Änderung des Kapitel-Steckbriefs, Kapitels oder Referenzhandbuchs
- Durchführung oder Abschluss weiterer Praxistests
- Setzen fachlicher Freigaben

## Risiken

| Risiko | Einordnung |
|--------|------------|
| ACC-002-E01 verweist auf PT-002, obwohl PT-002 ACC-002-E02 zugeordnet ist. | Die zuständige Fach- oder Reviewrolle muss festlegen, welcher Status und welcher Praxistestbezug für E01 gelten. |
| ACC-002-E02 enthält trotz abgeschlossenem PT-002 weiterhin Aussagen, dass keine Testergebnisse vorliegen. | Testergebnis, Bewertung und Schlussfolgerung müssen fachlich geprüft und redaktionell nachgeführt werden. |
| Die in PT-002 eingetragene Freigabe ist im geprüften Dokument keiner verantwortlichen Rolle zugeordnet. | Gültigkeit und Zuständigkeit sind vor einer weitergehenden Statusänderung organisatorisch zu bestätigen. |
| PT-004 bis PT-007 nennen eine nicht installierte SAP-GUI-Umgebung als Blockierungsgrund, während PT-002 eine Testumgebung dokumentiert. | Vor einer Statusänderung ist zu bestätigen, ob diese Umgebung weiterhin verfügbar und für die jeweiligen Testfälle geeignet ist. |

## Ergebnis

Phase abgeschlossen.

ACC-002 ist strukturell erfasst, aber noch nicht freigabefähig. Die festgestellten Abweichungen dürfen nicht durch eine rein mechanische Statussynchronisation gelöst werden, weil dafür fachliche Bewertungen und organisatorische Bestätigungen erforderlich sind.

## Nächste Phase

Die nächste Phase ist die redaktionelle und fachliche Klärung von ACC-002 in folgendem Scope:

1. Eine zuständige Fach- oder Reviewrolle legt für ACC-002-E01 den korrekten Praxistestbezug und Status fest.
2. Eine zuständige Fach- oder Reviewrolle prüft PT-002 und bestätigt Ergebnis, Bewertung sowie Gültigkeit der dokumentierten Freigabe.
3. Nach dieser Bestätigung werden ausschließlich die veralteten Aussagen in ACC-002-E02 redaktionell nachgeführt.
4. Für PT-004 bis PT-007 bestätigt der Praxistester Verfügbarkeit und Eignung der Testumgebung; anschließend werden die Tests einzeln geplant und durchgeführt.
5. Nach jeder fachlich bestätigten Änderung werden Steckbrief und Topic Review synchronisiert sowie die AKB-Validierung erneut ausgeführt.
