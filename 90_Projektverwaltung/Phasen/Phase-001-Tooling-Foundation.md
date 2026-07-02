# Phase 001 – Tooling Foundation

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Phase | 001 |
| Titel | Tooling Foundation |
| Status | Abgeschlossen |
| Projekt | Accessibility Knowledge Base |
| Abschlussdatum | 01.07.2026 |
| Standard | PHS-1.0 |
| Zeitraum | 30.06.2026 – 01.07.2026 |
| Vorgänger | — |
| Nachfolger | Phase 002 – Fachliche Dokumentation |

---

## 2 Ziel

Aufbau einer lokalen Tooling-Grundlage für die Accessibility Knowledge Base.

Die Phase dient dazu, wiederkehrende mechanische Arbeiten zu reduzieren und gleichzeitig die definierten Qualitätsstandards einzuhalten.

---

## 3 Bearbeiteter Scope

Bearbeitet wurden ausschließlich Projektsteuerung und technische Hilfswerkzeuge.

Fachliche Inhalte des Referenzhandbuchs wurden nicht als Ziel dieser Phase behandelt.

---

## 4 Erstellte Dokumente

| Dokument | Zweck |
|----------|-------|
| AGENTS.md | Arbeitsregeln für Codex und mechanische Projektarbeit |
| TASKS.md | Standardisiertes Task-Format für Codex-Aufträge |
| tools/create-phase-report.js | Generator für Phasenberichte nach PHS-1.0 |

---

## 5 Aktualisierte Dokumente

| Dokument | Änderung |
|----------|----------|
| package.json | npm-Skripte für AKB-Tooling ergänzt |
| tools/validate-markdown.js | Markdown-Validierung für AKB-Regeln bereitgestellt |
| tools/insert-section.js | Abschnittsbasierte Markdown-Bearbeitung bereitgestellt |
| AGENTS.md | Projektstruktur und PHS-1.0 dokumentiert |
| TASKS.md | Standardtask für Projektphasen ergänzt |

---

## 6 Neue Evidenzen

Keine neuen fachlichen Evidenzen in dieser Phase.

---

## 7 Neue Praxistests

Keine neuen Praxistests in dieser Phase.

---

## 8 Neue Standards

| Standard | Version | Status |
|----------|---------|--------|
| PHS | 1.0 | Eingeführt |

---

## 9 Architekturänderungen

Die Projektverwaltung wurde organisatorisch von den fachlichen Handbuchinhalten getrennt.

Phasenberichte werden unter folgendem Pfad geführt:

```text
90_Projektverwaltung/Phasen/
```

Fachliche Praxistests bleiben handbuchbezogen unter:

```text
01_Handbuecher/SAP_GUI/praxistests/
```

---

## 10 Erreichte Meilensteine

- Codex erfolgreich in den AKB-Workflow integriert.
- Markdown-Validierung eingeführt.
- Abschnittsbasierte Markdown-Bearbeitung implementiert.
- PHS-1.0 eingeführt.
- Tooling Foundation abgeschlossen.

---

## 11 Automatisierungsgrad

Folgende mechanische Aufgaben sind vorbereitet:

- Markdown-Validierung
- Abschnittsbasiertes Ergänzen oder Ersetzen
- Phasenbericht-Erzeugung
- standardisierte Codex-Tasks

---

## 12 Lessons Learned

Projektverwaltungsdokumente sollten nicht zwischen fachlichen Dokumenten abgelegt werden.

Praxistests gehören fachlich zum jeweiligen Referenzhandbuch und nicht in einen allgemeinen Projektordner.

Die Trennung von Governance, Projektverwaltung, Quellen, Praxistests und Kapiteln verbessert die Wartbarkeit der Accessibility Knowledge Base.

---

## 13 Offene Punkte

| Punkt | Status |
|-------|--------|
| Automatisierung für Evidenzdateien | Offen |
| Automatisierung für Praxistestdateien | Offen |
| Automatisierung für Projektstatus-Updates | Offen |

---

## 14 Risiken

| Risiko | Bewertung |
|--------|-----------|
| Zu frühe Erweiterung der Tooling-Struktur | Gering |
| Abweichung zwischen AGENTS.md und tatsächlicher Projektstruktur | Behoben |
| Doppelte Ordner für Phasen und Praxistests | Behoben |

---

## 15 Nächste Phase

Phase 002 – Fachliche Dokumentation

Erster Sprint:

ACC-001-E03 – Neustartverhalten nach Aktivierung oder Deaktivierung des Accessibility Mode.
