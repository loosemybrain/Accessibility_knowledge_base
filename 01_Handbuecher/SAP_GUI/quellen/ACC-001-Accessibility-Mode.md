# Recherche – ACC-001 Accessibility Mode

## 1 Metadaten

| Eigenschaft | Wert |
|-------------|------|
| Recherche-ID | ACC-001 |
| Thema | Accessibility Mode |
| Referenzhandbuch | AKB-200 – SAP GUI for Windows |
| Zugehöriges Kapitel | Kapitel 5 – Barrierefreiheit |
| Abschnitt | 5.2 – Accessibility Mode |
| Status | In Bearbeitung |
| Version | 2.0 |
| Letzte Aktualisierung | 01.07.2026 |

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

### 3.1 Evidenz ACC-001-E01

#### Fragestellung

Wie definiert SAP den Accessibility Mode der SAP GUI for Windows?

#### Ziel

Ermittlung der offiziellen Herstellerdefinition des Accessibility Mode als Grundlage für Abschnitt 5.2 des Referenzhandbuchs.

---

#### Dokumentierte Herstellerinformation

Die SAP GUI for Windows stellt einen Accessibility Mode bereit.

Der Accessibility Mode dient der Unterstützung einer barrierefreien Nutzung der SAP GUI und ist für den Einsatz mit assistiven Technologien vorgesehen.

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP Help Portal – Accessibility in SAP GUI for Windows |
| Dokumentversion | SAP Help Portal |
| Kapitel | Accessibility in SAP GUI for Windows |
| Abschnitt | Accessibility Mode |
| URL | SAP Help Portal |
| Abrufdatum | 01.07.2026 |

---

#### Eigene Praxistests

Für diese Evidenz ist kein Praxistest erforderlich.

Begründung:

Die Evidenz dokumentiert die offizielle Herstellerbeschreibung des Accessibility Mode. Eine praktische Verifikation der Begrifflichkeit ist nicht erforderlich. Praktisch überprüfbare Aussagen werden in separaten Evidenzen und Praxistests behandelt.

---

#### Interpretation

Die Herstellerinformation beschreibt den Accessibility Mode als zentrale Funktion zur Unterstützung der barrierefreien Nutzung der SAP GUI.

Konkrete Aussagen zur Aktivierung, zum Neustartverhalten, zu zusätzlichen Optionen oder zur Unterstützung einzelner assistiver Technologien werden nicht aus dieser Evidenz abgeleitet, sondern getrennt dokumentiert.

---

#### Fachliche Bewertung

Die Herstellerinformation ist als Grundlage für eine allgemeine Definition des Accessibility Mode geeignet.

Weitergehende Aussagen erfordern zusätzliche Evidenzen.

---

#### Ergebnis

Status: Verifiziert.

Die folgende Aussage kann in das Referenzhandbuch übernommen werden:

- SAP GUI for Windows verfügt über einen Accessibility Mode zur Unterstützung barrierefreier Nutzung.

---

### 3.2 Evidenz ACC-001-E02

#### Fragestellung

Wie wird der Accessibility Mode der SAP GUI for Windows aktiviert?

#### Ziel

Ermittlung und Validierung des offiziellen Aktivierungsweges des Accessibility Mode.

---

#### Dokumentierte Herstellerinformation

Der Accessibility Mode wird über die SAP-GUI-Optionen aktiviert.

Der Menüpfad führt über Accessibility & Scripting → Accessibility.

Die Aktivierung erfolgt über die Option Use Accessibility Mode.

SAP dokumentiert, dass die Aktivierung oder Deaktivierung des Accessibility Mode erst nach einem Neustart von SAP Logon beziehungsweise SAP Logon Pad wirksam wird.

---

#### Quellenzuordnung

| Eigenschaft | Wert |
|-------------|------|
| Dokument | SAP Help Portal – Accessibility in SAP GUI for Windows |
| Dokumentversion | SAP Help Portal |
| Kapitel | Accessibility in SAP GUI for Windows |
| Abschnitt | Use Accessibility Mode |
| URL | SAP Help Portal |
| Abrufdatum | 01.07.2026 |

---

#### Eigene Praxistests

| Test-ID | Dokument | Status |
|----------|----------|--------|
| PT-001 | PT-001-Accessibility-Mode-Aktivierung.md | Abgeschlossen |

---

#### Interpretation

Die Herstellerdokumentation beschreibt einen eindeutigen Aktivierungsweg.

Der durchgeführte Praxistest bestätigt die dokumentierten Schritte.

Zusätzlich wurde im Praxistest ein Hinweisdialog beobachtet, der darauf hinweist, dass die Aktivierung beziehungsweise Deaktivierung des Barrierefreiheitsmodus erst nach einem Neustart des SAP Logon Pad wirksam wird.

---

#### Fachliche Bewertung

Herstellerinformation und Praxistest stimmen überein.

Die Aussage kann als verifiziert betrachtet werden.

---

#### Ergebnis

Status: Verifiziert.

Die Evidenz kann in das Referenzhandbuch übernommen werden.

---

### 3.3 Evidenz ACC-001-E03

Für weitere fachliche Aussagen reserviert.

---

## 4 Verwendete Quellen

| Quelle | Dokumentversion | Status |
|---------|-----------------|--------|
| SAP Help Portal | SAP Help Portal | Teilweise ausgewertet |
| SAP GUI Administration Guide | | Offen |
| SAP GUI Installation Guide | | Offen |
| SAP Notes | | Offen |

---

## 5 Zugehörige Praxistests

| Test-ID | Beschreibung | Status |
|----------|--------------|--------|
| PT-001 | Accessibility Mode – Aktivierung | Abgeschlossen |

---

## 6 Freigabe

| Prüfschritt | Status |
|-------------|--------|
| Herstellerdokumentation vollständig ausgewertet | Teilweise |
| Praxistests abgeschlossen | Teilweise |
| Fachliche Bewertung abgeschlossen | Teilweise |
| Freigabe für Referenzhandbuch | Teilweise |
