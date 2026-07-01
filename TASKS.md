# TASKS.md

## 1 Zweck

Diese Datei definiert das Standardformat für Arbeitsaufträge an Codex innerhalb der Accessibility Knowledge Base.

Jeder Task muss klein, eindeutig und prüfbar sein.

---

## 2 Task-Format

```text
Task-ID:
AKB-TASK-0001

Phase:
...

Sprint:
...

Ziel:
...

Scope:
...

Dateien:
...

Aktion:
...

Einfügeposition:
...

Erwartetes Ergebnis:
...

Nicht erlaubt:
...

Validierung:
...
```

---

## 3 Standardaktionen

Zulässige Aktionen:

- Neue Datei anlegen
- Abschnitt ergänzen
- Abschnitt ersetzen
- Status aktualisieren
- Validierung ausführen
- Projektstatus aktualisieren

Nicht zulässig ohne Freigabe:

- Datei umbenennen
- Ordnerstruktur ändern
- Governance ändern
- freigegebene Evidenz ändern
- abgeschlossene Praxistests ändern

---

## 4 Beispieltask – Recherche ergänzen

```text
Task-ID:
AKB-TASK-0001

Phase:
Phase 3 – Fachliche Dokumentation

Sprint:
Sprint 3.7

Ziel:
Evidenz ACC-001-E02 nach RCH-2.0 ergänzen.

Scope:
Nur die angegebene Recherchedatei ändern.

Dateien:
01_Handbuecher/SAP_GUI/quellen/ACC-001-Accessibility-Mode.md

Aktion:
Abschnitt ersetzen

Einfügeposition:
### 3.2 Evidenz ACC-001-E02

Erwartetes Ergebnis:
Der Abschnitt enthält Fragestellung, Ziel, Herstellerinformation, Quellenzuordnung, Praxistestverweis, Interpretation, Bewertung und Ergebnis.

Nicht erlaubt:
Keine weiteren Dateien ändern.
Keine fachlichen Aussagen ergänzen, die nicht im Task genannt sind.
Keine Freigabe setzen, wenn sie nicht ausdrücklich angegeben ist.

Validierung:
npm run akb:validate
```

---

## 5 Beispieltask – Praxistest anlegen

```text
Task-ID:
AKB-TASK-0002

Phase:
Phase 3 – Fachliche Dokumentation

Sprint:
Sprint 3.7

Ziel:
Praxistest PT-001 nach PT-1.0 anlegen.

Scope:
Nur neue Praxistestdatei erstellen.

Dateien:
01_Handbuecher/SAP_GUI/praxistests/PT-001-Accessibility-Mode-Aktivierung.md

Aktion:
Neue Datei anlegen

Erwartetes Ergebnis:
Datei enthält Metadaten, Ziel, Testumgebung, Voraussetzungen, Testschritte, erwartetes Ergebnis, tatsächliches Ergebnis, Abweichungen, Screenshots, Bewertung, zugehörige Dokumente und Freigabe.

Nicht erlaubt:
Test nicht als durchgeführt markieren.
Keine Ergebnisse erfinden.
Keine Freigabe setzen.

Validierung:
npm run akb:validate
```

---

## 6 Beispieltask – Projektstatus aktualisieren

```text
Task-ID:
AKB-TASK-0003

Phase:
Projektsteuerung

Sprint:
Nach Sprintabschluss

Ziel:
AKB-008 Projektstatus aktualisieren.

Scope:
Nur AKB-008 ändern.

Dateien:
00_Governance/AKB-008-Projektstatus.md

Aktion:
Status aktualisieren

Erwartetes Ergebnis:
Aktueller Sprint, Evidenzstatus, Praxisteststatus und nächster Sprint sind aktualisiert.

Nicht erlaubt:
Keine Governance-Regeln ändern.
Keine abgeschlossenen Inhalte entfernen.

Validierung:
npm run akb:validate
```

---

## 7 Standardtask – Projektphase abschließen

```text
Task-ID:
AKB-TASK-....

Phase:
Projektabschluss

Sprint:
Nach Abschluss der Projektphase

Ziel:
Projektphase nach PHS-1.0 abschließen und Phasenbericht erzeugen.

Scope:
Nur Phasenbericht und ausdrücklich freigegebene Projektsteuerungsdateien ändern.

Dateien:
90_Projektverwaltung/Phasen/Phase-XXX-Titel.md

Aktion:
Phasenbericht erzeugen oder ergänzen.

Erlaubte Änderungen:
Phasenbericht nach PHS-1.0 erstellen.
Projektstatus nur bei ausdrücklicher Freigabe aktualisieren.

Erwartetes Ergebnis:
Phasenbericht enthält die vollständige PHS-1.0-Struktur.
Alle Abschnitte sind nachvollziehbar ausgefüllt oder als offen markiert.

Nicht erlaubt:
Keine fachlichen Inhalte erfinden.
Keine Governance-Regeln ändern.
Keine Referenzhandbücher ändern.
Keine Recherchedateien ändern.
Keine Praxistests ändern.

Validierung:
npm run akb:validate
```

---

## 8 Qualitätsregel

Ein Task ist nur gültig, wenn eindeutig ist:

- welche Datei betroffen ist,
- welche Aktion ausgeführt wird,
- welche Inhalte geändert werden dürfen,
- welche Inhalte nicht geändert werden dürfen,
- wie das Ergebnis geprüft wird.
