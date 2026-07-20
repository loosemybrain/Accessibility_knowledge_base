# Praxistest - PT-005 Dialog box for messages

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Test-ID | PT-005 |
| Zugehörige Evidenz | ACC-002-E05 |
| Thema | Dialog box for messages |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Kapitel | Kapitel 5 - Barrierefreiheit |
| Abschnitt | 5.3 - Einstellungen zur Barrierefreiheit |
| Status | Blockiert |
| Version | 1.1 |
| Letzte Aktualisierung | 14.07.2026 |

---

## 2 Testziel

Geprüft wird, wie SAP GUI Erfolgs-, Warn- und Fehlermeldungen bei aktivierten und deaktivierten Meldungsdialogen darstellt. Für jeden Meldungstyp wird dasselbe vorab festgelegte Szenario wiederholt.

---

## 3 Testumgebung

Die Werte sind vor der Durchführung vollständig einzutragen.

| Eigenschaft | Wert |
|-------------|------|
| Testdatum und Uhrzeit | Vor Durchführung einzutragen. |
| Praxistester | Vor Durchführung einzutragen. |
| Arbeitsumgebung | Vor Durchführung einzutragen. |
| SAP-System und Mandant | Vor Durchführung einzutragen. |
| Betriebssystem | Vor Durchführung einzutragen. |
| SAP GUI Version | Vor Durchführung einzutragen. |
| Patchlevel | Vor Durchführung einzutragen. |
| Theme | Vor Durchführung einzutragen. |
| Bildschirmauflösung | Vor Durchführung einzutragen. |
| Screenreader oder Bildschirmlupe | Vor Durchführung einzutragen; falls nicht verwendet: Keine. |
| Transaktionen und Meldungsszenarien | Vor Durchführung einzutragen. |
| Weitere Software | Vor Durchführung einzutragen; falls nicht verwendet: Keine. |

---

## 4 Voraussetzungen

Die Klickanleitung ist vorbereitet. Der Praxistest bleibt blockiert, bis er in der Arbeitsumgebung mit einem konfigurierten SAP-System durchgeführt wurde.

Vor dem Start müssen folgende Voraussetzungen erfüllt sein:

- Ein erreichbares SAP-System und ein berechtigter Testbenutzer stehen zur Verfügung.
- Für Erfolg, Warnung und Fehler wurde jeweils ein reproduzierbares und fachlich unkritisches Szenario festgelegt.
- Transaktion, Eingaben, Schaltflächen und erwarteter Meldungstyp jedes Szenarios wurden in Abschnitt 3 dokumentiert.
- Die Szenarien verändern keine produktiven Fachdaten oder können vollständig zurückgesetzt werden.
- Die Meldungen enthalten keine personenbezogenen oder vertraulichen Daten in Screenshots.
- Der ursprüngliche Zustand aller drei Optionen wird nach dem Test wiederhergestellt.

---

## 5 Klickanleitung und Ergebnisprotokoll

### 5.1 Vorbereitete Meldungsszenarien

| Meldungstyp | Transaktion | Eingaben und Klickfolge | Erwarteter Auslöser |
|-------------|-------------|-------------------------|---------------------|
| Erfolg | Vor Durchführung einzutragen. | Vor Durchführung einzutragen. | Vor Durchführung einzutragen. |
| Warnung | Vor Durchführung einzutragen. | Vor Durchführung einzutragen. | Vor Durchführung einzutragen. |
| Fehler | Vor Durchführung einzutragen. | Vor Durchführung einzutragen. | Vor Durchführung einzutragen. |

### 5.2 Durchführung mit aktivierten Meldungsdialogen

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | SAP Logon starten, die vorgesehene Verbindung doppelt anklicken und am dokumentierten SAP-System anmelden. | System, Mandant und Anmeldezeitpunkt. |
| 2 | In der SAP-GUI-Symbolleiste auf "Lokales Layout anpassen" klicken oder `Alt+F12` drücken. Anschließend "Optionen" auswählen. | Geöffneter Optionsdialog: Ja oder Nein. |
| 3 | Im linken Navigationsbereich "Interaktionsdesign" und danach "Benachrichtigungen" auswählen. | Angezeigte Seite und gegebenenfalls abweichende Bezeichnung. |
| 4 | Die Ausgangszustände der Optionen "Erfolgsmeldungen in einem Dialog anzeigen", "Warnmeldungen in einem Dialog anzeigen" und "Fehlermeldungen in einem Dialog anzeigen" dokumentieren. | Ausgangszustand jeder Option: Aktiviert oder Deaktiviert. |
| 5 | Alle drei Optionen aktivieren und mit "Übernehmen" und "OK" bestätigen. | Einstellungen übernommen: Ja oder Nein; gegebenenfalls angezeigter Hinweis. |
| 6 | Das in Abschnitt 5.1 dokumentierte Erfolgsszenario exakt ausführen. | Meldungstext, Darstellung in Statusleiste und Dialogfeld sowie notwendige Bestätigung. |
| 7 | Screenshot PT005-01 erstellen und das Dialogfeld bestätigen. | Dateiname des Screenshots. |
| 8 | Das dokumentierte Warnszenario exakt ausführen. | Meldungstext, Darstellung in Statusleiste und Dialogfeld sowie notwendige Bestätigung. |
| 9 | Screenshot PT005-02 erstellen und das Dialogfeld bestätigen. | Dateiname des Screenshots. |
| 10 | Das dokumentierte Fehlerszenario exakt ausführen. | Meldungstext, Darstellung in Statusleiste und Dialogfeld sowie notwendige Bestätigung. |
| 11 | Screenshot PT005-03 erstellen und das Dialogfeld bestätigen. | Dateiname des Screenshots. |

