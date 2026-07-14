# Kapitel-Steckbrief – Kapitel 5: Barrierefreiheit

## 1 Allgemeine Informationen

### 1.1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Referenzhandbuch | AKB-200 – SAP GUI for Windows |
| Kapitel | 5 |
| Titel | Barrierefreiheit |
| Status | Abgeschlossen |
| Verantwortlich | |
| Letzte Aktualisierung | 13.07.2026 |
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
| Überblick | Abgeschlossen |
| Accessibility Mode | Abgeschlossen |
| Einstellungen zur Barrierefreiheit | Abgeschlossen |
| SAP Screen Reader Extensions | Nicht Bestandteil von Kapitel 5 |
| Unterstützte Screenreader | Nicht Bestandteil von Kapitel 5 |
| Tastaturunterstützung | Nicht Bestandteil von Kapitel 5 |
| Themes und Kontraste | Nicht Bestandteil von Kapitel 5 |
| Bekannte Einschränkungen | Nicht Bestandteil von Kapitel 5 |
| Empfehlungen für das ITZBund | Nicht Bestandteil von Kapitel 5 |
| Praxistests | In Evidenzstatus dokumentiert |
| Quellen | In Recherchedateien dokumentiert |

---

## 3 Recherche

### 3.1 Forschungsstand – Accessibility Mode

#### 3.1.1 Bearbeitungsstatus

Recherche für den veröffentlichten Abschnitt 5.2 abgeschlossen.

Die übernommenen fachlichen Aussagen sind durch ACC-001 dokumentiert.

#### 3.1.2 Durch Praxistests bestätigt

| Aussage | Status | Bemerkung |
|----------|--------|-----------|
| SAP GUI for Windows verfügt über einen Accessibility Mode zur Unterstützung barrierefreier Nutzung. | Verifiziert | ACC-001-E01 |
| Accessibility Mode kann über die SAP-GUI-Optionen aktiviert werden. | Verifiziert | ACC-001-E02, PT-001 |
| Änderungen werden erst nach einem Neustart von SAP Logon beziehungsweise SAP Logon Pad wirksam. | Verifiziert | ACC-001-E03, PT-001 |

#### 3.1.3 Nicht Bestandteil des freigegebenen Abschnitts 5.2

| Fragestellung | Status |
|---------------|--------|
| Welche internen Funktionen werden durch den Accessibility Mode aktiviert? | Nicht in Abschnitt 5.2 übernommen |
| Welche UI-Elemente ändern ihr Verhalten? | Nicht in Abschnitt 5.2 übernommen |
| Welche Funktionen stehen ausschließlich im Accessibility Mode zur Verfügung? | Nicht in Abschnitt 5.2 übernommen |
| Welche Auswirkungen bestehen auf verschiedene Themes? | Nicht in Abschnitt 5.2 übernommen |
| Welche Aussagen trifft SAP offiziell zur Unterstützung assistiver Technologien? | Nicht in Abschnitt 5.2 übernommen |

#### 3.1.4 Praxistests

| Test-ID | Thema | Status |
|---------|-------|--------|
| PT-001 | Accessibility Mode – Aktivierung | Abgeschlossen |

#### 3.1.5 Entscheidung

Abschnitt 5.2 ist für das Referenzhandbuch freigegeben.

---

### 3.2 Evidenzmatrix

| Aussage | Quelle vorhanden | Praxistest vorhanden | Status |
|----------|------------------|----------------------|--------|
| SAP GUI besitzt einen Accessibility Mode | Ja | Nicht erforderlich | Verifiziert |
| Accessibility Mode kann aktiviert bzw. deaktiviert werden | Ja | Ja | Verifiziert |
| Änderungen werden erst nach einem Neustart wirksam | Ja | Ja | Verifiziert |
| `Use Accessibility Mode` aktiviert weitere Optionen auf der Accessibility-Seite | Ja | Ja | Verifiziert |
| `Include read-only and disabled elements in tab chain` verändert die Tabulatornavigation | Ja | Ja | Verifiziert |
| Weitere dokumentierte Accessibility-Einstellungen | Ja | Nein | In Bearbeitung |

---

### 3.3 Rechercheprotokoll

#### 3.3.1 Ziel der Recherche

Ermittlung belastbarer Herstellerinformationen zum Accessibility Mode der SAP GUI for Windows.

#### 3.3.2 Recherchefragen

