# Praxistest - PT-002 Einstellungen zur Barrierefreiheit

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Test-ID | PT-002 |
| Zugehörige Evidenz | ACC-002-E02 |
| Thema | Use Accessibility Mode |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Kapitel | Kapitel 5 - Barrierefreiheit |
| Abschnitt | 5.3 - Einstellungen zur Barrierefreiheit |
| Status | Abgeschlossen |
| Version | 1.0 |
| Letzte Aktualisierung | 13.07.2026 |

---

## 2 Ziel

Prüfung der Einstellung Use Accessibility Mode im Bereich der Einstellungen zur Barrierefreiheit.

Fragestellung:

Welche Funktion besitzt die Einstellung Use Accessibility Mode?

Testziele:

- Position der Einstellung prüfen.
- Bezeichnung prüfen.
- Aktivierung prüfen.
- Auswirkungen dokumentieren.
- Hinweisdialog dokumentieren.
- Neustartverhalten dokumentieren.
- Abweichungen zur Herstellerdokumentation dokumentieren.

---

## 3 Testumgebung

| Eigenschaft | Wert |
|-------------|------|
| Testdatum | 13.07.2026 |
| Betriebssystem | Microsoft Windows 11 Home |
| SAP GUI Version | 8000.1.15.1161, 800 Final Release - 64bit |
| Patchlevel | 15 |
| Theme | Quartz |
| Bildschirmauflösung | 3440 × 1440 |
| Arbeitsbereich | 3440 × 1392 |
| Screenreader | Nicht verwendet |
| Weitere Software | Windows UI Automation zur Teststeuerung und Zustandsprüfung |

---

## 4 Voraussetzungen

- SAP GUI for Windows ist installiert.
- SAP Logon kann gestartet werden.
- Zugriff auf die SAP-GUI-Optionen ist vorhanden.
- Änderungen an den SAP-GUI-Einstellungen sind zulässig.
- Der ursprüngliche Zustand der Einstellung wird nach dem Test wiederhergestellt.

---

## 5 Testschritte

| Nr. | Testschritt | Ergebnis |
|----:|-------------|----------|
| 1 | SAP Logon starten. | Erfolgreich durchgeführt. |
| 2 | SAP-GUI-Optionen öffnen. | Erfolgreich durchgeführt. |
| 3 | Position der Einstellung Use Accessibility Mode prüfen. | Unter `Accessibility & Scripting` auf der Seite `Accessibility` gefunden. |
| 4 | Bezeichnung der Einstellung Use Accessibility Mode prüfen. | In der deutschen Oberfläche als `Barrierefreiheitsmodus verwenden` angezeigt. |
| 5 | Einstellung Use Accessibility Mode aktivieren. | Deaktivierung und erneute Aktivierung erfolgreich durchgeführt. |
| 6 | Auswirkungen der Aktivierung dokumentieren. | Abhängige Accessibility-Optionen werden bei Aktivierung auswählbar und bei Deaktivierung gesperrt. |
| 7 | Hinweisdialog dokumentieren. | Kein separater Hinweisdialog erschienen; der Neustarthinweis wird dauerhaft auf der Seite angezeigt. |
| 8 | SAP Logon beziehungsweise SAP Logon Pad neu starten. | Nach Deaktivierung und nach erneuter Aktivierung erfolgreich durchgeführt. |
| 9 | Neustartverhalten dokumentieren. | Der jeweils gewählte Zustand blieb nach dem Neustart erhalten. |
| 10 | Abweichungen zur Herstellerdokumentation dokumentieren. | Keine Abweichung beim dokumentierten Funktions- und Neustartverhalten festgestellt. |

---

## 6 Erwartetes Ergebnis

Die Option `Use Accessibility Mode` ist auf der Seite `Accessibility` vorhanden und kann aktiviert oder deaktiviert werden.

Bei aktiviertem Accessibility Mode sind die abhängigen Accessibility-Optionen auswählbar. Eine Änderung wird nach einem Neustart von SAP Logon beziehungsweise SAP Logon Pad wirksam und bleibt nach dem Neustart erhalten.

---

## 7 Tatsächliches Ergebnis

### 7.1 Ausgangszustand

Der Accessibility Mode war aktiviert. Die abhängigen Optionen zur Tabulatorreihenfolge und zur Anzeige von Listensymbolen waren ebenfalls aktiviert und auswählbar.

### 7.2 Deaktivierung

Der Accessibility Mode konnte deaktiviert und die Änderung übernommen werden. Danach waren die abhängigen Optionen nicht mehr auswählbar. Der Konfigurationswert `AccMode` besaß den Wert `off`.

Nach dem Neustart von SAP Logon blieb der Accessibility Mode deaktiviert. Die abhängigen Optionen waren weiterhin nicht auswählbar.

### 7.3 Aktivierung

Der Accessibility Mode konnte erneut aktiviert und die Änderung übernommen werden. Die abhängigen Optionen waren anschließend wieder auswählbar. Der Konfigurationswert `AccMode` besaß den Wert `on`.

Nach einem weiteren Neustart blieb der Accessibility Mode aktiviert. Damit war der ursprüngliche Zustand wiederhergestellt.

### 7.4 Neustarthinweis

Auf der Seite `Accessibility` wurde dauerhaft darauf hingewiesen, dass die Aktivierung oder Deaktivierung des Barrierefreiheitsmodus erst nach einem Neustart von SAP Logon beziehungsweise SAP Logon Pad wirksam wird.

Beim Anwenden der Änderungen erschien kein separater Hinweisdialog.

---

## 8 Abweichungen

Keine Abweichung vom dokumentierten Funktions- und Neustartverhalten festgestellt.

Abweichend von der in PT-001 dokumentierten Beobachtung erschien in dieser Testumgebung kein separater Hinweisdialog. Der Neustarthinweis war stattdessen dauerhaft auf der Seite `Accessibility` sichtbar.

---

## 9 Screenshots

| Screenshot-ID | Beschreibung | Status |
|---------------|--------------|--------|
| SAP-001 | Seite `Accessibility` mit aktiviertem Accessibility Mode; Datei `sap_logon_optionen.PNG` | Vorhanden und geprüft |

---

## 10 Bewertung

Die Position, Bezeichnung und Umschaltbarkeit der Einstellung wurden bestätigt.

Die abhängigen Accessibility-Optionen reagieren auf die Aktivierung und Deaktivierung des Accessibility Mode. Der jeweilige Zustand bleibt nach dem Neustart erhalten.

Der ursprüngliche aktivierte Zustand wurde nach Abschluss des Tests wiederhergestellt.

---

## 11 Zugehörige Dokumente

| Dokumenttyp | Referenz |
|-------------|----------|
| Evidenz | ACC-002-E02 |
| Recherche | ACC-002 |
| Kapitel | Kapitel 5.3 - Einstellungen zur Barrierefreiheit |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |

---

## 12 Freigabe

| Prüfschritt | Status |
|-------------|--------|
| Test durchgeführt | Ja |
| Ergebnis dokumentiert | Ja |
| Screenshots geprüft | Ja |
| Fachliche Bewertung abgeschlossen | Ja |
| Freigabe erfolgt | Ja |
