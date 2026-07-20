# Praxistest - PT-006 Set F4 help to modal dialog

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Test-ID | PT-006 |
| Zugehörige Evidenz | ACC-002-E06 |
| Thema | Set F4 help to modal dialog |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Kapitel | Kapitel 5 - Barrierefreiheit |
| Abschnitt | 5.3 - Einstellungen zur Barrierefreiheit |
| Status | Blockiert |
| Version | 1.1 |
| Letzte Aktualisierung | 14.07.2026 |

---

## 2 Testziel

Geprüft wird die F4-Hilfe am selben Eingabefeld mit aktivierter und deaktivierter Einstellung für die modale Darstellung. Die Einstellung wird direkt im verbundenen SAP-System geprüft.

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
| Transaktion und Eingabefeld | Vor Durchführung einzutragen. |
| Weitere Software | Vor Durchführung einzutragen; falls nicht verwendet: Keine. |

---

## 4 Voraussetzungen

Die Klickanleitung ist vorbereitet. Der Praxistest bleibt blockiert, bis er in der Arbeitsumgebung mit einem konfigurierten SAP-System durchgeführt wurde.

Vor dem Start müssen folgende Voraussetzungen erfüllt sein:

- Ein erreichbares SAP-System und ein berechtigter Testbenutzer stehen zur Verfügung.
- Eine Transaktion und ein Eingabefeld mit reproduzierbar aufrufbarer F4-Hilfe wurden festgelegt.
- Transaktion, Navigationsweg, Feldbezeichnung und Ausgangsdaten wurden in Abschnitt 3 dokumentiert.
- Die Prüfung kann ohne Änderung produktiver Fachdaten durchgeführt werden.
- Screenshots enthalten keine personenbezogenen oder vertraulichen Daten.
- Der ursprüngliche Zustand der Einstellung wird nach dem Test wiederhergestellt.

---

## 5 Klickanleitung und Ergebnisprotokoll

### 5.1 Durchführung

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | SAP Logon starten, die vorgesehene Verbindung doppelt anklicken und am dokumentierten SAP-System anmelden. | System, Mandant und Anmeldezeitpunkt. |
| 2 | In der Menüleiste des verbundenen SAP-Systems "Hilfe", danach "Einstellungen" und anschließend den Bereich "F4-Hilfe" öffnen. Die Einstellung befindet sich nicht im Optionsdialog von SAP Logon. | Angezeigter Menüpfad und gegebenenfalls abweichende Bezeichnungen. |
| 3 | Den Ausgangszustand der Einstellung zur modalen F4-Hilfe dokumentieren. | Ausgangszustand und genaue Bezeichnung der auswählbaren Einstellung. |
| 4 | Die Option für die Darstellung der F4-Hilfe als modales Dialogfeld auswählen und die Einstellung bestätigen. | Einstellung übernommen: Ja oder Nein; gegebenenfalls angezeigter Hinweis. |
| 5 | Die in Abschnitt 3 dokumentierte Transaktion öffnen und den Eingabefokus in das festgelegte Feld setzen. | Transaktion, Feldbezeichnung und vorhandener Feldwert. |
| 6 | `F4` drücken oder die Schaltfläche für die Wertehilfe am Feld anklicken. | Art der Darstellung und Titel des geöffneten Fensters. |
| 7 | Ohne die F4-Hilfe zu schließen versuchen, das darunterliegende SAP-Fenster anzuklicken und dort eine harmlose Navigation auszuführen. Keine Daten ändern oder speichern. | Bedienbarkeit des darunterliegenden Fensters: Möglich oder Nicht möglich. |
| 8 | Screenshot PT006-01 erstellen und die F4-Hilfe schließen. | Dateiname des Screenshots und verwendete Schließaktion. |
| 9 | Über "Hilfe", "Einstellungen" und "F4-Hilfe" zur alternativen, nicht modalen Einstellung wechseln und die Änderung bestätigen. | Gewählte alternative Einstellung. |
| 10 | Zu derselben Transaktion und demselben Feld zurückkehren und die F4-Hilfe erneut aufrufen. | Art der Darstellung und Titel des geöffneten Fensters. |
| 11 | Erneut prüfen, ob das darunterliegende SAP-Fenster während der geöffneten F4-Hilfe bedient werden kann. Keine Daten ändern oder speichern. | Bedienbarkeit des darunterliegenden Fensters: Möglich oder Nicht möglich. |
| 12 | Screenshot PT006-02 erstellen und beide Darstellungen vergleichen. | Dateiname und festgestellter Unterschied. |

### 5.2 Rücksetzung

| Nr. | Klickanleitung | Zu protokollieren |
|----:|----------------|-------------------|
| 1 | Über "Hilfe", "Einstellungen" und "F4-Hilfe" den in Prüfschritt 3 dokumentierten Ausgangszustand wiederherstellen. | Wiederhergestellter Zustand. |
| 2 | Den Einstellungsdialog erneut öffnen und die Rücksetzung kontrollieren. | Rücksetzung kontrolliert: Ja oder Nein. |
| 3 | Vom SAP-System abmelden und SAP GUI schließen, sofern keine weiteren freigegebenen Tests unmittelbar folgen. | Abmeldezeitpunkt oder Verweis auf den Folgetest. |

---

## 6 Erwartetes Verhalten

Nach der dokumentierten Herstellerinformation wird die Einstellung zur modalen F4-Hilfe über `Hilfe > Einstellungen > F4-Hilfe` direkt in jedem SAP-System festgelegt. Die konkrete Wirkung der beiden Zustände und die Bedienbarkeit des darunterliegenden Fensters sind im Praxistest zu dokumentieren.

---

## 7 Tatsächlich beobachtetes Verhalten

| Prüfzustand | Art der Darstellung | Unterliegendes Fenster bedienbar | Screenshot-ID |
|-------------|---------------------|----------------------------------|---------------|
| Modale F4-Hilfe ausgewählt | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT006-01 |
| Alternative Einstellung ausgewählt | Noch nicht durchgeführt. | Noch nicht durchgeführt. | PT006-02 |

---

## 8 Abweichungen

| Abweichung | Auswirkung auf den Test | Weiteres Vorgehen |
|------------|-------------------------|-------------------|
| Noch nicht durchgeführt. | Noch nicht durchgeführt. | Noch nicht durchgeführt. |

---

## 9 Screenshots

| Screenshot-ID | Beschreibung | Status |
|---------------|--------------|--------|
| PT006-01 | F4-Hilfe am festgelegten Feld bei ausgewählter modaler Darstellung. | Noch nicht erstellt |
| PT006-02 | F4-Hilfe am selben Feld bei ausgewählter alternativer Darstellung. | Noch nicht erstellt |

---

## 10 Bewertung

| Prüffrage | Bewertung |
|-----------|-----------|
| Unterscheidet sich die F4-Hilfe in beiden Zuständen reproduzierbar? | Noch nicht durchgeführt. |
| Ist das Verhalten einer modalen beziehungsweise nicht modalen Darstellung eindeutig zuzuordnen? | Noch nicht durchgeführt. |
| Wurde in beiden Prüfschritten dasselbe Eingabefeld verwendet? | Noch nicht durchgeführt. |
| Wurde der Ausgangszustand wiederhergestellt? | Noch nicht durchgeführt. |

---

## 11 Ergebnis

Noch nicht durchgeführt.

---

## 12 Zugehörige Dokumente

| Dokumenttyp | Referenz |
|-------------|----------|
| Evidenz | ACC-002-E06 |
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
