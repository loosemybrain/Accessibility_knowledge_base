# TASKS.md

## 1 Zweck

Diese Datei definiert das Standardformat für Arbeitsaufträge im Übergabeordner KIPITZ.

Jeder Task soll klein, eindeutig, prüfbar und nachvollziehbar sein.

## 2 Task-Format

```text
Task-ID:
KIPITZ-TASK-0001

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

## 3 Beispieltask

```text
Task-ID:
KIPITZ-TASK-0001

Ziel:
Eine neue Dokumentationsvorlage für ein Thema anlegen.

Scope:
Nur die angegebene Vorlage oder Datei ändern.

Dateien:
TEMPLATE.md

Aktion:
Abschnitt ergänzen

Einfügeposition:
## 3 Vorlage für die Themenstruktur

Erwartetes Ergebnis:
Die Vorlage enthält Überschrift, Ziel, Scope, Aufbau, Quellenangaben und Prüfschritte.

Nicht erlaubt:
Keine weiteren Dateien ändern.
Keine fachlichen Inhalte erfinden.
Keine Freigabe setzen.

Validierung:
Prüfen, ob die Struktur vollständig und klar formuliert ist.
```

## 4 Standardaktionen

Zulässige Aktionen:

- Neue Datei anlegen
- Abschnitt ergänzen
- Abschnitt ersetzen
- Status aktualisieren
- Validierung ausführen

Nicht zulässig ohne Freigabe:

- Datei umbenennen
- Ordnerstruktur ändern
- bestehende Freigaben ändern
- geschützte Inhalte überschreiben
