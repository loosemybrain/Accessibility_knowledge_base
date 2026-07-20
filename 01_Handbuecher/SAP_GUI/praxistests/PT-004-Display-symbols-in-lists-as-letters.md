# Praxistest - PT-004 Display symbols in lists as letters

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Test-ID | PT-004 |
| Zugehörige Evidenz | ACC-002-E04 |
| Thema | Display symbols in lists as letters |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Kapitel | Kapitel 5 - Barrierefreiheit |
| Abschnitt | 5.3 - Einstellungen zur Barrierefreiheit |
| Status | Blockiert |
| Version | 1.1 |
| Letzte Aktualisierung | 14.07.2026 |

---

## 2 Testziel

Geprüft wird, wie sich die Einstellung "Display symbols in lists as letters" auf Symbole in einer geeigneten SAP-Liste auswirkt. Der Vergleich erfolgt am selben Testobjekt mit aktivierter und deaktivierter Einstellung.

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
| Transaktion und Testliste | Vor Durchführung einzutragen. |
| Weitere Software | Vor Durchführung einzutragen; falls nicht verwendet: Keine. |

---

## 4 Voraussetzungen

Die Klickanleitung ist vorbereitet. Der Praxistest bleibt blockiert, bis er in der Arbeitsumgebung mit einem konfigurierten SAP-System durchgeführt wurde.

Vor dem Start müssen folgende Voraussetzungen erfüllt sein:

- Ein erreichbares SAP-System und ein berechtigter Testbenutzer stehen zur Verfügung.
- Eine Transaktion mit einer reproduzierbaren Liste wurde ausgewählt, in der Symbole zum Auf- oder Zuklappen einer Unterstruktur sichtbar sind.
- Die Transaktion, die Liste und die benötigten Navigationsschritte wurden in Abschnitt 3 dokumentiert.
- Die Prüfung kann ohne Änderung produktiver Fachdaten durchgeführt werden.
- Screenshots enthalten keine personenbezogenen, vertraulichen oder produktiven Fachdaten.
- Der ursprüngliche Zustand der Einstellung wird nach dem Test wiederhergestellt.

---

## 5 Klickanleitung und Ergebnisprotokoll

### 5.1 Durchführung

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | SAP Logon starten, die vorgesehene Verbindung doppelt anklicken und am dokumentierten SAP-System anmelden. | System, Mandant und Anmeldezeitpunkt. |
| 2 | Die in Abschnitt 3 festgelegte Transaktion öffnen und zur vorgesehenen Liste navigieren. | Transaktion, Navigationsweg und eindeutige Beschreibung der Liste. |
| 3 | Prüfen, ob in der Liste Symbole zum Auf- oder Zuklappen einer Unterstruktur vorhanden sind. Falls nicht, den Test abbrechen und eine geeignete Liste bestimmen. | Eignung der Liste: Ja oder Nein; Begründung bei Nein. |
| 4 | In der SAP-GUI-Symbolleiste auf "Lokales Layout anpassen" klicken oder `Alt+F12` drücken. Anschließend "Optionen" auswählen. | Geöffneter Optionsdialog: Ja oder Nein. |
| 5 | Im linken Navigationsbereich "Barrierefreiheit & Skriptunterstützung" und danach "Barrierefreiheit" auswählen. | Angezeigte Seite und gegebenenfalls abweichende Bezeichnung. |
| 6 | Den Ausgangszustand der Option "Symbole in Listen als Buchstaben anzeigen" dokumentieren. | Ausgangszustand: Aktiviert oder Deaktiviert. |
| 7 | Die Option aktivieren und die Änderung mit "Übernehmen" und "OK" bestätigen. Ist die Option bereits aktiviert, bleibt sie für diesen Prüfschritt aktiviert. | Einstellung übernommen: Ja oder Nein; gegebenenfalls angezeigter Hinweis. |
| 8 | Zur festgelegten Liste zurückkehren. Die Liste neu aufrufen oder aktualisieren, ohne Testdaten zu verändern. | Erforderlicher Aktualisierungsschritt und sichtbare Darstellung der Symbole beziehungsweise Ersatzzeichen. |
| 9 | Screenshot PT004-01 erstellen. | Dateiname des Screenshots. |
| 10 | Den Optionsdialog erneut über `Alt+F12`, "Optionen", "Barrierefreiheit & Skriptunterstützung" und "Barrierefreiheit" öffnen. Die Option deaktivieren und mit "Übernehmen" und "OK" bestätigen. | Einstellung übernommen: Ja oder Nein; gegebenenfalls angezeigter Hinweis. |
| 11 | Dieselbe Liste erneut aufrufen oder aktualisieren. Position und Listenzustand müssen mit Prüfschritt 8 übereinstimmen. | Sichtbare Darstellung der Symbole beziehungsweise Zeichen. |
| 12 | Screenshot PT004-02 erstellen und die Darstellungen aus den Prüfschritten 8 und 11 vergleichen. | Dateiname und festgestellter Unterschied. |

