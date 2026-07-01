# AGENTS.md

## 1 Projekt

Dieses Projekt ist die Accessibility Knowledge Base des ITZBund.

Ziel ist der Aufbau einer fachlich belastbaren, nachvollziehbaren und langfristig wartbaren Wissensplattform zur digitalen Barrierefreiheit.

Die Dokumentation erfolgt nach dem Grundsatz:

Qualität hat Vorrang vor Vollständigkeit.

---

## 2 Arbeitsmodus

Codex unterstützt ausschließlich bei mechanischen und strukturellen Aufgaben.

Codex darf:

- Dateien anlegen
- Markdown-Strukturen erzeugen
- Abschnitte nach eindeutigem Heading-Pfad ergänzen oder ersetzen
- Statusinformationen aktualisieren
- Validierungen ausführen
- Projektstatus pflegen
- Vorlagen nach definierten Standards erzeugen

Codex darf nicht:

- fachliche Aussagen erfinden
- Quellen interpretieren, ohne dass sie vorliegen
- Praxistests als durchgeführt markieren
- Freigaben setzen
- Inhalte ohne eindeutigen Auftrag umstrukturieren
- mehrere Dateien außerhalb des angegebenen Scopes ändern

---

## 3 Dokumentstandards

Es gelten folgende Standards:

| Standard | Zweck |
|----------|-------|
| GOV-1.0 | Governance-Dokumente |
| STB-1.0 | Kapitel-Steckbriefe |
| RCH-2.0 | Recherchedateien |
| PT-1.0 | Praxistests |
| DOC-1.0 | Kapiteldateien |

---

## 4 Markdown-Regeln

Für alle Markdown-Dateien gilt:

- genau eine H1 pro Datei
- keine übersprungenen Überschriftenebenen
- keine Emojis
- keine dekorativen Icons
- keine farbigen Statuskennzeichnungen
- Statuswerte ausschließlich als Klartext
- Tabellen mit Kopfzeile
- keine fachlichen Informationen ausschließlich in Bildern
- aussagekräftige Überschriften
- keine unnötigen Leerzeilen

---

## 5 Projektstruktur

Aktuelle Hauptstruktur:

```text
00_Governance/
01_Handbuecher/
02_Confluence/
03_Assets/
04_Quellenarchiv/
99_Archiv/
90_Projektverwaltung/
├── Phasen/
├── Roadmap/
├── Releases/
└── Changelog/
tools/
.vscode/
```

Projektverwaltungsdokumente gehören nicht zur fachlichen Dokumentation und werden organisatorisch getrennt von den Handbüchern verwaltet.

Für SAP GUI gilt:

```text
01_Handbuecher/
└── SAP_GUI/
    ├── AKB-200-Referenzhandbuch-SAP-GUI.md
    ├── kapitel/
    ├── steckbriefe/
    ├── quellen/
    ├── praxistests/
    └── screenshots/
```

---

## 6 Single Source of Truth

Fachliche Informationen werden nur einmal gepflegt.

Verantwortlichkeiten:

| Dokumenttyp | Aufgabe |
|-------------|---------|
| Steckbrief | Planung und Steuerung |
| Recherchedatei | Evidenz und Quellen |
| Praxistest | reproduzierbare Prüfung |
| Kapitel | veröffentlichungsreifer Fachtext |
| Referenzhandbuch | Zusammenführung freigegebener Kapitel |

---

## 7 Evidenzprinzip

Eine Evidenz dokumentiert genau eine fachliche Aussage.

Eine Evidenz darf erst freigegeben werden, wenn die erforderlichen Nachweise vollständig dokumentiert wurden.

Nicht jede Evidenz benötigt einen Praxistest. Wenn kein Praxistest erforderlich oder möglich ist, muss dies in der Evidenz begründet werden.

---

## 8 Forschungsmodus

Im Forschungsmodus dürfen nur Informationen dokumentiert werden, die unmittelbar aus geprüften Quellen oder reproduzierbaren Praxistests stammen.

Nicht zulässig sind:

- Annahmen
- Vermutungen
- nicht geprüfte Zusammenfassungen
- Platzhalter als fachliche Aussage
- erfundene Quellen

Bis zur Prüfung bleibt der Status:

```text
Noch nicht recherchiert.
```

oder

```text
Noch nicht durchgeführt.
```

---

## 9 Standard-Workflow

Jeder fachliche Sprint folgt diesem Ablauf:

1. Recherche
2. Validierung
3. Redaktion
4. Veröffentlichung

Vor der Veröffentlichung müssen Evidenz und gegebenenfalls Praxistest abgeschlossen sein.

---

## 10 Copy-&-Paste-/Patch-Regel

Änderungen erfolgen nur mit eindeutigem Scope:

- Datei
- Aktion
- Einfügeposition
- Heading-Pfad
- erwartetes Ergebnis

Beispiel:

```text
Datei:
01_Handbuecher/SAP_GUI/quellen/ACC-001-Accessibility-Mode.md

Aktion:
Abschnitt ersetzen

Einfügeposition:
### 3.2 Evidenz ACC-001-E02
```

---

## 11 Verbotene Änderungen

Ohne ausdrücklichen Auftrag dürfen nicht geändert werden:

- Governance-Inhalte
- Dokumentstandards
- bestehende freigegebene Evidenzen
- abgeschlossene Praxistests
- veröffentlichte Kapitel
- Dateinamen
- Ordnerstruktur

---

## 12 Validierung

Nach strukturellen Änderungen ist auszuführen:

```bash
npm run akb:validate
```

Fehler sind zu beheben oder nachvollziehbar zu melden.

---

## 13 PHS-1.0

Phasenberichte dokumentieren abgeschlossene Projektphasen.

Sie gehören nicht zur Governance.

Jede Phase besitzt dieselbe Struktur.

Änderungen erfolgen ausschließlich nach Abschluss einer Phase.

---

## 14 Arbeitsprinzip

Codex arbeitet klein, kontrolliert und nachvollziehbar.

Keine globalen Refactorings.

Keine automatische Bereinigung.

Keine fachlichen Ergänzungen ohne Quelle, Test oder ausdrückliche Freigabe.
