---
phase: UML-001
title: Projektweite Umlautkorrektur
status: completed

created: 2026-07-14
updated: 2026-07-14

validation:
  - git diff --check
  - npm run akb:test:topic
  - npm run akb:validate

next_phase: 

breaking_changes: false
---

# Phase UML-001 - Projektweite Umlautkorrektur

## Ziel

Deutschsprachige Dokumentations- und Ausgabetexte sollten die Umlaute ä, ö und ü verwenden. Eindeutige ASCII-Ersatzschreibweisen sollten projektweit identifiziert und mechanisch korrigiert werden, ohne fachliche Aussagen, technische Bezeichner oder die Projektstruktur zu verändern.

## Ausgangslage

In mehreren deutschsprachigen Texten waren Umlaute als Buchstabenkombinationen geschrieben. Die betroffenen Vorkommen lagen insbesondere in den Governance-Dokumenten TOP-1.0 und TMP-1.0. Darüber hinaus enthielten der Themenpaket-Generator, Validierungsmeldungen und Lifecycle-Texte entsprechende Umschreibungen, sodass neu erzeugte Dokumente den Fehler erneut hätten enthalten können.

Der Arbeitsbaum enthielt bereits Änderungen an fachlichen SAP-Dateien und zwei weitere, noch nicht versionierte Phasenberichte. Diese Änderungen gehörten nicht zu UML-001.

## Scope

Im Scope waren:

- Analyse deutschsprachiger Markdown- und Tooling-Texte auf eindeutige Umlautumschreibungen
- Korrektur der betroffenen Textstellen in TOP-1.0 und TMP-1.0
- Korrektur deutschsprachiger Ausgabetexte im Themenpaket-Generator, in der Markdown-Validierung und im Doctor-Command
- Anpassung der Lifecycle-Auswertung und der zugehörigen Test-Fixtures an die korrigierten Tabellenbezeichnungen
- abschließende Suche nach den festgestellten eindeutigen Umschreibungsmustern

Technische Pfade, Dateinamen, URLs, Kommandozeilenargumente und reguläre Wörter mit ähnlich aussehenden Buchstabenfolgen waren nicht Bestandteil der Ersetzung.

## Umgesetzt

In TOP-1.0 und TMP-1.0 wurden eindeutige deutsche Umlautumschreibungen durch die orthografisch richtigen Zeichen ersetzt. Betroffen waren unter anderem Formen wie „für“, „über“, „prüfen“, „durchführen“, „Primärquellen“, „Qualitätsregeln“ und „Veröffentlichung“.

Die deutschsprachigen Vorlagentexte in `tools/create-topic.js` erzeugen nun ebenfalls korrekte Umlaute. Dazu wurden die entsprechenden Tabellenfelder und die Überschrift „Überblick“ angepasst. Validierungs- und Diagnosemeldungen verwenden nun ebenfalls Umlaute.

Die Lifecycle-Auswertung und ihr Test wurden an die korrigierte Bezeichnung „Veröffentlichung“ angepasst. Eine erneute Suche nach den für diese Phase definierten eindeutigen Umschreibungsmustern ergab keine verbleibenden Treffer.

## Geänderte Dateien

- 00_Governance/TMP-1.0-Themenpaket-Vorlagen.md
- 00_Governance/TOP-1.0-Topic-Lifecycle.md
- 90_Projektverwaltung/Phasen/Phase-UML-001-Projektweite-Umlautkorrektur.md
- tools/commands/doctor.js
- tools/create-topic.js
- tools/lib/topic-lifecycle.js
- tools/tests/topic-lifecycle.test.js
- tools/validate-markdown.js

## Validierung

- git diff --check
- npm run akb:test:topic
- npm run akb:validate

## Nicht Bestandteil

Nicht Bestandteil dieser Phase waren:

- fachliche Ergänzungen oder Bewertungen
- Änderungen an veröffentlichten Kapiteln, Recherchedateien oder Praxistests
- Umbenennung von Dateien oder Ordnern wie `01_Handbuecher`
- Änderungen an URLs, technischen Bezeichnern oder englischsprachigen Begriffen
- allgemeine Rechtschreib- oder Stilkorrekturen außerhalb der Umlautumschreibungen
- Aktualisierung von AKB-008 oder anderen Projektstatusdateien
- Übernahme oder Bereinigung bereits vorhandener Änderungen im Arbeitsbaum

## Risiken

Eine pauschale Zeichenersetzung hätte korrekte Wörter, Pfade, URLs und technische Bezeichner beschädigen können. Deshalb wurden nur kontextuell eindeutige deutsche Umschreibungen korrigiert.

Die Bezeichnungen in Generator, Lifecycle-Auswertung und Tests mussten konsistent geändert werden. Diese Konsistenz wurde durch den Lifecycle-Test und die zentrale Markdown-Validierung geprüft.

## Ergebnis

Phase abgeschlossen

## Nächste Phase

Keine Folgephase festgelegt. Weitere sprachliche Bereinigungen sollten als eigener, eindeutig abgegrenzter Scope beauftragt und unabhängig von fachlichen Änderungen validiert werden.
