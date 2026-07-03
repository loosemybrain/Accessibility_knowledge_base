# ADR-001 – Accessibility Knowledge Base als Referenzimplementierung des ITZ Documentation Framework

## 1 Kontext

Die Accessibility Knowledge Base wurde ursprünglich als evidenzbasiertes Referenzhandbuch für die SAP GUI for Windows entwickelt.

Im Verlauf der Projektentwicklung entstanden jedoch generische Prozesse, Standards und Werkzeuge, die unabhängig vom fachlichen Themengebiet eingesetzt werden können.

Hierzu gehören insbesondere:

- Dokumentationsstandards
- Governance
- Evidenzmodell
- Praxistestmodell
- Projektverwaltung
- Sprintmodell
- Tooling
- Automatisierungsagent
- Exportkonzept

Diese Bestandteile bilden gemeinsam ein allgemeines Framework zur Erstellung technischer Wissensdokumentation.

Die Accessibility Knowledge Base dient als erste Referenzimplementierung dieses Frameworks.

## 2 Problemstellung

Die Accessibility Knowledge Base enthält fachliche Inhalte zur digitalen Barrierefreiheit und zur SAP GUI for Windows.

Gleichzeitig enthält das Projekt generische Bestandteile, die nicht an dieses konkrete Fachthema gebunden sind.

Ohne eine Trennung zwischen Framework und Fachprojekt würden fachliche Inhalte, wiederverwendbare Methoden und technische Werkzeuge dauerhaft vermischt.

Dies würde die Wartung erschweren, weil Änderungen am Framework nicht eindeutig von Änderungen am Fachprojekt abgegrenzt wären.

Zukünftige Projekte könnten die generischen Bestandteile nur schwer übernehmen, wenn sie ausschließlich innerhalb der Accessibility Knowledge Base verstanden und gepflegt werden.

## 3 Entscheidung

Die Accessibility Knowledge Base bleibt ein eigenständiges Fachprojekt.

Das ITZ Documentation Framework entsteht aus den generischen Bestandteilen des Projekts.

Die Accessibility Knowledge Base wird als Referenzimplementierung dieses Frameworks geführt.

Generische Methoden, Standards, Prozesse und Werkzeuge werden künftig als Framework-Bestandteile betrachtet.

Fachspezifische Inhalte zur Barrierefreiheit und zur SAP GUI for Windows bleiben Bestandteil der Accessibility Knowledge Base.

## 4 Begründung

Die Trennung zwischen Framework und Fachprojekt verbessert die langfristige Wartbarkeit.

Generische Bestandteile können unabhängig von fachlichen Inhalten weiterentwickelt werden.

Fachspezifische Inhalte können fortgeführt werden, ohne die Grundstruktur des Frameworks zu verändern.

Der Ansatz erleichtert die Skalierung auf weitere Dokumentationsprojekte.

Neue Projekte können bewährte Strukturen, Rollen, Workflows, Evidenzmodelle und Tooling-Ansätze übernehmen, ohne die fachlichen Inhalte der Accessibility Knowledge Base zu kopieren.

Die Accessibility Knowledge Base bleibt dabei ein konkretes, überprüfbares Beispiel für die Anwendung des Frameworks.

## 5 Auswirkungen

Governance:

Die Governance muss zwischen generischen Framework-Regeln und projektspezifischen Vorgaben unterscheiden.

Tooling:

Werkzeuge sollen so gestaltet werden, dass generische Funktionen projektübergreifend nutzbar bleiben.

Dokumentation:

Dokumentationsstandards, Evidenzmodell, Praxistestmodell und Exportkonzept können als wiederverwendbare Framework-Bestandteile beschrieben werden.

Zukünftige Projekte:

Neue Projekte können das Framework übernehmen und eigene fachliche Inhalte, Evidenzen, Praxistests und Veröffentlichungsstrukturen darauf aufbauen.

## 6 Konsequenzen

Künftig generisch zu entwickelnde Bestandteile:

- Dokumentationsstandards
- Rollenmodell
- Evidenzmodell
- Praxistestmodell
- Sprint- und Phasenmodell
- Projektverwaltungsstruktur
- Tooling und CLI-Struktur
- Export- und Veröffentlichungsprozesse
- Automatisierungsregeln für strukturelle Aufgaben

Projektspezifisch bleiben:

- fachliche Inhalte der Accessibility Knowledge Base
- SAP-GUI-spezifische Recherchedateien
- SAP-GUI-spezifische Praxistests
- Kapitel des Referenzhandbuchs AKB-200
- fachliche Quellen- und Evidenzzuordnungen
- screenshotspezifische Nachweise zur SAP GUI for Windows

## 7 Status

| Eigenschaft | Wert |
|-------------|------|
| Status | Accepted |
| Datum | 03.07.2026 |
