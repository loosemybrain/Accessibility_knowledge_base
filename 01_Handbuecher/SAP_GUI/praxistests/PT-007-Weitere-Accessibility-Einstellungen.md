# Praxistest - PT-007 Weitere Accessibility-Einstellungen

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Test-ID | PT-007 |
| Zugehörige Evidenz | ACC-002-E07 |
| Thema | Office-Dokumente außerhalb von SAP GUI öffnen |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Kapitel | Kapitel 5 - Barrierefreiheit |
| Abschnitt | 5.3 - Einstellungen zur Barrierefreiheit |
| Status | Blockiert |
| Version | 1.1 |
| Letzte Aktualisierung | 14.07.2026 |

---

## 2 Testziel

Geprüft wird, wie sich die Einstellung "Open Office documents outplace for better screen reader support" auf die Anzeige desselben Office-Dokuments auswirkt. Verglichen werden die aktivierte und die deaktivierte Einstellung.

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
| Office-Anwendung und Version | Vor Durchführung einzutragen. |
| Transaktion und Testdokument | Vor Durchführung einzutragen. |
| Weitere Software | Vor Durchführung einzutragen; falls nicht verwendet: Keine. |

---

## 4 Voraussetzungen

Die Klickanleitung ist vorbereitet. Der Praxistest bleibt blockiert, bis er in der Arbeitsumgebung mit einem konfigurierten SAP-System und einer geeigneten Desktop-Office-Integration durchgeführt wurde.

Vor dem Start müssen folgende Voraussetzungen erfüllt sein:

- Ein erreichbares SAP-System und ein berechtigter Testbenutzer stehen zur Verfügung.
- Eine kompatible Office-Anwendung ist installiert und betriebsbereit.
- Eine Transaktion und ein unkritisches Office-Testdokument wurden festgelegt, das normalerweise innerhalb des SAP-GUI-Fensters angezeigt werden kann.
- Transaktion, Navigationsweg, Dokumenttyp und eindeutige Bezeichnung des Testdokuments wurden in Abschnitt 3 dokumentiert.
- Das Dokument wird ausschließlich angezeigt; es werden keine Formatierungen oder Datenübertragungen fachlich geprüft.
- Screenshots enthalten keine personenbezogenen, vertraulichen oder produktiven Fachdaten.
- Der ursprüngliche Zustand der Einstellung wird nach dem Test wiederhergestellt.

---

## 5 Klickanleitung und Ergebnisprotokoll

### 5.1 Durchführung

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | SAP Logon starten, die vorgesehene Verbindung doppelt anklicken und am dokumentierten SAP-System anmelden. | System, Mandant und Anmeldezeitpunkt. |
| 2 | In der SAP-GUI-Symbolleiste auf "Lokales Layout anpassen" klicken oder `Alt+F12` drücken. Anschließend "Optionen" auswählen. | Geöffneter Optionsdialog: Ja oder Nein. |
| 3 | Im linken Navigationsbereich "Barrierefreiheit & Skriptunterstützung" und danach "Barrierefreiheit" auswählen. | Angezeigte Seite und gegebenenfalls abweichende Bezeichnung. |
| 4 | Prüfen, ob "Barrierefreiheitsmodus verwenden" aktiviert ist. Die Ausgangszustände dieser Option und der Option "Office-Dokumente für bessere Screenreader-Unterstützung extern öffnen" dokumentieren. | Ausgangszustand beider Optionen: Aktiviert oder Deaktiviert. |
| 5 | Falls der Barrierefreiheitsmodus deaktiviert ist, diesen aktivieren, damit die zu prüfende Option verfügbar ist. Anschließend die Option zum externen Öffnen aktivieren und mit "Übernehmen" und "OK" bestätigen. | Einstellungen übernommen: Ja oder Nein; gegebenenfalls angezeigter Hinweis. |
| 6 | Die in Abschnitt 3 dokumentierte Transaktion öffnen und zum festgelegten Office-Testdokument navigieren. | Transaktion, Navigationsweg und Dokumentbezeichnung. |
| 7 | Das Testdokument ausschließlich zur Anzeige öffnen. | Ort der Darstellung: innerhalb oder außerhalb des SAP-GUI-Fensters; gestartete Office-Anwendung. |
| 8 | Screenshot PT007-01 erstellen und das Dokument schließen, ohne Änderungen zu speichern. | Dateiname des Screenshots und Schließaktion. |
| 9 | Den Optionsdialog erneut über `Alt+F12`, "Optionen", "Barrierefreiheit & Skriptunterstützung" und "Barrierefreiheit" öffnen. Die Option zum externen Öffnen deaktivieren und mit "Übernehmen" und "OK" bestätigen. | Einstellung übernommen: Ja oder Nein. |
| 10 | Dasselbe Office-Testdokument über denselben Navigationsweg erneut ausschließlich zur Anzeige öffnen. | Ort der Darstellung: innerhalb oder außerhalb des SAP-GUI-Fensters; gestartete Anwendung. |
| 11 | Screenshot PT007-02 erstellen, das Dokument ohne Speichern schließen und beide Darstellungen vergleichen. | Dateiname und festgestellter Unterschied. |

