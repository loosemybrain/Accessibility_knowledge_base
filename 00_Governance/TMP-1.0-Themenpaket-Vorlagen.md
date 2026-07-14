# TMP-1.0 Themenpaket-Vorlagen

## 1 Zweck

TMP-1.0 beschreibt den standardisierten Vorlagenmechanismus für neue Themenpakete innerhalb des ITZ Documentation Framework.

Neue Themenpakete werden ab T004 nicht mehr manuell aufgebaut.

Sie werden über die AKB CLI aus einer strukturellen Vorlage erzeugt.

## 2 Anwendungsbereich

TMP-1.0 gilt für neue fachliche Themenpakete der Accessibility Knowledge Base und für künftige Referenzimplementierungen des ITZ Documentation Framework.

Der Standard regelt ausschliesslich die Struktur neuer Themenpakete.

Fachliche Inhalte, Evidenzen, Quellenbewertungen und Praxistestergebnisse werden nicht aus der Vorlage übernommen.

## 3 Aufbau eines Themenpakets

Ein Themenpaket besteht aus mehreren Dokumentklassen, die gemeinsam geplant, recherchiert, getestet, redaktionell verarbeitet und veröffentlicht werden.

| Dokumentklasse | Aufgabe |
|----------------|---------|
| Recherchedatei | Evidenzen, Quellen und Bearbeitungsstand dokumentieren |
| Praxistest | reproduzierbare Tests vorbereiten und Ergebnisse dokumentieren |
| Kapitel | veröffentlichungsreifen Fachtext aufnehmen |
| Steckbrief | Planung, Status und Reviewstand des Kapitels steuern |
| Projektverwaltung | Sprint, Phase und Baseline organisatorisch dokumentieren |

## 4 Standardstruktur

| Bereich | Standardstruktur |
|---------|------------------|
| Recherchedatei | ACC-xxx |
| Praxistests | PT-xxx |
| Kapitel | Kapitel xx |
| Steckbrief | Kapitel-Steckbrief |
| Projektverwaltung | Sprint |
| Projektverwaltung | Phase |
| Projektverwaltung | Baseline |

## 5 Pflichtdokumente

Ein neues Themenpaket besitzt mindestens folgende strukturelle Dokumente:

- Recherchedatei nach RCH-2.0
- mindestens eine Evidenzstruktur
- mindestens eine Praxistestdatei nach PT-1.0
- Kapitelgerüst nach DOC-1.0
- Kapitel-Steckbrief nach STB-1.0
- Projektstatus-Eintrag

Weitere Praxistests, Evidenzen, Sprintberichte, Phasenberichte oder Baselines werden nur angelegt, wenn der Task sie eindeutig beauftragt.

## 6 Benennung

Recherchedateien verwenden die Kennung des Themenpakets.

Beispiel:

```text
ACC-005-Themenpaket.md
```

Praxistests verwenden die korrespondierende PT-Kennung.

Beispiel:

```text
PT-005-Themenpaket.md
```

Kapitel und Steckbriefe verwenden die vorgesehene Kapitelnummer.

Wenn die Kapitelnummer noch nicht feststeht, wird `XX` als Platzhalter verwendet.

## 7 Nummerierung

Die ACC-Kennung identifiziert das Themenpaket.

Die erste Evidenz eines neuen Themenpakets wird als `ACC-xxx-E01` angelegt.

Der initiale Praxistest wird als `PT-xxx` vorbereitet.

Weitere Evidenzen und Praxistests erhalten fortlaufende Nummern nur durch ausdrücklichen Task-Scope.

## 8 Copy-&-Adapt-Regel

Als Golden Master für neue Themenpakete dienen:

- ACC-001
- ACC-002
- ACC-003

Neue Themenpakete übernehmen ausschliesslich die Struktur dieser Golden Master.

Alle fachlichen Inhalte werden ersetzt.

Nicht übernommen werden:

- fachliche Aussagen
- Quellen
- Interpretationen
- Bewertungen
- Testergebnisse
- Freigaben

Platzhalter dürfen keine fachliche Aussage enthalten.

## 9 AKB CLI

Neue Themenpakete werden über folgenden CLI-Command erzeugt:

```bash
npm run akb -- create-topic ACC-005
```

Der Command erzeugt ausschliesslich Platzhalterstrukturen nach TMP-1.0.

Er erzeugt keine fachlichen Inhalte und setzt keine Freigaben.

## 10 Qualitätsregeln

Der Generator darf bestehende Dateien nicht überschreiben.

Erzeugte Inhalte müssen die Markdown-Regeln der Accessibility Knowledge Base erfüllen.

Nach der Erzeugung ist auszuführen:

```bash
npm run akb -- doctor
npm run akb -- validate
```
