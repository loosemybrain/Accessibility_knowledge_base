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
| Letzte Aktualisierung | 08.07.2026 |

---

## 2 Bearbeitungsstatus

| Prüfschritt | Status |
|-------------|--------|
| Recherchedatei erstellt | Ja |
| Evidenz angelegt | Ja |
| Primärquellen identifiziert | Ja |
| Primärquellen ausgewertet | Teilweise |
| Praxistests durchgeführt | Teilweise |
| Vergleich abgeschlossen | Teilweise |
| Fachliche Bewertung abgeschlossen | Teilweise |
| Freigabe erfolgt | Teilweise |

---

## 3 Evidenz

### 3.1 Evidenz ACC-002-E01

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E01 |
| Status | In Vorbereitung |
| Herstellerquelle | Noch nicht recherchiert. |
| Praxistest | Blockiert |
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

Praxistest PT-002 ist blockiert.

Testergebnisse liegen nicht vor.

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
| Praxistest | Blockiert |
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

PT-002 ist blockiert.

Testergebnisse liegen nicht vor.

---

#### Interpretation

Eine abschließende Interpretation erfolgt nach Abschluss des Praxistests.

---

#### Fachliche Bewertung

Eine abschließende fachliche Bewertung erfolgt nach Vergleich zwischen Herstellerdokumentation und Praxistest.

---

#### Ergebnis

Die Evidenz befindet sich in Bearbeitung und ist nicht für das Referenzhandbuch freigegeben.

---

### 3.3 Evidenz ACC-002-E03

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E03 |
| Status | Verifiziert |
| Herstellerquelle | Ja |
| Praxistest | Abgeschlossen |
| Referenzhandbuch | Freigegeben |

---

#### Fragestellung

Welche Funktion beschreibt SAP für die Einstellung "Include read-only and disabled elements in tab chain"?

#### Ziel

Ermittlung und Dokumentation der von SAP offiziell beschriebenen Funktion dieser Accessibility-Einstellung.

---

#### Dokumentierte Herstellerinformation

Fachliche Funktion:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Offizielle Bezeichnung | Include read-only and disabled elements in tab chain |
| Weitere dokumentierte Bezeichnung | Include disabled elements in tab chain |
| Offizieller Zweck | SAP dokumentiert diese Einstellung als Option, die nach dem Umschalten des Accessibility Mode zur Auswahl verfügbar ist. |
| Voraussetzungen | SAP dokumentiert, dass "Use accessibility mode" aktiviert sein muss, damit die anderen Optionen auf der Seite "Accessibility Page" aktiviert werden können. |
| Dokumentierte Wirkung | SAP dokumentiert, dass deaktivierte und schreibgeschützte Elemente beim Fokussieren per Tabulatortaste nicht übersprungen werden. |
| Empfehlung für Screenreader | Switch on |
| Empfehlung für Bildschirmlupe | Switch on only if preferred |
| Dokumentierter Verweis | Accessibility & Scripting |

Technische Umsetzung:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Registry-Pfad | `[HKEY_CURRENT_USER\Software\SAP\SAPGUI Front\SAP Frontend Server\Accessibility]` |
| Registry-Wert | `EnhancedTabChain` |
| Datentyp | `REG_DWORD` |
| Standardwert | `1` |
| Zulässige Werte | `0 = inactive`; `1 = active` |
| Besonderheiten | Nicht dokumentiert in den verwendeten SAP-Primärquellen. |

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
| Abrufdatum | 03.07.2026 |

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Accessibility |
| Abschnitt | Accessibility |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/38da185ebd1540bdbc919db7b9013c9a.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Notes for Users of Screen Readers and Screen Magnifiers |
| Abschnitt | Overview of SAP GUI Settings for Screen Readers and Screen Magnifiers |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/efb032ca6e9844d0a8443674f4eb85f6.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

---

#### Eigene Praxistests

PT-003 abgeschlossen.

Erwartetes Verhalten vollständig bestätigt.

Alle Testschritte erfolgreich durchgeführt.

Keine Abweichungen zwischen Herstellerdokumentation und Praxistest festgestellt.

---

#### Interpretation

Der durchgeführte Praxistest bestätigt die dokumentierte Herstellerinformation.

Es wurden keine Abweichungen festgestellt.

---

#### Fachliche Bewertung

