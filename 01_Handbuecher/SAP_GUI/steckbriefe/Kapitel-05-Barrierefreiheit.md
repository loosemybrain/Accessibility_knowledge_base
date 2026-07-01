# Kapitel-Steckbrief – Kapitel 5: Barrierefreiheit

| Eigenschaft | Wert |
|-------------|------|
| Referenzhandbuch | AKB-200 – SAP GUI for Windows |
| Kapitel | 5 |
| Titel | Barrierefreiheit |
| Status | In Bearbeitung |
| Verantwortlich | |
| Letzte Aktualisierung | 01.07.2026 |
| Version | 0.1 |

---

## 1 Ziel

Beschreibung der barrierefreien Funktionen der SAP GUI for Windows sowie deren Konfiguration und Auswirkungen auf die Nutzung mit assistiven Technologien.

---

## 2 Zielgruppe

- Anwenderinnen und Anwender
- Administratorinnen und Administratoren
- Accessibility-Verantwortliche
- Support

---

## 3 Voraussetzungen

- SAP GUI for Windows installiert
- Unterstützte Produktversion bekannt
- Berechtigung zur Änderung der SAP GUI-Optionen

---

## 4 Kapitelstruktur

| Abschnitt | Bearbeitungsstatus |
|------------|--------------------|
| Überblick | In Bearbeitung |
| Accessibility Mode | Geplant |
| Einstellungen zur Barrierefreiheit | Geplant |
| SAP Screen Reader Extensions | Geplant |
| Unterstützte Screenreader | Geplant |
| Tastaturunterstützung | Geplant |
| Themes und Kontraste | Geplant |
| Bekannte Einschränkungen | Geplant |
| Empfehlungen für das ITZBund | Geplant |
| Praxistests | Geplant |
| Quellen | Geplant |

---

## 5 Forschungsstand – Accessibility Mode

### Bearbeitungsstatus

Recherche in Bearbeitung.

Der Abschnitt wird erst erstellt, wenn sämtliche fachlichen Aussagen durch Primärquellen oder reproduzierbare Praxistests abgesichert wurden.

---

### Durch Praxistests bestätigt

| Aussage | Status | Bemerkung |
|----------|--------|-----------|
| Accessibility Mode kann über die SAP GUI-Optionen aktiviert werden. | Bestätigt | Eigener Praxistest |
| Änderungen werden erst nach einem Neustart von SAP Logon bzw. SAP Logon Pad wirksam. | Bestätigt | Eigener Praxistest |
| Nach der Aktivierung stehen zusätzliche Optionen im Bereich „Barrierefreiheit“ zur Verfügung. | Bestätigt | Eigener Praxistest |
| Die SAP Screen Reader Extensions sind Bestandteil der SAP GUI-Installation. | Bestätigt | Eigener Praxistest |

---

### Noch durch Herstellerdokumentation zu verifizieren

| Fragestellung | Status |
|---------------|--------|
| Welche internen Funktionen werden durch den Accessibility Mode aktiviert? | Offen |
| Welche UI-Elemente ändern ihr Verhalten? | Offen |
| Welche Funktionen stehen ausschließlich im Accessibility Mode zur Verfügung? | Offen |
| Welche Auswirkungen bestehen auf verschiedene Themes? | Offen |
| Welche Aussagen trifft SAP offiziell zur Unterstützung assistiver Technologien? | Offen |

---

### Benötigte Primärquellen

- SAP GUI Administration Guide
- SAP GUI Installation Guide
- SAP Help Portal
- SAP Notes (falls relevant)

---

### Geplante Praxistests

- Vergleich Accessibility Mode aktiviert/deaktiviert
- Vergleich Classic Theme und Quartz Theme
- Vergleich Tastaturbedienung
- Test mit JAWS
- Test mit NVDA
- Test mit Windows Narrator

---

### Offene Entscheidungen

Der Fließtext zu Abschnitt „Accessibility Mode“ wird erst erstellt, nachdem die Herstellerdokumentation ausgewertet und mit den Ergebnissen der Praxistests abgeglichen wurde.

## 6 Evidenzmatrix

| Aussage | Quelle vorhanden | Praxistest vorhanden | Status |
|----------|------------------|----------------------|--------|
| SAP GUI besitzt einen Accessibility Mode | Nein | Nein | Recherche erforderlich |
| Accessibility Mode kann aktiviert bzw. deaktiviert werden | Nein | Nein | Recherche erforderlich |
| Änderungen werden erst nach einem Neustart wirksam | Ja | Ja | Vollständig verifiziert |
| Accessibility Mode aktiviert zusätzliche Einstellungen | Nein | Ja | Durch Praxistest bestätigt |
| Accessibility Mode verbessert die Zusammenarbeit mit Screenreadern | Nein | Nein | Recherche erforderlich |
| Bestimmte Funktionen sind themeabhängig | Nein | Ja | Recherche erforderlich |

---

## 7 Primärquellen