### 5.2 Rücksetzung

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | Den Optionsdialog erneut öffnen und die Option auf den in Prüfschritt 6 dokumentierten Ausgangszustand setzen. | Wiederhergestellter Zustand. |
| 2 | Mit "Übernehmen" und "OK" bestätigen und den Optionsdialog zur Kontrolle erneut öffnen. | Rücksetzung kontrolliert: Ja oder Nein. |
| 3 | Vom SAP-System abmelden und SAP GUI schließen, sofern keine weiteren freigegebenen Tests unmittelbar folgen. | Abmeldezeitpunkt oder Verweis auf den Folgetest. |

---

## 6 Erwartetes Verhalten

Nach der dokumentierten Herstellerinformation können Symbole in Listen bei aktivierter Einstellung durch Buchstaben beziehungsweise Zeichen wie "4" und "5" ersetzt werden. Dadurch sollen Screenreader diese Ersetzungen erkennen und zusätzliche Informationen zu den Listensymbolen ausgeben können. Die tatsächlich verwendeten Ersatzzeichen sind im Praxistest zu erfassen.

---

## 7 Tatsächlich beobachtetes Verhalten

| Prüfzustand | Beobachtete Darstellung | Screenreader-Ausgabe, falls geprüft | Screenshot-ID |
|-------------|-------------------------|-------------------------------------|---------------|
| Option aktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT004-01 |
| Option deaktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT004-02 |

---

## 8 Abweichungen

| Abweichung | Auswirkung auf den Test | Weiteres Vorgehen |
|------------|-------------------------|-------------------|
| Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. |

---

## 9 Screenshots

| Screenshot-ID | Beschreibung | Status |
|---------------|--------------|--------|
| PT004-01 | Dieselbe SAP-Liste bei aktivierter Option "Symbole in Listen als Buchstaben anzeigen". | Noch nicht erstellt |
| PT004-02 | Dieselbe SAP-Liste bei deaktivierter Option "Symbole in Listen als Buchstaben anzeigen". | Noch nicht erstellt |

---

## 10 Bewertung

Nach der Durchführung sind folgende Fragen zu beantworten:

| Prüffrage | Bewertung |
|-----------|-----------|
| Ändert sich die Darstellung der Listensymbole reproduzierbar? | Noch nicht durchgeführt. |
| Entspricht die beobachtete Wirkung der Herstellerinformation? | Noch nicht durchgeführt. |
| Sind die Ersatzzeichen mit dem eingesetzten Screenreader erkennbar, falls ein Screenreader geprüft wurde? | Noch nicht durchgeführt. |
| Wurde der Ausgangszustand wiederhergestellt? | Noch nicht durchgeführt. |

---

## 11 Ergebnis

Noch nicht durchgeführt.

---

## 12 Zugehörige Dokumente

| Dokumenttyp | Referenz |
|-------------|----------|
| Evidenz | ACC-002-E04 |
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