Die Herstellerdokumentation und der reproduzierbare Praxistest stimmen überein.

Die dokumentierte Funktion der Einstellung kann als fachlich verifiziert betrachtet werden.

---

#### Ergebnis

Verifiziert.

Die Evidenz kann für das Referenzhandbuch verwendet werden.

---

### 3.4 Evidenz ACC-002-E04

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E04 |
| Status | In Bearbeitung |
| Herstellerquelle | Ja |
| Praxistest | Blockiert |
| Referenzhandbuch | Nicht freigegeben |

---

#### Fragestellung

Welche Funktion beschreibt SAP für die Einstellung "Display symbols in lists as letters"?

#### Ziel

Ermittlung und Dokumentation der von SAP offiziell beschriebenen Funktion der Einstellung "Display symbols in lists as letters" im Bereich "Accessibility" der SAP GUI for Windows.

---

#### Dokumentierte Herstellerinformation

Fachliche Funktion:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Offizielle Bezeichnung | Display symbols in lists as letters |
| Weitere dokumentierte Bezeichnung | Display list symbols as letters |
| Offizieller Zweck | SAP dokumentiert diese Einstellung als Option, die nach dem Umschalten des Accessibility Mode zur Auswahl verfügbar ist. |
| Voraussetzungen | SAP dokumentiert, dass "Use accessibility mode" aktiviert sein muss, damit die anderen Optionen auf der Seite "Accessibility Page" aktiviert werden können. |
| Dokumentierte Wirkung | SAP dokumentiert, dass Buchstaben im Unterschied zu Symbolen durch einen Screenreader identifiziert werden können. |
| Dokumentierte Wirkung | SAP dokumentiert, dass Symbole in Listen zum Beispiel zum Auf- oder Zuklappen einer Unterstruktur verwendet werden. |
| Dokumentierte Wirkung | SAP dokumentiert, dass diese Symbole durch einen Screenreader nicht identifiziert werden können, weil sie für den Screenreader unbekannte Zeichen darstellen. |
| Dokumentierte Wirkung | SAP dokumentiert, dass diese Symbole durch Buchstaben wie "4" und "5" ersetzt werden können. |
| Dokumentierte Wirkung | SAP dokumentiert, dass der Screenreader diese Ersetzungen lesen und dadurch zusätzliche Informationen zu den Symbolen in der Liste ausgeben kann. |
| Empfehlung für Screenreader | Switch on |
| Empfehlung für Bildschirmlupe | Switch off |
| Dokumentierter Verweis | Accessibility & Scripting |

Technische Umsetzung:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Registry-Pfad | `[HKEY_CURRENT_USER\Software\SAP\SAPGUI Front\SAP Frontend Server\Accessibility]` |
| Registry-Wert | `SymbolsAsLetters` |
| Datentyp | `REG_DWORD` |
| Standardwert | `1` |
| Zulässige Werte | `0 = inactive`; `1 = active` |
| Besonderheiten | Nicht dokumentiert in den verwendeten SAP-Primärquellen. |

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI Administration |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Accessibility Page |
| Abschnitt | Registry Values; Display symbols in lists as letters |
| URL | https://help.sap.com/docs/sap_gui_for_windows/dfad9ecd79db404eba46fdd709013a78/2e1cf2b8e1734a2b94b180206742a3a1.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Accessibility |
| Abschnitt | Accessibility |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/38da185ebd1540bdbc919db7b9013c9a.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Notes for Users of Screen Readers and Screen Magnifiers |
| Abschnitt | Overview of SAP GUI Settings for Screen Readers and Screen Magnifiers |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/efb032ca6e9844d0a8443674f4eb85f6.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

---

#### Eigene Praxistests

Praxistest PT-004 ist blockiert. Testergebnisse liegen nicht vor.

---

#### Interpretation

Eine abschließende Interpretation erfolgt nach Abschluss des Praxistests.

---

#### Fachliche Bewertung

Eine abschließende fachliche Bewertung erfolgt nach Vergleich zwischen Herstellerdokumentation und Praxistest.

---

#### Ergebnis

Die Evidenz befindet sich in Bearbeitung und ist nicht für das Referenzhandbuch freigegeben.

---

### 3.5 Evidenz ACC-002-E05

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E05 |
| Status | In Bearbeitung |
| Herstellerquelle | Ja |
| Praxistest | Blockiert |
| Referenzhandbuch | Nicht freigegeben |

