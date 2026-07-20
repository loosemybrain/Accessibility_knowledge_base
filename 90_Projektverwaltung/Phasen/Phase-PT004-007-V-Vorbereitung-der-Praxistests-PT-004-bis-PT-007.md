---
phase: PT004-007-V
title: Vorbereitung der Praxistests PT-004 bis PT-007
status: completed

created: 2026-07-14
updated: 2026-07-14

validation:
  - npm run akb:validate
  - git diff --check

next_phase: Durchführung der Praxistests PT-004 bis PT-007 in der SAP-Arbeitsumgebung

breaking_changes: false
---

# Phase PT004-007-V - Vorbereitung der Praxistests PT-004 bis PT-007

## Ziel

Reproduzierbare Klickanleitungen und Ergebnisprotokolle für die Praxistests PT-004 bis PT-007 vorbereiten, damit ein Praxistester die Prüfungen in einer angebundenen SAP-Arbeitsumgebung durchführen kann.

## Ausgangslage

Die vorhandenen Praxistestdateien enthielten allgemeine Testschritte. In der lokalen Entwicklungsumgebung steht keine konfigurierte SAP-Systemverbindung zur Verfügung. Die fachlichen Prüfungen können deshalb erst in der externen Arbeitsumgebung durchgeführt werden.

## Scope

- PT-004: Darstellung von Symbolen in Listen als Buchstaben
- PT-005: Erfolgs-, Warn- und Fehlermeldungen in Dialogfeldern
- PT-006: F4-Hilfe als modales Dialogfeld
- PT-007: Office-Dokumente außerhalb von SAP GUI öffnen
- Vorbereitung von Testumgebung, Voraussetzungen, Klickfolgen, Rücksetzung, Screenshots und Ergebnisprotokoll

## Umgesetzt

- Die allgemeinen Testschritte wurden durch genaue, nummerierte Klickanleitungen ersetzt.
- Für jeden Test wurden die vor der Durchführung einzutragenden Umgebungs- und Testdaten definiert.
- Vergleichsschritte für aktivierte und deaktivierte Einstellungen wurden vorbereitet.
- Eindeutige Screenshot-IDs und ausfüllbare Tabellen für Beobachtungen, Abweichungen und Bewertung wurden angelegt.
- Rücksetzschritte sichern die Wiederherstellung der dokumentierten Ausgangszustände.
- Alle Tests bleiben als nicht durchgeführt und nicht freigegeben gekennzeichnet.

## Geänderte Dateien

- `01_Handbuecher/SAP_GUI/praxistests/PT-004-Display-symbols-in-lists-as-letters.md`
- `01_Handbuecher/SAP_GUI/praxistests/PT-005-Dialog-box-for-messages.md`
- `01_Handbuecher/SAP_GUI/praxistests/PT-006-Set-F4-help-to-modal-dialog.md`
- `01_Handbuecher/SAP_GUI/praxistests/PT-007-Weitere-Accessibility-Einstellungen.md`
- `90_Projektverwaltung/Phasen/Phase-PT004-007-V-Vorbereitung-der-Praxistests-PT-004-bis-PT-007.md`

## Validierung

- `npm run akb:validate`: erfolgreich
- `git diff --check`: erfolgreich

## Nicht Bestandteil

- Durchführung oder fachliche Bewertung der Praxistests
- Eintragung tatsächlicher Beobachtungen oder Screenshots
- Änderung von Evidenzstatus oder Freigaben
- Änderung veröffentlichter Kapitel oder des Referenzhandbuchs
- Einrichtung einer SAP-Systemverbindung oder Testumgebung

## Risiken

- Menü- oder Optionsbezeichnungen können je nach SAP-GUI-Version, Sprache und Systemkonfiguration abweichen und müssen im Protokoll festgehalten werden.
- PT-005 benötigt drei reproduzierbare, fachlich unkritische Meldungsszenarien.
- PT-006 benötigt ein Eingabefeld mit verfügbarer F4-Hilfe.
- PT-007 benötigt eine funktionsfähige Desktop-Office-Integration und ein geeignetes Office-Testdokument.

## Ergebnis

Die Durchführungsvorbereitung ist abgeschlossen. Die vier Praxistests sind weiterhin blockiert und gelten ausdrücklich nicht als durchgeführt.

## Nächste Phase

PT-004 bis PT-007 werden anhand der vorbereiteten Klickanleitungen in der SAP-Arbeitsumgebung durchgeführt. Beobachtungen und Screenshots werden direkt in den jeweiligen Praxistestdateien protokolliert. Fachliche Bewertung und Statusänderungen erfolgen erst nach Prüfung der vollständig dokumentierten Ergebnisse.