| Nr. | Fragestellung | Status |
|-----|---------------|--------|
| R-001 | Wie definiert SAP den Accessibility Mode? | Abgeschlossen |
| R-002 | Wie wird der Accessibility Mode aktiviert? | Abgeschlossen |
| R-003 | Ab wann werden Änderungen wirksam? | Abgeschlossen |
| R-004 | Welche Funktionen werden aktiviert oder verändert? | Nicht Bestandteil des freigegebenen Abschnitts 5.2 |
| R-005 | Welche assistiven Technologien werden offiziell unterstützt? | Nicht Bestandteil des freigegebenen Abschnitts 5.2 |
| R-006 | Welche bekannten Einschränkungen dokumentiert SAP? | Nicht Bestandteil des freigegebenen Abschnitts 5.2 |

#### 3.3.3 Suchstrategie

Die Recherche erfolgt ausschließlich anhand folgender Quellenarten:

1. SAP Help Portal
2. SAP GUI Administration Guide
3. SAP GUI Installation Guide
4. SAP Notes (bei Bedarf)
5. Eigene reproduzierbare Praxistests

Sekundärquellen werden nur verwendet, wenn Primärquellen keine ausreichenden Informationen enthalten.

#### 3.3.4 Rechercheergebnisse

Die für Kapitel 5 übernommenen Aussagen sind in ACC-001 und ACC-002 dokumentiert.

#### 3.3.5 Offene Punkte

Keine offenen Punkte für die in Kapitel 5 übernommenen verifizierten Aussagen.

---

### 3.4 Themenpaket 5.3 - Einstellungen zur Barrierefreiheit

| Eigenschaft | Wert |
|-------------|------|
| Abschnitt | 5.3 Einstellungen zur Barrierefreiheit |
| Recherche | ACC-002 |
| Praxistests | PT-002 bis PT-007 |
| Bearbeitungsstatus | Abgeschlossen mit ausgewiesenem Evidenzstatus |

### 3.5 Evidenzstatus Abschnitt 5.3

| Evidenz | Thema | Praxistest | Status |
|---------|-------|------------|--------|
| ACC-002-E01 | Bestandsaufnahme der Accessibility-Einstellungen | Nicht erforderlich | In Vorbereitung |
| ACC-002-E02 | Use Accessibility Mode | PT-002 abgeschlossen | Verifiziert |
| ACC-002-E03 | Include read-only and disabled elements in tab chain | PT-003 abgeschlossen | Verifiziert |
| ACC-002-E04 | Display symbols in lists as letters | PT-004 blockiert | In Bearbeitung |
| ACC-002-E05 | Dialog box for messages | PT-005 blockiert | In Bearbeitung |
| ACC-002-E06 | Set F4 help to modal dialog | PT-006 blockiert | In Bearbeitung |
| ACC-002-E07 | Open Office documents outplace for better screen reader support | PT-007 blockiert | In Bearbeitung |

---

## 4 Quellen

### 4.1 Primärquellen

| Quelle | Dokumentversion | Kapitel | Abrufdatum | Status |
|---------|-----------------|----------|------------|--------|
| SAP Help Portal | SAP Help Portal | Accessibility in SAP GUI for Windows | 01.07.2026 | Ausgewertet für ACC-001 |
| SAP GUI Administration | 8.00 PL08 | Accessibility Page | 02.07.2026 und 03.07.2026 | Teilweise ausgewertet für ACC-002 |
| SAP GUI for Windows | 8.00 PL08 | Accessibility | 03.07.2026 | Teilweise ausgewertet für ACC-002 |
| SAP Notes | | | | Nicht verwendet |

---

### 4.2 Quellenbasis – Accessibility Mode

#### 4.2.1 Primärquellen

| Quelle | Zweck | Status |
|---------|-------|--------|
| SAP Help Portal | Offizielle Produktdokumentation zum Accessibility Mode | Ausgewertet |
| SAP GUI Administration | Beschreibung der Administrations- und Konfigurationsmöglichkeiten | Teilweise ausgewertet |
| SAP GUI for Windows | Produktdokumentation zu Accessibility-Einstellungen | Teilweise ausgewertet |
| SAP Notes | Dokumentation bekannter Fehler und Einschränkungen | Nicht verwendet |

#### 4.2.2 Sekundärquellen

Derzeit keine.

#### 4.2.3 Eigene Praxistests

- PT-001 Accessibility Mode – Aktivierung
- PT-003 Include read-only and disabled elements in tab chain

#### 4.2.4 Offene Recherchepunkte