---

#### Fragestellung

Welche Funktion beschreibt SAP für die Einstellung "Dialog box for messages"?

#### Ziel

Ermittlung und Dokumentation der von SAP offiziell beschriebenen Funktion der Einstellung "Dialog box for messages" im Bereich der SAP GUI for Windows.

---

#### Dokumentierte Herstellerinformation

Fachliche Funktion:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Offizielle Bezeichnung | Dialog box for messages |
| Zugeordnete Optionen | Show success messages in a dialog box; Show warning messages in a dialog box; Show error messages in a dialog box |
| Offizieller Zweck | SAP verweist für "Dialog box for messages" auf "Notifications". |
| Voraussetzungen | Nicht dokumentiert in den verwendeten SAP-Primärquellen. |
| Dokumentierte Wirkung | SAP dokumentiert, dass Erfolgsmeldungen bei ausgewählter Option in der Statusleiste und in einem Dialogfeld angezeigt werden, das ausdrücklich bestätigt werden muss. |
| Dokumentierte Wirkung | SAP dokumentiert, dass Warnmeldungen bei ausgewählter Option in der Statusleiste und in einem Dialogfeld angezeigt werden, das ausdrücklich bestätigt werden muss. |
| Dokumentierte Wirkung | SAP dokumentiert, dass Fehlermeldungen bei ausgewählter Option in der Statusleiste und in einem Dialogfeld angezeigt werden, das ausdrücklich bestätigt werden muss. |
| Besonderheiten | SAP dokumentiert für diese drei Optionen, dass sie hauptsächlich verwendet werden, wenn der Accessibility Mode verwendet wird. |
| Empfehlung für Screenreader | Switch on |
| Empfehlung für Bildschirmlupe | Switch on |
| Dokumentierter Verweis | Notifications |

Technische Umsetzung:

| Einstellung | Registry-Pfad | Registry-Wert | Datentyp | Standardwert | Zulässige Werte | Besonderheiten |
|-------------|---------------|----------------|----------|--------------|-----------------|----------------|
| Show success messages in a dialog box | `[HKEY_CURRENT_USER\Software\SAP\SAPGUI Front\SAP Frontend Server\Customize]` | `PopupSuccess` | `REG_DWORD` | `0` | `0 = inactive`; `1 = active` | Nicht dokumentiert in den verwendeten SAP-Primärquellen. |
| Show warning messages in a dialog box | `[HKEY_CURRENT_USER\Software\SAP\SAPGUI Front\SAP Frontend Server\Customize]` | `PopupWarning` | `REG_DWORD` | `0` | `0 = inactive`; `1 = active` | Nicht dokumentiert in den verwendeten SAP-Primärquellen. |
| Show error messages in a dialog box | `[HKEY_CURRENT_USER\Software\SAP\SAPGUI Front\SAP Frontend Server\Customize]` | `PopupError` | `REG_DWORD` | `0` | `0 = inactive`; `1 = active` | Nicht dokumentiert in den verwendeten SAP-Primärquellen. |

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Notes for Users of Screen Readers and Screen Magnifiers |
| Abschnitt | Overview of SAP GUI Settings for Screen Readers and Screen Magnifiers |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/efb032ca6e9844d0a8443674f4eb85f6.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Notifications |
| Abschnitt | Messages in Dialog Box |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/826a42f2c71b4cb3abc004a63afe8758.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI Administration |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Notifications Page |
| Abschnitt | Registry Values; Show success messages in a dialog box; Show warning messages in a dialog box; Show error messages in a dialog box |
| URL | https://help.sap.com/docs/sap_gui_for_windows/dfad9ecd79db404eba46fdd709013a78/53c52cfb0d04400d9568dcf0e5a0862a.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

---

#### Eigene Praxistests

Praxistest PT-005 ist blockiert. Testergebnisse liegen nicht vor.

---

#### Interpretation

Eine abschließende Interpretation erfolgt nach Abschluss des Praxistests.

---

#### Fachliche Bewertung

Eine abschließende fachliche Bewertung erfolgt nach Vergleich zwischen Herstellerdokumentation und Praxistest.

---

#### Ergebnis

Die Evidenz befindet sich in Bearbeitung und ist nicht für das Referenzhandbuch freigegeben.

