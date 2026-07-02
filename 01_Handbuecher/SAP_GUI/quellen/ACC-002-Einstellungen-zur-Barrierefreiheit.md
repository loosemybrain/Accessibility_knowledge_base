# Recherche - ACC-002 Einstellungen zur Barrierefreiheit

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Recherche-ID | ACC-002 |
| Thema | Einstellungen zur Barrierefreiheit |
| Referenzhandbuch | AKB-200 - SAP GUI for Windows |
| Zugehöriges Kapitel | Kapitel 5 - Barrierefreiheit |
| Abschnitt | 5.3 - Einstellungen zur Barrierefreiheit |
| Status | In Bearbeitung |
| Version | 2.0 |
| Letzte Aktualisierung | 02.07.2026 |

---

## 2 Bearbeitungsstatus

| Prüfschritt | Status |
|-------------|--------|
| Recherchedatei erstellt | Ja |
| Evidenz angelegt | Ja |
| Primärquellen identifiziert | Ja |
| Primärquellen ausgewertet | Teilweise |
| Praxistests durchgeführt | Nein |
| Vergleich abgeschlossen | Nein |
| Fachliche Bewertung abgeschlossen | Nein |
| Freigabe erfolgt | Nein |

---

## 3 Evidenz

### 3.1 Evidenz ACC-002-E01

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E01 |
| Status | In Vorbereitung |
| Herstellerquelle | Noch nicht recherchiert. |
| Praxistest | Vorgesehen |
| Referenzhandbuch | Nicht freigegeben |

---

#### Fragestellung

Welche Einstellungen stellt SAP im Bereich „Accessibility“ zur Verfügung?

#### Ziel

Ermittlung und Dokumentation der von SAP offiziell beschriebenen Einstellungen im Bereich „Accessibility“ der SAP GUI for Windows.

---

#### Rechercheumfang

| Quelle | Verwendung | Status |
|--------|------------|--------|
| SAP Help Portal | Primärquelle | Recherche noch nicht durchgeführt. |
| SAP GUI Administration Guide | Primärquelle | Recherche noch nicht durchgeführt. |
| SAP GUI Installation Guide | Primärquelle, falls relevant | Recherche noch nicht durchgeführt. |
| SAP Notes | Primärquelle, falls erforderlich | Recherche noch nicht durchgeführt. |
| Sekundärquellen | Nicht verwendet | Nicht vorgesehen |

---

#### Dokumentierte Herstellerinformation

Recherche noch nicht durchgeführt.

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | Recherche noch nicht durchgeführt. |
| Produkt | Recherche noch nicht durchgeführt. |
| Dokumentversion | Recherche noch nicht durchgeführt. |
| Kapitel | Recherche noch nicht durchgeführt. |
| Abschnitt | Recherche noch nicht durchgeführt. |
| URL | Recherche noch nicht durchgeführt. |
| Abrufdatum | Recherche noch nicht durchgeführt. |

---

#### Eigene Praxistests

Praxistest PT-002 vorgesehen.

Testergebnisse liegen noch nicht vor.

---

#### Interpretation

Recherche noch nicht durchgeführt.

---

#### Fachliche Bewertung

Recherche noch nicht durchgeführt.

---

#### Ergebnis

Recherche noch nicht durchgeführt.

---

### 3.2 Evidenz ACC-002-E02

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E02 |
| Status | In Bearbeitung |
| Herstellerquelle | Ja |
| Praxistest | Vorgesehen |
| Referenzhandbuch | Nicht freigegeben |

---

#### Fragestellung

Welche Funktion beschreibt SAP für die Einstellung "Use Accessibility Mode"?

#### Ziel

Ermittlung und Dokumentation der von SAP offiziell beschriebenen Funktion der Einstellung "Use Accessibility Mode" im Bereich "Accessibility" der SAP GUI for Windows.

---

#### Dokumentierte Herstellerinformation

SAP dokumentiert die Einstellung "Use accessibility mode" auf der Seite "Accessibility Page" im Abschnitt "Registry Values".

SAP dokumentiert, dass diese Option aktiviert sein muss, damit die anderen Optionen auf dieser Seite aktiviert werden können.

