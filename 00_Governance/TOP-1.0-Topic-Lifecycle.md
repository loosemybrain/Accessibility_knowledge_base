# TOP-1.0 Topic Lifecycle

## 1 Zweck

TOP-1.0 beschreibt den Lebenszyklus eines Themenpakets im ITZ Documentation Framework.

Ein Themenpaket wird von der Erstellung bis zum Abschluss durch standardisierte CLI-Befehle begleitet.

## 2 Anwendungsbereich

TOP-1.0 gilt fuer Themenpakete, die nach TMP-1.0 erzeugt werden.

Der Standard beschreibt Status, Verantwortlichkeiten, Abschlusskriterien und CLI-Unterstuetzung.

Fachliche Inhalte werden durch TOP-1.0 nicht erzeugt.

## 3 Lebenszyklus

Ein Themenpaket durchlaeuft folgende Stationen:

| Schritt | Zweck |
|---------|-------|
| Erstellung | Platzhalterstruktur nach TMP-1.0 erzeugen |
| Recherche | Evidenzen und Primaerquellen dokumentieren |
| Praxistest | Tests vorbereiten, durchfuehren und dokumentieren |
| Dokumentation | Kapitel und Steckbrief konsistent fortschreiben |
| Review | Evidenzen, Praxistests, Kapitel und Steckbrief pruefen |
| Abschluss | Validierung, Phasenbericht und Sprint Summary erzeugen |
| Archivierung | abgeschlossene oder abgeloeste Themenpakete organisatorisch ablegen |

## 4 Statusmodell

Ein Themenpaket besitzt genau einen der folgenden Statuswerte:

| Status | Bedeutung |
|--------|-----------|
| Draft | Themenpaketstruktur wurde erzeugt |
| Research | Recherche und Evidenzen werden bearbeitet |
| Testing | Praxistests werden vorbereitet oder durchgefuehrt |
| Documentation | Kapitel und Steckbrief werden redaktionell bearbeitet |
| Review | Abschlusspruefung laeuft |
| Completed | Themenpaket ist abgeschlossen |
| Archived | Themenpaket ist archiviert |

Statuswerte werden als Klartext dokumentiert.

## 5 Verantwortlichkeiten

| Rolle | Verantwortung |
|-------|---------------|
| Autor | fachliche Inhalte auf Basis freigegebener Evidenzen erstellen |
| Praxistester | Tests reproduzierbar durchfuehren und dokumentieren |
| Fachredaktion | Kapitel, Steckbrief und Sprache pruefen |
| Reviewer | Evidenzbezug, Nachvollziehbarkeit und Freigabereife pruefen |
| Automatisierungsagent | Struktur erzeugen, Status anzeigen, Validierung ausfuehren und Abschlussartefakte erzeugen |

## 6 Abschlusskriterien

Ein Themenpaket darf erst abgeschlossen werden, wenn folgende Kriterien erfuellt sind:

- Recherchedatei vorhanden
- Evidenzen vorhanden
- Praxistests vorhanden
- Kapitel vorhanden
- Steckbrief vorhanden
- Markdown-Validierung erfolgreich
- Doctor erfolgreich
- Reviewstatus nachvollziehbar dokumentiert

Fachliche Freigaben werden nicht automatisch gesetzt.

## 7 CLI-Unterstuetzung

Die AKB CLI stellt folgende Befehle bereit:

```bash
npm run akb -- topic status ACC-005
npm run akb -- topic review ACC-005
npm run akb -- topic finish ACC-005 --phase T005 --title "Titel"
```

## 8 Topic Status

`akb topic status` zeigt:

- Evidenzen
- Praxistests
- Kapitel
- Steckbrief
- Reviewstatus

Der Befehl liest vorhandene Dateien und erzeugt keine fachlichen Inhalte.

## 9 Topic Review

`akb topic review` prueft automatisch:

- Evidenzen vorhanden
- Praxistests vorhanden
- Kapitel vorhanden
- Steckbrief vorhanden
- Validierung erfolgreich

Der Befehl setzt keine Freigaben.

## 10 Topic Finish

`akb topic finish` fuehrt folgende Schritte aus:

1. doctor
2. validate
3. Phase erzeugen
4. Sprint Summary erzeugen
5. Topic Status anzeigen

Der Abschlussbefehl erzeugt organisatorische Abschlussartefakte.

Fachliche Inhalte, Evidenzen und Praxistests werden nicht veraendert.

## 11 Qualitaetsregeln

Lifecycle-Befehle duerfen bestehende fachliche Inhalte nicht ueberschreiben.

Fehlende Abschlusskriterien muessen gemeldet werden.

Ein nicht vollstaendiges Themenpaket darf nicht stillschweigend als abgeschlossen behandelt werden.