---

### 3.6 Evidenz ACC-002-E06

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E06 |
| Status | In Bearbeitung |
| Herstellerquelle | Ja |
| Praxistest | Blockiert |
| Referenzhandbuch | Nicht freigegeben |

---

#### Fragestellung

Welche Funktion beschreibt SAP für die Einstellung "Set F4 help to modal dialog"?

#### Ziel

Ermittlung und Dokumentation der von SAP offiziell beschriebenen Funktion der Einstellung "Set F4 help to modal dialog" in der SAP GUI for Windows.

---

#### Dokumentierte Herstellerinformation

Fachliche Funktion:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Offizielle Bezeichnung | Set F4 help to modal dialog |
| Weitere dokumentierte Bezeichnung | Set F4 Help to Modal Dialog |
| Offizieller Zweck | SAP verweist für diese Einstellung auf den Abschnitt "Set F4 Help to Modal Dialog". |
| Voraussetzungen | SAP dokumentiert, dass diese Einstellung direkt in jedem System definiert wird und sich nicht im Optionsdialog in SAP Logon befindet. |
| Dokumentierte Wirkung | SAP dokumentiert den Menüpfad `Help > Settings > F4 Help`. |
| Empfehlung für Screenreader | Switch on |
| Empfehlung für Bildschirmlupe | Switch on only if preferred |
| Dokumentierter Verweis | See below. |

Technische Umsetzung:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Registry-Pfad | Nicht in den verwendeten Primärquellen dokumentiert. |
| Registry-Wert | Nicht in den verwendeten Primärquellen dokumentiert. |
| Datentyp | Nicht in den verwendeten Primärquellen dokumentiert. |
| Standardwert | Nicht in den verwendeten Primärquellen dokumentiert. |
| Zulässige Werte | Nicht in den verwendeten Primärquellen dokumentiert. |
| Besonderheiten | SAP dokumentiert, dass die Einstellung direkt in jedem System definiert wird und sich nicht im Optionsdialog in SAP Logon befindet. |

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Notes for Users of Screen Readers and Screen Magnifiers |
| Abschnitt | Overview of SAP GUI Settings for Screen Readers and Screen Magnifiers; Set F4 Help to Modal Dialog |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/efb032ca6e9844d0a8443674f4eb85f6.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

---

#### Eigene Praxistests

Praxistest PT-006 ist blockiert. Testergebnisse liegen nicht vor.

---

#### Interpretation

Eine abschließende Interpretation erfolgt nach Abschluss des Praxistests.

---

#### Fachliche Bewertung

Eine abschließende fachliche Bewertung erfolgt nach Vergleich zwischen Herstellerdokumentation und Praxistest.

---

#### Ergebnis

Die Evidenz befindet sich in Bearbeitung und ist nicht für das Referenzhandbuch freigegeben.

---

### 3.7 Evidenz ACC-002-E07

#### Evidenzstatus

| Eigenschaft | Wert |
|-------------|------|
| Evidenz-ID | ACC-002-E07 |
| Status | In Bearbeitung |
| Herstellerquelle | Ja |
| Praxistest | Blockiert |
| Referenzhandbuch | Nicht freigegeben |

---

#### Fragestellung

Welche weiteren Accessibility-Einstellungen dokumentiert SAP im Bereich "Accessibility"?

#### Ziel

Vollständige Bestandsaufnahme weiterer offiziell dokumentierter Accessibility-Einstellungen, die nicht bereits durch ACC-002-E02 bis ACC-002-E06 abgedeckt sind.

---

#### Dokumentierte Herstellerinformation