Technische Dokumentation:

SAP ordnet die Einstellung dem Registrierungspfad `[HKEY_CURRENT_USER\Software\SAP\General]` zu.

Der zugehörige Registrierungswert lautet `AccMode (REG_SZ)`.

SAP dokumentiert den Standardwert `Off`.

SAP dokumentiert folgende Wertbedeutungen:

| Wert | Bedeutung |
|------|-----------|
| Off | inactive |
| On | active |

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI Administration |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Accessibility Page |
| Abschnitt | Registry Values; Use accessibility mode |
| URL | https://help.sap.com/docs/sap_gui_for_windows/dfad9ecd79db404eba46fdd709013a78/2e1cf2b8e1734a2b94b180206742a3a1.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 02.07.2026 |

---

#### Eigene Praxistests

PT-002 vorgesehen.

Testergebnisse liegen noch nicht vor.

---

#### Interpretation

Erfolgt nach Abschluss des Praxistests.

---

#### Fachliche Bewertung

Erfolgt nach Vergleich zwischen Herstellerdokumentation und Praxistest.

---

#### Ergebnis

Die Evidenz befindet sich in Bearbeitung.

---

### 3.3 Evidenz ACC-002-E03

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E03 |
| Status | In Bearbeitung |
| Herstellerquelle | Ja |
| Praxistest | Vorgesehen |
| Referenzhandbuch | Nicht freigegeben |

---

#### Fragestellung

Welche Funktion beschreibt SAP für die Einstellung "Include read-only and disabled elements in tab chain"?

#### Ziel

Ermittlung und Dokumentation der von SAP offiziell beschriebenen Funktion dieser Accessibility-Einstellung.

---

#### Dokumentierte Herstellerinformation

SAP dokumentiert die Einstellung "Include read-only and disabled elements in tab chain" auf der Seite "Accessibility Page" im Abschnitt "Registry Values".

SAP ordnet die Einstellung dem Registrierungspfad `[HKEY_CURRENT_USER\Software\SAP\SAPGUI Front\SAP Frontend Server\Accessibility]` zu.

Der zugehörige Registrierungswert lautet `EnhancedTabChain (REG_DWORD)`.

SAP dokumentiert den Standardwert `1`.

SAP dokumentiert folgende Wertbedeutungen:

| Wert | Bedeutung |
|------|-----------|
| 0 | inactive |
| 1 | active |

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI Administration |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Accessibility Page |
| Abschnitt | Registry Values; Include read-only and disabled elements in tab chain |
| URL | https://help.sap.com/docs/sap_gui_for_windows/dfad9ecd79db404eba46fdd709013a78/2e1cf2b8e1734a2b94b180206742a3a1.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 02.07.2026 |

---

#### Eigene Praxistests

PT-003 vorgesehen.

Testergebnisse liegen noch nicht vor.

---

#### Interpretation

Erfolgt nach Abschluss des Praxistests.

---

#### Fachliche Bewertung

Erfolgt nach Vergleich zwischen Herstellerdokumentation und Praxistest.

---

#### Ergebnis

Die Evidenz befindet sich in Bearbeitung.

---

## 4 Verwendete Quellen

| Quelle | Dokumentversion | Status |
|--------|-----------------|--------|
| SAP Help Portal | | Noch nicht recherchiert. |
| SAP GUI Administration | 8.00 PL08 | Teilweise ausgewertet |
| SAP GUI Installation Guide | | Noch nicht recherchiert. |
| SAP Notes | | Noch nicht recherchiert. |

---

## 5 Zugehörige Praxistests

| Test-ID | Beschreibung | Status |
|---------|--------------|--------|
| PT-002 | Einstellungen zur Barrierefreiheit | Geplant |
| PT-003 | Include read-only and disabled elements in tab chain | Geplant |

---

## 6 Freigabe

| Prüfschritt | Status |
|-------------|--------|
| Herstellerdokumentation vollständig ausgewertet | Nein |
| Praxistests abgeschlossen | Nein |
| Fachliche Bewertung abgeschlossen | Nein |
| Freigabe für Referenzhandbuch | Nein |