| Quelle | Dokumentversion | Kapitel | Abrufdatum | Status |
|---------|-----------------|----------|------------|--------|
| SAP GUI Administration Guide | | | | Recherche erforderlich |
| SAP GUI Installation Guide | | | | Recherche erforderlich |
| SAP Help Portal | | | | Recherche erforderlich |
| SAP Notes | | | | Recherche erforderlich |

### 7.1 Quellenbasis – Accessibility Mode

#### Primärquellen

| Quelle | Zweck | Status |
|---------|-------|--------|
| SAP GUI Administration Guide | Beschreibung der Administrations- und Konfigurationsmöglichkeiten | Offen |
| SAP GUI Installation Guide | Installation und Voraussetzungen | Offen |
| SAP Help Portal | Offizielle Produktdokumentation | Offen |
| SAP Notes | Dokumentation bekannter Fehler und Einschränkungen | Offen |

#### Sekundärquellen

Derzeit keine.

Sekundärquellen werden nur verwendet, wenn die entsprechende Information nicht durch Primärquellen oder eigene Praxistests belegt werden kann.

#### Eigene Praxistests

Folgende Erkenntnisse wurden bereits reproduzierbar getestet:

- Aktivierung des Accessibility Mode
- Erforderlicher Neustart von SAP Logon
- Sichtbarkeit zusätzlicher Einstellungen
- Vorhandensein der SAP Screen Reader Extensions

Diese Ergebnisse sind vor der Veröffentlichung nochmals gegen die Herstellerdokumentation abzugleichen.

#### Offene Recherchepunkte

- Offizielle Definition des Accessibility Mode
- Auswirkungen auf die Benutzeroberfläche
- Auswirkungen auf unterstützte Eingabemethoden
- Auswirkungen auf assistive Technologien
- Versionsabhängige Unterschiede
- Bekannte Einschränkungen laut SAP

---

## 8 Gesetzliche und normative Grundlagen

| Quelle | Version | Status |
|---------|----------|--------|
| BITV 2.0 | | Recherche erforderlich |
| EN 301 549 | | Recherche erforderlich |
| WCAG 2.2 | | Recherche erforderlich |
| BGG | | Recherche erforderlich |

---

## 9 Geplante Praxistests

### Testumgebung

| Eigenschaft | Wert |
|-------------|------|
| Betriebssystem | |
| SAP GUI Version | |
| Patchlevel | |
| Theme | |
| Screenreader | |
| Weitere Software | |

### Testfälle

| Test | Status |
|------|--------|
| Accessibility Mode | Vorhanden |
| SAP Screen Reader Extensions | Vorhanden |
| Neustart nach Aktivierung | Vorhanden |
| Themes | Offen |
| Tastaturbedienung | Offen |
| Screenreader mit JAWS | Offen |
| Screenreader mit NVDA | Offen |
| Screenreader mit Windows Narrator | Offen |

---

## 10 Benötigte Screenshots

| ID | Kapitel | Beschreibung | Status |
|----|----------|--------------|--------|
| SAP-001 | Barrierefreiheit | Dialog „Barrierefreiheit“ | Vorhanden |
| SAP-002 | Barrierefreiheit | Theme-Auswahl | Vorhanden |
| SAP-003 | Barrierefreiheit | Schriftarten | Offen |
| SAP-004 | Barrierefreiheit | SAP Screen Reader Extensions | Offen |
| SAP-005 | Barrierefreiheit | SAP GUI Scripting | Offen |
| SAP-006 | Barrierefreiheit | Tastaturhilfe | Offen |

---

## 11 Offene Fragestellungen

| Priorität | Fragestellung | Status |
|-----------|---------------|--------|
| Hoch | Welche Funktionen werden ausschließlich durch die SAP Screen Reader Extensions bereitgestellt? | Offen |
| Hoch | Welche Unterschiede bestehen zwischen JAWS, NVDA und Windows Narrator? | Offen |
| Mittel | Welche Einschränkungen bestehen außerhalb des Accessibility Mode? | Offen |
| Mittel | Welche Themes erfüllen die Anforderungen der digitalen Barrierefreiheit am besten? | Offen |
| Niedrig | Welche Einstellungen stehen ausschließlich im Classic Theme zur Verfügung? | Offen |

---

## 12 Veröffentlichungen

### Geplante Confluence-Seiten

- Accessibility Mode
- SAP Screen Reader Extensions
- Themes
- Screenreader
- Tastaturbedienung

### Weitere Veröffentlichungen

- Referenzhandbuch
- Microsoft Word
- PDF

---

## 13 Reviewstatus

| Prüfschritt | Status |
|--------------|--------|
| Steckbrief erstellt | Offen |
| Recherche abgeschlossen | Offen |
| Quellen geprüft | Offen |
| Praxistests abgeschlossen | Offen |
| Screenshots vollständig | Offen |
| Kapitel erstellt | Offen |
| Fachliche Prüfung | Offen |
| Sprachliche Prüfung | Offen |
| Abschlussreview | Offen |
| Veröffentlichung | Offen |