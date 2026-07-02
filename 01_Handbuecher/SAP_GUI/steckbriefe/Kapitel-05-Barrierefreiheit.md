# Kapitel-Steckbrief – Kapitel 5: Barrierefreiheit

## 1 Allgemeine Informationen

### 1.1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Referenzhandbuch | AKB-200 – SAP GUI for Windows |
| Kapitel | 5 |
| Titel | Barrierefreiheit |
| Status | In Bearbeitung |
| Verantwortlich | |
| Letzte Aktualisierung | 01.07.2026 |
| Version | 1.0 |

---

## 2 Kapitelplanung

### 2.1 Ziel

Beschreibung der barrierefreien Funktionen der SAP GUI for Windows sowie deren Konfiguration und Auswirkungen auf die Nutzung mit assistiven Technologien.

### 2.2 Zielgruppe

- Anwenderinnen und Anwender
- Administratorinnen und Administratoren
- Accessibility-Verantwortliche
- Support

### 2.3 Voraussetzungen

- SAP GUI for Windows installiert
- Unterstützte Produktversion bekannt
- Berechtigung zur Änderung der SAP GUI-Optionen

### 2.4 Kapitelstruktur

| Abschnitt | Bearbeitungsstatus |
|------------|--------------------|
| Überblick | In Bearbeitung |
| Accessibility Mode | Geplant |
| Einstellungen zur Barrierefreiheit | Vorbereitung abgeschlossen |
| SAP Screen Reader Extensions | Geplant |
| Unterstützte Screenreader | Geplant |
| Tastaturunterstützung | Geplant |
| Themes und Kontraste | Geplant |
| Bekannte Einschränkungen | Geplant |
| Empfehlungen für das ITZBund | Geplant |
| Praxistests | Geplant |
| Quellen | Geplant |

---

## 3 Recherche

### 3.1 Forschungsstand – Accessibility Mode

#### 3.1.1 Bearbeitungsstatus

Recherche in Bearbeitung.

Der Abschnitt wird erst erstellt, wenn sämtliche fachlichen Aussagen durch Primärquellen oder reproduzierbare Praxistests abgesichert wurden.

#### 3.1.2 Durch Praxistests bestätigt

| Aussage | Status | Bemerkung |
|----------|--------|-----------|
| Accessibility Mode kann über die SAP GUI-Optionen aktiviert werden. | Bestätigt | Eigener Praxistest |
| Änderungen werden erst nach einem Neustart von SAP Logon bzw. SAP Logon Pad wirksam. | Bestätigt | Eigener Praxistest |
| Nach der Aktivierung stehen zusätzliche Optionen im Bereich „Barrierefreiheit“ zur Verfügung. | Bestätigt | Eigener Praxistest |
| Die SAP Screen Reader Extensions sind Bestandteil der SAP GUI-Installation. | Bestätigt | Eigener Praxistest |

#### 3.1.3 Noch durch Herstellerdokumentation zu verifizieren

| Fragestellung | Status |
|---------------|--------|
| Welche internen Funktionen werden durch den Accessibility Mode aktiviert? | Offen |
| Welche UI-Elemente ändern ihr Verhalten? | Offen |
| Welche Funktionen stehen ausschließlich im Accessibility Mode zur Verfügung? | Offen |
| Welche Auswirkungen bestehen auf verschiedene Themes? | Offen |
| Welche Aussagen trifft SAP offiziell zur Unterstützung assistiver Technologien? | Offen |

#### 3.1.4 Geplante Praxistests

- Vergleich Accessibility Mode aktiviert/deaktiviert
- Vergleich Classic Theme und Quartz Theme
- Vergleich Tastaturbedienung
- Test mit JAWS
- Test mit NVDA
- Test mit Windows Narrator

#### 3.1.5 Offene Entscheidungen

Der Fließtext zu Abschnitt „Accessibility Mode“ wird erst erstellt, nachdem die Herstellerdokumentation ausgewertet und mit den Ergebnissen der Praxistests abgeglichen wurde.

---

### 3.2 Evidenzmatrix

| Aussage | Quelle vorhanden | Praxistest vorhanden | Status |
|----------|------------------|----------------------|--------|
| SAP GUI besitzt einen Accessibility Mode | Nein | Nein | Recherche erforderlich |
| Accessibility Mode kann aktiviert bzw. deaktiviert werden | Nein | Nein | Recherche erforderlich |
| Änderungen werden erst nach einem Neustart wirksam | Ja | Ja | Vollständig verifiziert |
| Accessibility Mode aktiviert zusätzliche Einstellungen | Nein | Ja | Durch Praxistest bestätigt |
| Accessibility Mode verbessert die Zusammenarbeit mit Screenreadern | Nein | Nein | Recherche erforderlich |
| Bestimmte Funktionen sind themeabhängig | Nein | Ja | Recherche erforderlich |

---

### 3.3 Rechercheprotokoll

#### 3.3.1 Ziel der Recherche

Ermittlung belastbarer Herstellerinformationen zum Accessibility Mode der SAP GUI for Windows.

#### 3.3.2 Recherchefragen

