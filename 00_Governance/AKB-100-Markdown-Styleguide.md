# Markdown-Styleguide

| Eigenschaft | Wert |
|-------------|------|
| Dokument-ID | AKB-100 |
| Version | 0.1 |
| Status | Work in Progress |
| Projekt | Accessibility Knowledge Base |
| Gültigkeitsbereich | Sämtliche Markdown-Dokumente |
| Letzte Aktualisierung | 01.07.2026 |
| Autor | Projektteam Accessibility Knowledge Base |

---

## 1 Zweck

Dieser Styleguide definiert die technischen und strukturellen Vorgaben für sämtliche Markdown-Dokumente der Accessibility Knowledge Base.

Ziel ist eine einheitliche, semantisch korrekte und barrierearme Dokumentstruktur unabhängig vom verwendeten Editor oder Ausgabemedium.

---

## 2 Grundsatz

Markdown dient als Arbeitsformat und bildet die Single Source of Truth für alle Dokumente.

Die Struktur der Markdown-Dateien muss unabhängig vom späteren Ausgabeformat (z. B. Confluence, Microsoft Word oder PDF) konsistent und nachvollziehbar sein.

---

## 3 Überschriften

Jedes Dokument besitzt genau eine Überschrift der Ebene 1.

Die weitere Gliederung erfolgt ausschließlich hierarchisch.

### Zulässig

```markdown
# Dokumenttitel

## Kapitel

### Unterkapitel

#### Abschnitt
```

### Nicht zulässig

```markdown
# Dokumenttitel

# Kapitel

# Weiteres Kapitel
```

Überschriftenebenen dürfen nicht übersprungen werden.

---

## 4 Listen

Aufzählungen verwenden ausschließlich Bindestriche (`-`).

Nummerierte Listen verwenden arabische Zahlen.

Verschachtelte Listen werden konsistent eingerückt.

---

## 5 Tabellen

Tabellen besitzen immer:

- eine Tabellenüberschrift
- eine Kopfzeile
- eine einheitliche Ausrichtung

Tabellen dienen ausschließlich der strukturierten Darstellung von Informationen.

---

## 6 Hinweisblöcke

Folgende Hinweisblöcke werden verwendet:

### Hinweis

```markdown
> [!NOTE]
```

### Empfehlung

```markdown
> [!TIP]
```

### Wichtige Information

```markdown
> [!IMPORTANT]
```

### Warnung

```markdown
> [!WARNING]
```

Andere Hinweisblöcke werden nicht verwendet.

---

## 7 Bereitstellung von Markdown-Inhalten

Markdown-Inhalte werden grundsätzlich mit folgenden Informationen bereitgestellt:

- Sprint oder Phase
- Ziel der Änderung
- Vollständiger Dateipfad
- Art der Änderung
  - Neue Datei
  - Ergänzung
  - Abschnitt ersetzen
  - Datei vollständig ersetzen
- Eindeutige Einfügeposition
- Anschließend der vollständige Markdown-Inhalt

Dadurch ist jederzeit eindeutig nachvollziehbar, in welcher Datei Änderungen vorzunehmen sind.

---

## 8 Codeblöcke

Codebeispiele werden grundsätzlich mit Syntaxhervorhebung versehen.

Beispiel:

````text
```markdown
# Beispiel
```
````

---

## 9 Architecture Freeze

Folgende Dokumentstandards gelten ab sofort als eingefroren:

- GOV-1.0
- STB-1.0
- RCH-2.0
- PT-1.0
- DOC-1.0
- PHS-1.0

Diese Standards dürfen ausschließlich geändert werden, wenn:

- eine fachliche Notwendigkeit besteht,
- die Änderung projektweit bewertet wurde,
- eine neue Version des jeweiligen Standards beschlossen wurde.

Redaktionelle Verbesserungen innerhalb bestehender Dokumente bleiben zulässig, sofern sie die Struktur des Standards nicht verändern.
