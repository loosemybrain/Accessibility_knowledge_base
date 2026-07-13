# Praxistest – PT-001 Accessibility Mode Aktivierung

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Test-ID | PT-001 |
| Zugehörige Evidenz | ACC-001-E02 |
| Thema | Accessibility Mode – Aktivierung |
| Referenzhandbuch | AKB-200 – SAP GUI for Windows |
| Kapitel | Kapitel 5 – Barrierefreiheit |
| Abschnitt | 5.2 – Accessibility Mode |
| Status | Abgeschlossen |
| Version | 1.0 |
| Letzte Aktualisierung | 01.07.2026 |

---

## 2 Ziel

Prüfung, ob sich der Accessibility Mode entsprechend der Herstellerdokumentation aktivieren lässt.

---

## 3 Testumgebung

| Eigenschaft | Wert |
|-------------|------|
| Testdatum | 09.07.2026 |
| Betriebssystem | Windows 10 |
| SAP GUI Version | 8000.1.15.1161, Build 2285874 |
| Patchlevel | 15 |
| Theme | Quartz |
| Bildschirmauflösung | 1920 × 1040 |
| Screenreader | Nicht verwendet |
| Weitere Software | Keine |

---

## 4 Voraussetzungen

- SAP GUI for Windows ist installiert.
- Zugriff auf die SAP-GUI-Optionen ist vorhanden.
- Änderungen an den SAP-GUI-Einstellungen sind zulässig.

---

## 5 Testschritte

| Nr. | Testschritt | Ergebnis |
|----:|-------------|----------|
| 1 | SAP Logon starten. | Erfolgreich |
| 2 | SAP-GUI-Optionen öffnen. | Erfolgreich |
| 3 | Bereich „Accessibility & Scripting“ öffnen. | Erfolgreich |
| 4 | Option „Use Accessibility Mode“ aktivieren. | Erfolgreich |
| 5 | Einstellungen übernehmen. | Erfolgreich |
| 6 | SAP Logon schließen. | Erfolgreich |
| 7 | SAP Logon erneut starten. | Erfolgreich |

---

## 6 Erwartetes Ergebnis

Die Option Use Accessibility Mode kann aktiviert werden.

Nach dem Neustart von SAP Logon beziehungsweise SAP Logon Pad wird der Accessibility Mode wirksam.

---

## 7 Tatsächliches Ergebnis

### 7.1 Testlauf 1

| Prüfschritt | Ergebnis |
|-------------|----------|
| SAP Logon gestartet | Erfolgreich |
| SAP-GUI-Optionen geöffnet | Erfolgreich |
| Bereich „Accessibility & Scripting“ geöffnet | Erfolgreich |
| Option „Use Accessibility Mode“ gefunden | Erfolgreich |
| Option aktiviert | Erfolgreich |
| Einstellungen übernommen | Erfolgreich |
| SAP Logon beendet | Erfolgreich |
| SAP Logon erneut gestartet | Erfolgreich |

### 7.2 Beobachtung

Die Option Use Accessibility Mode konnte erfolgreich aktiviert werden.

Beim Aktivieren beziehungsweise Deaktivieren wurde ein Hinweisdialog angezeigt. Der Hinweis informiert darüber, dass die Änderung erst nach einem Neustart des SAP Logon Pad wirksam wird.

### 7.3 Bewertung

Der durchgeführte Praxistest bestätigt den in der Herstellerdokumentation beschriebenen Aktivierungsweg.

---

## 8 Abweichungen

Keine Abweichungen dokumentiert.

---

## 9 Screenshots

| Screenshot-ID | Beschreibung | Status |
|---------------|--------------|--------|
| SAP-001 | Dialog „Accessibility & Scripting“ | Vorhanden |
| SAP-002 | Aktivierter Accessibility Mode | Nicht erforderlich |

---

## 10 Bewertung

Der Praxistest bestätigt den in der Herstellerdokumentation beschriebenen Aktivierungsweg vollständig.

Folgende Punkte konnten reproduzierbar nachvollzogen werden:

- Menüpfad vorhanden
- Option Use Accessibility Mode vorhanden
- Aktivierung möglich
- Hinweisdialog erscheint
- Neustart von SAP Logon Pad erforderlich

Zwischen Herstellerdokumentation und Praxistest wurden keine Abweichungen festgestellt.

---

## 11 Zugehörige Dokumente

| Dokumenttyp | Referenz |
|-------------|----------|
| Evidenz | ACC-001-E02 |
| Kapitel | Kapitel 5.2 – Accessibility Mode |
| Referenzhandbuch | AKB-200 – SAP GUI for Windows |

---

## 12 Freigabe

| Prüfschritt | Status |
|-------------|--------|
| Test durchgeführt | Ja |
| Ergebnis dokumentiert | Ja |
| Screenshots geprüft | Ja |
| Fachliche Bewertung abgeschlossen | Ja |
| Freigabe erfolgt | Ja |