### 5.3 Durchführung mit deaktivierten Meldungsdialogen

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | Den Optionsdialog erneut über `Alt+F12`, "Optionen", "Interaktionsdesign" und "Benachrichtigungen" öffnen. | Geöffneter Optionsdialog: Ja oder Nein. |
| 2 | Alle drei Meldungsoptionen deaktivieren und mit "Übernehmen" und "OK" bestätigen. | Einstellungen übernommen: Ja oder Nein. |
| 3 | Erfolgs-, Warn- und Fehlerszenario aus Abschnitt 5.1 nacheinander exakt wiederholen. | Meldungstext, Statusleistenanzeige, zusätzliches Dialogfeld und notwendige Bestätigung je Meldungstyp. |
| 4 | Nach jedem Meldungstyp einen Screenshot erstellen. | Dateinamen PT005-04, PT005-05 und PT005-06. |
| 5 | Die Darstellung jedes Meldungstyps mit dem entsprechenden Ergebnis aus Abschnitt 5.2 vergleichen. | Festgestellter Unterschied je Meldungstyp. |

### 5.4 Rücksetzung

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | Den Optionsdialog erneut öffnen und jede der drei Optionen auf ihren in Abschnitt 5.2 dokumentierten Ausgangszustand setzen. | Wiederhergestellter Zustand jeder Option. |
| 2 | Mit "Übernehmen" und "OK" bestätigen und den Optionsdialog zur Kontrolle erneut öffnen. | Rücksetzung kontrolliert: Ja oder Nein. |
| 3 | Gegebenenfalls erzeugte Testdaten nach dem festgelegten Fachverfahren zurücksetzen. Danach vom SAP-System abmelden. | Rücksetzung der Testdaten und Abmeldezeitpunkt. |

---

## 6 Erwartetes Verhalten

Nach der dokumentierten Herstellerinformation werden Erfolgs-, Warn- und Fehlermeldungen bei aktivierter zugehöriger Option sowohl in der Statusleiste als auch in einem Dialogfeld angezeigt. Das Dialogfeld muss ausdrücklich bestätigt werden.

---

## 7 Tatsächlich beobachtetes Verhalten

| Meldungstyp | Option | Statusleiste | Dialogfeld | Bestätigung erforderlich | Screenshot-ID |
|-------------|--------|--------------|------------|--------------------------|---------------|
| Erfolg | Aktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT005-01 |
| Warnung | Aktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT005-02 |
| Fehler | Aktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT005-03 |
| Erfolg | Deaktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT005-04 |
| Warnung | Deaktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT005-05 |
| Fehler | Deaktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT005-06 |

---

## 8 Abweichungen

| Abweichung | Auswirkung auf den Test | Weiteres Vorgehen |
|------------|-------------------------|-------------------|
| Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. |

---

## 9 Screenshots

| Screenshot-ID | Beschreibung | Status |
|---------------|--------------|--------|
| PT005-01 | Erfolgsmeldung bei aktivierter Dialogoption. | Noch nicht erstellt |
| PT005-02 | Warnmeldung bei aktivierter Dialogoption. | Noch nicht erstellt |
| PT005-03 | Fehlermeldung bei aktivierter Dialogoption. | Noch nicht erstellt |
| PT005-04 | Erfolgsmeldung bei deaktivierter Dialogoption. | Noch nicht erstellt |
| PT005-05 | Warnmeldung bei deaktivierter Dialogoption. | Noch nicht erstellt |
| PT005-06 | Fehlermeldung bei deaktivierter Dialogoption. | Noch nicht erstellt |

---

## 10 Bewertung

| Prüffrage | Bewertung |
|-----------|-----------|
| Ist die Wirkung für jeden Meldungstyp reproduzierbar? | Noch nicht durchgeführt. |
| Entspricht die beobachtete Wirkung der Herstellerinformation? | Noch nicht durchgeführt. |
| Wurden für beide Zustände dieselben Meldungsszenarien verwendet? | Noch nicht durchgeführt. |
| Wurden alle Ausgangszustände wiederhergestellt? | Noch nicht durchgeführt. |

---

## 11 Ergebnis

Noch nicht durchgeführt.

---

## 12 Zugehörige Dokumente

| Dokumenttyp | Referenz |
|-------------|----------|
| Evidenz | ACC-002-E05 |
| Recherche | ACC-002 |
| Kapitel | Kapitel 5.3 - Einstellungen zur Barrierefreiheit |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |

---

## 13 Freigabe

| Prüfschritt | Status |
|-------------|--------|
| Test durchgeführt | Nein |
| Ergebnis dokumentiert | Nein |
| Screenshots geprüft | Nein |
| Fachliche Bewertung abgeschlossen | Nein |
| Freigabe erfolgt | Nein |