### 5.2 Rücksetzung

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | Den Optionsdialog erneut öffnen und die Option zum externen Öffnen auf den in Prüfschritt 4 dokumentierten Ausgangszustand setzen. | Wiederhergestellter Zustand. |
| 2 | Falls der Barrierefreiheitsmodus für den Test geändert wurde, auch diesen auf seinen dokumentierten Ausgangszustand zurücksetzen. | Wiederhergestellter Zustand des Barrierefreiheitsmodus. |
| 3 | Mit "Übernehmen" und "OK" bestätigen und den Optionsdialog zur Kontrolle erneut öffnen. | Rücksetzung kontrolliert: Ja oder Nein. |
| 4 | Vom SAP-System abmelden, die Office-Anwendung und SAP GUI schließen. | Abmeldezeitpunkt und geschlossene Anwendungen. |

---

## 6 Erwartetes Verhalten

Nach der dokumentierten Herstellerinformation wird ein Office-Dokument bei aktivierter Einstellung außerhalb des SAP-GUI-Fensters statt innerhalb des Fensters angezeigt. Dies kann die Erkennung und Handhabung durch Screenreader verbessern. Die Herstellerinformation weist zugleich auf Einschränkungen der Desktop-Office-Integration hin; dieser Test prüft ausschließlich den Ort der Anzeige.

---

## 7 Tatsächlich beobachtetes Verhalten

| Prüfzustand | Ort der Darstellung | Gestartete Anwendung | Screenshot-ID |
|-------------|---------------------|----------------------|---------------|
| Externes Öffnen aktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT007-01 |
| Externes Öffnen deaktiviert | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT007-02 |

---

## 8 Abweichungen

| Abweichung | Auswirkung auf den Test | Weiteres Vorgehen |
|------------|-------------------------|-------------------|
| Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. |

---

## 9 Screenshots

| Screenshot-ID | Beschreibung | Status |
|---------------|--------------|--------|
| PT007-01 | Dasselbe Office-Testdokument bei aktivierter Option zum externen Öffnen. | Noch nicht erstellt |
| PT007-02 | Dasselbe Office-Testdokument bei deaktivierter Option zum externen Öffnen. | Noch nicht erstellt |

---

## 10 Bewertung

| Prüffrage | Bewertung |
|-----------|-----------|
| Ändert sich der Ort der Dokumentanzeige reproduzierbar? | Noch nicht durchgeführt. |
| Entspricht die beobachtete Wirkung der Herstellerinformation? | Noch nicht durchgeführt. |
| Wurde in beiden Prüfschritten dasselbe Office-Dokument verwendet? | Noch nicht durchgeführt. |
| Wurden alle Ausgangszustände wiederhergestellt? | Noch nicht durchgeführt. |

---

## 11 Ergebnis

Noch nicht durchgeführt.

---

## 12 Zugehörige Dokumente

| Dokumenttyp | Referenz |
|-------------|----------|
| Evidenz | ACC-002-E07 |
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