Fachliche Funktion:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Offizielle Bezeichnung | Open Office documents outplace for better screen reader support |
| Weitere dokumentierte Bezeichnung | Open Office documents externally for better screen reader support |
| Offizieller Zweck | SAP dokumentiert diese Einstellung im Zusammenhang mit Desktop Office Integration. |
| Voraussetzungen | SAP dokumentiert, dass "Use accessibility mode" aktiviert sein muss, damit die anderen Optionen auf der Seite "Accessibility Page" aktiviert werden können. |
| Dokumentierte Wirkung | SAP dokumentiert, dass ein Dokument, das normalerweise innerhalb des SAP-GUI-Fensters angezeigt würde, stattdessen außerhalb des SAP-GUI-Fensters angezeigt werden kann. |
| Dokumentierte Wirkung | SAP dokumentiert, dass dies in vielen Fällen die Erkennung und Handhabung von Dokumenten durch den Screenreader verbessert. |
| Besonderheiten | SAP dokumentiert, dass bei Verwendung dieser Einstellung einige Desktop-Office-Integration-Funktionen nicht verfügbar sind. |
| Besonderheiten | SAP dokumentiert unter anderem, dass so angezeigte Office-Dokumente nicht mit Formatierungen bereitgestellt werden und dass keine Daten aus Office-Dokumenten in die SAP GUI übertragen werden können. |
| Besonderheiten | SAP dokumentiert, dass diese Einstellung daher nur nützlich ist, wenn Dokumente nur angezeigt werden sollen. |
| Empfehlung für Screenreader | Switch on |
| Empfehlung für Bildschirmlupe | Switch on only if preferred |
| Dokumentierter Verweis | Accessibility & Scripting |

Technische Umsetzung:

| Aspekt | Dokumentierte Herstellerinformation |
|--------|-------------------------------------|
| Registry-Pfad | `[HKEY_CURRENT_USER\Software\SAP\General]` |
| Registry-Wert | `OfficeOutplaceMode` |
| Datentyp | `REG_SZ` |
| Standardwert | `off` |
| Zulässige Werte | `on = active`; `off = inactive` |
| Besonderheiten | Nicht dokumentiert in den verwendeten SAP-Primärquellen. |

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI Administration |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Accessibility Page |
| Abschnitt | Registry Values; Open Office documents outplace for better screen reader support |
| URL | https://help.sap.com/docs/sap_gui_for_windows/dfad9ecd79db404eba46fdd709013a78/2e1cf2b8e1734a2b94b180206742a3a1.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Accessibility |
| Abschnitt | Desktop Office Integration |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/38da185ebd1540bdbc919db7b9013c9a.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP GUI for Windows |
| Produkt | SAP GUI for Windows |
| Dokumentversion | 8.00 PL08 |
| Kapitel | Notes for Users of Screen Readers and Screen Magnifiers |
| Abschnitt | Overview of SAP GUI Settings for Screen Readers and Screen Magnifiers |
| URL | https://help.sap.com/docs/sap_gui_for_windows/63bd20104af84112973ad59590645513/efb032ca6e9844d0a8443674f4eb85f6.html?locale=en-US&state=PRODUCTION&version=800.08 |
| Abrufdatum | 03.07.2026 |

---

#### Eigene Praxistests

Praxistest PT-007 ist blockiert. Testergebnisse liegen nicht vor.

---

#### Interpretation

Eine abschließende Interpretation erfolgt nach Abschluss des Praxistests.

---

#### Fachliche Bewertung

Eine abschließende fachliche Bewertung erfolgt nach Vergleich zwischen Herstellerdokumentation und Praxistest.

---

#### Ergebnis

Die Evidenz befindet sich in Bearbeitung und ist nicht für das Referenzhandbuch freigegeben.

---

## 4 Verwendete Quellen

| Quelle | Dokumentversion | Status |
|--------|-----------------|--------|
| SAP GUI for Windows | 8.00 PL08 | Teilweise ausgewertet |
| SAP GUI Administration | 8.00 PL08 | Teilweise ausgewertet |
| SAP GUI Installation Guide | | Noch nicht recherchiert. |
| SAP Notes | | Noch nicht recherchiert. |

---

## 5 Zugehörige Praxistests

| Test-ID | Beschreibung | Status |
|---------|--------------|--------|
| PT-002 | Use Accessibility Mode | Blockiert |
| PT-003 | Include read-only and disabled elements in tab chain | Abgeschlossen |
| PT-004 | Display symbols in lists as letters | Blockiert |
| PT-005 | Dialog box for messages | Blockiert |
| PT-006 | Set F4 help to modal dialog | Blockiert |
| PT-007 | Weitere Accessibility-Einstellungen | Blockiert |

---

## 6 Freigabe

| Prüfschritt | Status |
|-------------|--------|
| Herstellerdokumentation vollständig ausgewertet | Nein |
| Praxistests abgeschlossen | Teilweise |
| Fachliche Bewertung abgeschlossen | Teilweise |
| Freigabe für Referenzhandbuch | Teilweise |