Keine offenen Recherchepunkte für die in Kapitel 5 als verifiziert gekennzeichneten Aussagen.

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
| PT-001 Accessibility Mode – Aktivierung | Abgeschlossen |
| PT-002 Use Accessibility Mode | Abgeschlossen |
| PT-003 Include read-only and disabled elements in tab chain | Abgeschlossen |
| PT-004 Display symbols in lists as letters | Blockiert |
| PT-005 Dialog box for messages | Blockiert |
| PT-006 Set F4 help to modal dialog | Blockiert |
| PT-007 Weitere Accessibility-Einstellungen | Blockiert |

---

## 6 Bilddokumentation

### 6.1 Benötigte Screenshots

| ID | Kapitel | Beschreibung | Status |
|----|----------|--------------|--------|
| Abbildung 5-1 | Barrierefreiheit | Accessibility-Einstellungen in den SAP-GUI-Optionen | Referenziert |
| Abbildung 5-2 | Barrierefreiheit | SAP Logon als Ausgangspunkt für die SAP-GUI-Optionen | Referenziert |

---

## 7 Abschlussstand

### 7.1 Offene Punkte

| Punkt | Status |
|-------|--------|
| Offene Punkte für verifizierte Aussagen in Kapitel 5 | Keine |
| Nicht verifizierte Aussagen in Abschnitt 5.3 | Im Kapitel mit Evidenzstatus `In Bearbeitung` gekennzeichnet |

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
| Steckbrief erstellt | Ja |
| Recherche für übernommene verifizierte Aussagen abgeschlossen | Ja |
| Quellen für übernommene Aussagen geprüft | Ja |
| Praxistests für verifizierte Aussagen abgeschlossen | Ja |
| Abbildungsverweise vorbereitet | Ja |
| Kapitel erstellt | Ja |
| Fachliche Prüfung | Ja |
| Sprachliche Prüfung | Ja |
| Abschlussreview | Ja |
| Veröffentlichung | Bereit |

### 9.1 Topic-Review ACC-002

| Eigenschaft | Wert |
|-------------|------|
| Task | K-TASK-0050 |
| Reviewdatum | 14.07.2026 |
| Reviewstatus | Nicht freigabefähig |
| `npm run akb -- doctor` | Erfolgreich |
| `npm run akb -- validate` | Erfolgreich |
| `npm run akb -- topic review ACC-002` | Nicht erfolgreich |

### 9.2 Offene Punkte aus K-TASK-0050

| Nr. | Bereich | Offener Punkt | Status |
|----:|---------|---------------|--------|
| 1 | ACC-002-E01 | Die Herstellerrecherche ist abgeschlossen; fachliche Prüfung und Freigabe der Evidenz stehen noch aus. | Offen |
| 2 | ACC-002-E04 und PT-004 | Evidenz und Praxistest sind nicht abgeschlossen; die dokumentierte Blockierungsbegründung entspricht nicht der in PT-002 dokumentierten Verfügbarkeit einer SAP-GUI-Testumgebung. | Offen |
| 3 | ACC-002-E05 und PT-005 | Evidenz und Praxistest sind nicht abgeschlossen; die dokumentierte Blockierungsbegründung entspricht nicht der in PT-002 dokumentierten Verfügbarkeit einer SAP-GUI-Testumgebung. | Offen |
| 4 | ACC-002-E06 und PT-006 | Evidenz und Praxistest sind nicht abgeschlossen; die dokumentierte Blockierungsbegründung entspricht nicht der in PT-002 dokumentierten Verfügbarkeit einer SAP-GUI-Testumgebung. | Offen |
| 5 | ACC-002-E07 und PT-007 | Evidenz und Praxistest sind nicht abgeschlossen; die dokumentierte Blockierungsbegründung entspricht nicht der in PT-002 dokumentierten Verfügbarkeit einer SAP-GUI-Testumgebung. | Offen |
| 6 | Bilddokumentation | Abbildung 5-2 wird im Steckbrief als `Referenziert` geführt, ist im geprüften Kapitel jedoch nicht referenziert. | Offen |
| 7 | Topic Lifecycle | Das CLI-Review meldet die Kriterien `Evidenzen verifiziert und freigegeben` und `Praxistests abgeschlossen und freigegeben` als nicht erfüllt. | Offen |

Der Abgleich zwischen ACC-002-E02 und PT-002 sowie die Freigabe von ACC-002-E02 wurden abgeschlossen. Für ACC-002-E01 wurde festgelegt, dass die Evidenz ausschließlich durch Herstellerquellen abgesichert wird. Die übrigen offenen Punkte wurden nicht fachlich bearbeitet.