| Nr. | Fragestellung | Status |
|-----|---------------|--------|
| R-001 | Wie definiert SAP den Accessibility Mode? | Offen |
| R-002 | Wie wird der Accessibility Mode aktiviert? | Offen |
| R-003 | Ab wann werden Änderungen wirksam? | Offen |
| R-004 | Welche Funktionen werden aktiviert oder verändert? | Offen |
| R-005 | Welche assistiven Technologien werden offiziell unterstützt? | Offen |
| R-006 | Welche bekannten Einschränkungen dokumentiert SAP? | Offen |

#### 3.3.3 Suchstrategie

Die Recherche erfolgt ausschließlich anhand folgender Quellenarten:

1. SAP Help Portal
2. SAP GUI Administration Guide
3. SAP GUI Installation Guide
4. SAP Notes (bei Bedarf)
5. Eigene reproduzierbare Praxistests

Sekundärquellen werden nur verwendet, wenn Primärquellen keine ausreichenden Informationen enthalten.

#### 3.3.4 Rechercheergebnisse

Noch keine Einträge vorhanden.

#### 3.3.5 Offene Punkte

Alle Recherchefragen sind noch zu bearbeiten.

---

### 3.4 Themenpaket 5.3 - Einstellungen zur Barrierefreiheit

| Eigenschaft | Wert |
|-------------|------|
| Abschnitt | 5.3 Einstellungen zur Barrierefreiheit |
| Recherche | ACC-002 |
| Praxistest | PT-002 |
| Bearbeitungsstatus | Vorbereitung abgeschlossen |

---

## 4 Quellen

### 4.1 Primärquellen

| Quelle | Dokumentversion | Kapitel | Abrufdatum | Status |
|---------|-----------------|----------|------------|--------|
| SAP GUI Administration Guide | | | | Recherche erforderlich |
| SAP GUI Installation Guide | | | | Recherche erforderlich |
| SAP Help Portal | | | | Recherche erforderlich |
| SAP Notes | | | | Recherche erforderlich |

---

### 4.2 Quellenbasis – Accessibility Mode

#### 4.2.1 Primärquellen

| Quelle | Zweck | Status |
|---------|-------|--------|
| SAP GUI Administration Guide | Beschreibung der Administrations- und Konfigurationsmöglichkeiten | Offen |
| SAP GUI Installation Guide | Installation und Voraussetzungen | Offen |
| SAP Help Portal | Offizielle Produktdokumentation | Offen |
| SAP Notes | Dokumentation bekannter Fehler und Einschränkungen | Offen |

#### 4.2.2 Sekundärquellen

Derzeit keine.

#### 4.2.3 Eigene Praxistests

- Aktivierung des Accessibility Mode
- Neustart nach Aktivierung
- Zusätzliche Einstellungen
- SAP Screen Reader Extensions

#### 4.2.4 Offene Recherchepunkte

- Offizielle Definition des Accessibility Mode
- Auswirkungen auf die Benutzeroberfläche
- Auswirkungen auf unterstützte Eingabemethoden
- Auswirkungen auf assistive Technologien
- Versionsabhängige Unterschiede
- Bekannte Einschränkungen laut SAP

---

## 5 Praxistests

### 5.1 Testumgebung

| Eigenschaft | Wert |
|-------------|------|
| Betriebssystem | |
| SAP GUI Version | |
| Patchlevel | |
| Theme | |
| Screenreader | |
| Weitere Software | |

---

### 5.2 Testfälle

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

## 6 Bilddokumentation

### 6.1 Benötigte Screenshots

| ID | Kapitel | Beschreibung | Status |
|----|----------|--------------|--------|
| SAP-001 | Barrierefreiheit | Dialog „Barrierefreiheit“ | Vorhanden |
| SAP-002 | Barrierefreiheit | Theme-Auswahl | Vorhanden |
| SAP-003 | Barrierefreiheit | Schriftarten | Offen |
| SAP-004 | Barrierefreiheit | SAP Screen Reader Extensions | Offen |
| SAP-005 | Barrierefreiheit | SAP GUI Scripting | Offen |
| SAP-006 | Barrierefreiheit | Tastaturhilfe | Offen |

---

## 7 Offene Punkte

### 7.1 Offene Fragestellungen

| Priorität | Fragestellung | Status |
|-----------|---------------|--------|
| Hoch | Welche Funktionen werden ausschließlich durch die SAP Screen Reader Extensions bereitgestellt? | Offen |
| Hoch | Welche Unterschiede bestehen zwischen JAWS, NVDA und Windows Narrator? | Offen |
| Mittel | Welche Einschränkungen bestehen außerhalb des Accessibility Mode? | Offen |
| Mittel | Welche Themes erfüllen die Anforderungen der digitalen Barrierefreiheit am besten? | Offen |
| Niedrig | Welche Einstellungen stehen ausschließlich im Classic Theme zur Verfügung? | Offen |

---

## 8 Veröffentlichungen

### 8.1 Geplante Confluence-Seiten

- Accessibility Mode
- SAP Screen Reader Extensions
- Themes
- Screenreader
- Tastaturbedienung

### 8.2 Weitere Veröffentlichungen

- Referenzhandbuch
- Microsoft Word
- PDF

---

## 9 Reviewstatus

| Prüfschritt | Status |
|-------------|--------|
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
