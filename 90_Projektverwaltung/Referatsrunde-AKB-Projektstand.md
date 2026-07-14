---
marp: true
theme: default
paginate: true
size: 16:9
footer: Accessibility Knowledge Base · Projektstand 14.07.2026
style: |
  :root {
    --navy: #102a43;
    --blue: #145b75;
    --teal: #0f6b63;
    --ice: #eaf4f7;
    --sand: #f5f1e8;
    --ink: #1f2933;
    --muted: #52606d;
    --line: #7b8794;
    --white: #ffffff;
  }
  section {
    background: linear-gradient(135deg, #ffffff 0%, #f4f8fa 100%);
    color: var(--ink);
    font-family: "Aptos", "Segoe UI", Arial, sans-serif;
    font-size: 27px;
    padding: 64px 76px 58px;
  }
  section::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 11px;
    background: linear-gradient(90deg, var(--navy), var(--blue), var(--teal));
  }
  section.lead {
    background: linear-gradient(125deg, var(--navy) 0%, var(--blue) 68%, var(--teal) 100%);
    color: var(--white);
  }
  section.lead::before {
    display: none;
  }
  section.lead h1,
  section.lead h2,
  section.lead p {
    color: var(--white);
  }
  section.lead strong {
    color: var(--white);
  }
  section::after {
    color: var(--navy);
    font-size: 16px;
  }
  section.lead::after {
    color: var(--ice);
  }
  footer {
    color: #3e4c59;
    font-size: 16px;
  }
  section.lead footer {
    color: var(--ice);
  }
  h1 {
    color: var(--navy);
    font-size: 58px;
    line-height: 1.08;
    letter-spacing: -1.2px;
    margin: 0 0 28px;
  }
  h2 {
    color: var(--navy);
    font-size: 40px;
    line-height: 1.12;
    margin: 0 0 30px;
  }
  h3 {
    color: var(--blue);
    font-size: 25px;
    margin: 0 0 12px;
  }
  p,
  li {
    line-height: 1.38;
  }
  strong {
    color: var(--navy);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 20px;
  }
  th {
    background: var(--navy);
    color: var(--white);
    text-align: left;
    padding: 10px 13px;
  }
  td {
    border-bottom: 1px solid var(--line);
    padding: 9px 13px;
    vertical-align: top;
  }
  tr:nth-child(even) td {
    background: rgba(234, 244, 247, 0.65);
  }
  code {
    background: var(--ice);
    color: var(--navy);
    padding: 2px 6px;
    border-radius: 5px;
  }
  .eyebrow {
    color: var(--teal);
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 1.6px;
    text-transform: uppercase;
  }
  .subtitle {
    color: var(--muted);
    font-size: 30px;
    max-width: 900px;
  }
  .lead .eyebrow {
    color: #e6f6f3;
  }
  .lead .subtitle {
    color: #eaf4f7;
  }
  .grid {
    display: grid;
    gap: 20px;
  }
  .grid.two {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid.three {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid.four {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .card {
    background: var(--white);
    border: 1px solid var(--line);
    border-top: 5px solid var(--blue);
    border-radius: 10px;
    box-shadow: 0 8px 22px rgba(16, 42, 67, 0.08);
    padding: 20px 22px;
  }
  .card p,
  .card li {
    color: var(--muted);
    font-size: 20px;
  }
  .card ul {
    margin: 8px 0 0;
    padding-left: 22px;
  }
  .metric {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 22px 16px;
    text-align: center;
  }
  .metric strong {
    display: block;
    color: var(--blue);
    font-size: 48px;
    line-height: 1;
    margin-bottom: 10px;
  }
  .metric span {
    color: var(--muted);
    font-size: 18px;
  }
  .flow {
    align-items: stretch;
    display: grid;
    gap: 14px;
    grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
    margin-top: 28px;
  }
  .flow-step {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 10px;
    padding: 20px 15px;
    text-align: center;
  }
  .flow-step strong {
    display: block;
    font-size: 23px;
    margin-bottom: 8px;
  }
  .flow-step span {
    color: var(--muted);
    font-size: 17px;
  }
  .arrow {
    align-self: center;
    color: var(--teal);
    font-size: 35px;
    font-weight: 700;
  }
  .callout {
    background: var(--ice);
    border-left: 7px solid var(--teal);
    border-radius: 6px;
    margin-top: 24px;
    padding: 16px 22px;
  }
  .callout p {
    margin: 0;
  }
  .roadmap {
    display: grid;
    gap: 13px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .roadmap-stage {
    background: var(--white);
    border: 1px solid var(--line);
    border-radius: 10px;
    min-height: 310px;
    padding: 18px;
  }
  .roadmap-stage .number {
    align-items: center;
    background: var(--navy);
    border-radius: 50%;
    color: var(--white);
    display: flex;
    font-size: 19px;
    font-weight: 700;
    height: 38px;
    justify-content: center;
    margin-bottom: 15px;
    width: 38px;
  }
  .roadmap-stage p,
  .roadmap-stage li {
    color: var(--muted);
    font-size: 17px;
  }
  .small {
    color: var(--muted);
    font-size: 17px;
  }
  .center {
    text-align: center;
  }
  .closing {
    font-size: 34px;
    line-height: 1.35;
    max-width: 980px;
  }
---

<!-- Renderhinweis: Für Karten- und Roadmap-Layouts Marp mit aktivierter HTML-Unterstützung verwenden. -->

<!-- _class: lead -->
<!-- _paginate: false -->

<p class="eyebrow">Referatsrunde · Projektstand und weiterer Verlauf</p>

# Accessibility Knowledge Base

<p class="subtitle">Vom SAP-Handbuch zur belastbaren Wissensplattform für digitale Barrierefreiheit</p>

**Stand:** 14.07.2026  
**Referenzhandbuch:** AKB-200 – SAP GUI for Windows

---

## Was heute geklärt werden soll

<div class="grid three">
  <div class="card">
    <h3>Wo stehen wir?</h3>
    <p>Aktueller Projekt-, Evidenz- und Teststand des Referenzhandbuchs.</p>
  </div>
  <div class="card">
    <h3>Was umfasst das Projekt?</h3>
    <p>Governance, Themenfelder, Tooling und Veröffentlichungslogik auf einen Blick.</p>
  </div>
  <div class="card">
    <h3>Wie geht es weiter?</h3>
    <p>Vorgeschlagene Reihenfolge, notwendige Entscheidungen und klare Abschlusskriterien.</p>
  </div>
</div>

<div class="callout">
  <p><strong>Kernaussage:</strong> Die technische und methodische Basis steht. Der nächste Schwerpunkt ist die kontrollierte fachliche Konsolidierung und Freigabe.</p>
</div>

---

## Das Projekt in einem Bild

<div class="grid three">
  <div class="card">
    <h3>Wissensplattform</h3>
    <p>Langfristig wartbare Dokumentation zur digitalen Barrierefreiheit.</p>
  </div>
  <div class="card">
    <h3>Erste Referenz</h3>
    <p>AKB-200 bildet SAP GUI for Windows als erstes fachliches Referenzthema ab.</p>
  </div>
  <div class="card">
    <h3>Wiederverwendbares Modell</h3>
    <p>Governance, Evidenzmodell, Praxistests und Tooling sind auf weitere Themen übertragbar.</p>
  </div>
</div>

<div class="callout">
  <p><strong>Qualitätsprinzip:</strong> Qualität hat Vorrang vor Vollständigkeit. Unbelegte Aussagen werden nicht veröffentlicht.</p>
</div>

---

## Kennzahlen des aktuellen Arbeitsstands

<div class="grid four">
  <div class="metric"><strong>63</strong><span>Markdown-Dateien</span></div>
  <div class="metric"><strong>14</strong><span>Governance- und Standarddokumente</span></div>
  <div class="metric"><strong>17</strong><span>Kapitel im Referenzhandbuch</span></div>
  <div class="metric"><strong>4</strong><span>Recherchedateien</span></div>
  <div class="metric"><strong>18</strong><span>dokumentierte Evidenzen</span></div>
  <div class="metric"><strong>7</strong><span>Praxistests</span></div>
  <div class="metric"><strong>7</strong><span>Screenshots</span></div>
  <div class="metric"><strong>25</strong><span>Tooling-Dateien</span></div>
</div>

<p class="small center">Technischer Prüfstand: Markdown-Validierung erfolgreich; Doctor-Check mit 11 bestandenen Prüfungen.</p>

---

## Unser Qualitäts- und Veröffentlichungsmodell

<div class="flow">
  <div class="flow-step"><strong>Recherche</strong><span>Quellen und Evidenzen dokumentieren</span></div>
  <div class="arrow">→</div>
  <div class="flow-step"><strong>Validierung</strong><span>Quellenbezug und Praxistests prüfen</span></div>
  <div class="arrow">→</div>
  <div class="flow-step"><strong>Redaktion</strong><span>freigabefähigen Fachtext erstellen</span></div>
  <div class="arrow">→</div>
  <div class="flow-step"><strong>Veröffentlichung</strong><span>Kapitel in das Referenzhandbuch übernehmen</span></div>
</div>

<div class="grid three" style="margin-top: 26px;">
  <div class="card"><h3>Steckbrief</h3><p>Planung und Steuerung</p></div>
  <div class="card"><h3>Recherche und Test</h3><p>Nachweise und reproduzierbare Prüfung</p></div>
  <div class="card"><h3>Kapitel</h3><p>Einzige Ebene für veröffentlichten Fachtext</p></div>
</div>

---

## Themenlandkarte des Referenzhandbuchs

| Themencluster | Kapitel und Inhalte | Aktueller Schwerpunkt |
|---------------|---------------------|-----------------------|
| Grundlagen | Vorwort, Grundlagen, SAP GUI for Windows, Installation | Offen |
| Barrierefreiheit | Accessibility Mode, Einstellungen, Nachweise | In Bearbeitung |
| Darstellung und Interaktion | Themes, Schrift, Screenreader, Tastaturbedienung | Offen beziehungsweise in Recherche |
| Betrieb und Administration | Scripting, Sicherheit, Administration | Offen |
| Nutzungshilfe | Einschränkungen, Troubleshooting, FAQ | Offen |
| Wissensbasis | Glossar und Quellen | Offen |

<div class="callout">
  <p><strong>Fachlicher Fokus:</strong> Kapitel 5 ist der belastbare Ausgangspunkt. Die übrigen 16 Kapitel bilden den sichtbaren Ausbaupfad des Handbuchs.</p>
</div>

---

## Vier fachliche Themenpakete im Blick

| Themenpaket | Gegenstand | Dokumentierter Stand | Bedeutung für das Handbuch |
|-------------|------------|------------------------|-----------------------------|
| ACC-001 | Accessibility Mode | 3 Evidenzen verifiziert | Aktivierung und Neustartverhalten veröffentlicht |
| ACC-002 | Einstellungen zur Barrierefreiheit | 2 von 7 Evidenzen verifiziert | teilweise veröffentlicht, insgesamt nicht freigabefähig |
| ACC-003 | SAP Screen Reader Extensions | 5 Evidenzen in Bearbeitung | Grundlage für Screenreader-Unterstützung |
| ACC-004 | Assistive Technologien | 3 Evidenzen in Bearbeitung | JAWS, NVDA und Windows Narrator im Recherchefokus |

<p class="small">Statusangaben entsprechen den jeweiligen Recherchedateien und dem aktuellen Topic-Review.</p>

---

## Was in Kapitel 5 bereits belastbar ist

<div class="grid two">
  <div class="card">
    <h3>Veröffentlichte Aussagen</h3>
    <ul>
      <li>Accessibility Mode und Aktivierungsweg</li>
      <li>Wirksamkeit nach Neustart</li>
      <li>Einbeziehung schreibgeschützter und deaktivierter Elemente in die Tabulatorreihenfolge</li>
    </ul>
  </div>
  <div class="card">
    <h3>Nachweise</h3>
    <ul>
      <li>ACC-001-E01 bis E03 und PT-001</li>
      <li>ACC-002-E03 und PT-003</li>
      <li>Quellen, Testschritte und Bewertungen getrennt dokumentiert</li>
    </ul>
  </div>
</div>

<div class="callout">
  <p><strong>Bewusste Grenze:</strong> Konkretes Verhalten einzelner Screenreader ist noch nicht Bestandteil des veröffentlichten Kapitels.</p>
</div>

---

## Evidenzen und Praxistests

<div class="grid two">
  <div>
    <h3>18 Evidenzen</h3>
    <table>
      <thead><tr><th>Status</th><th>Anzahl</th></tr></thead>
      <tbody>
        <tr><td>Verifiziert</td><td>5</td></tr>
        <tr><td>In Vorbereitung</td><td>1</td></tr>
        <tr><td>In Bearbeitung</td><td>12</td></tr>
      </tbody>
    </table>
  </div>
  <div>
    <h3>7 Praxistests</h3>
    <table>
      <thead><tr><th>Status</th><th>Testfälle</th></tr></thead>
      <tbody>
        <tr><td>Abgeschlossen</td><td>PT-001 bis PT-003</td></tr>
        <tr><td>Blockiert</td><td>PT-004 bis PT-007</td></tr>
      </tbody>
    </table>
  </div>
</div>

<div class="callout">
  <p><strong>Engpass:</strong> Vier Tests sind weiterhin blockiert. Gleichzeitig dokumentiert PT-002 inzwischen eine verfügbare Testumgebung. Diese Abweichung muss fachlich geklärt werden.</p>
</div>

---

## Governance und Tooling als Qualitätsnetz

<div class="grid three">
  <div class="card">
    <h3>Regeln</h3>
    <p>14 Dokumente steuern Redaktion, Quellen, Tests, Review, Darstellung und Topic Lifecycle.</p>
  </div>
  <div class="card">
    <h3>Automatisierung</h3>
    <p>Validierung, Abschnittspflege, Phasenberichte, Statuspflege und Themenpakete laufen über die AKB CLI.</p>
  </div>
  <div class="card">
    <h3>Nachvollziehbarkeit</h3>
    <p>Phasen- und Sprintberichte dokumentieren Änderungen, Grenzen, Risiken und Prüfungen.</p>
  </div>
</div>

<div class="callout">
  <p><strong>Architekturentscheidung:</strong> Die AKB dient zugleich als Referenzimplementierung eines wiederverwendbaren ITZ Documentation Framework.</p>
</div>

---

## Der aktuelle Konsolidierungsbedarf

| Ebene | Beobachtung | Erforderliche Klärung |
|-------|-------------|-----------------------|
| `PROJECT_STATUS.md` | nennt noch ACC-001 und 39 Dateien | aktuellen Projektstand kontrolliert nachführen |
| AKB-008 | Baseline 1.1 dokumentiert, Statuslisten enden bei ACC-001 und PT-001 | Evidenz- und Testübersichten synchronisieren |
| ACC-002-E02 | verifiziert, PT-002 abgeschlossen, Referenzhandbuch nicht freigegeben | fachliche Texte und Freigabestatus getrennt prüfen |
| PT-004 bis PT-007 | weiterhin wegen fehlender Testumgebung blockiert | Begründung gegen aktuellen Teststand prüfen |
| Topic-Review ACC-002 | Evidenzen und Praxistests nicht abschlussbereit | offene Kriterien einzeln abarbeiten |

<p class="small">Die Abweichungen sind dokumentiert. Eine automatische Bereinigung ohne fachlichen Scope ist ausdrücklich nicht vorgesehen.</p>

---

## Vorgeschlagener weiterer Verlauf

<div class="roadmap">
  <div class="roadmap-stage">
    <div class="number">1</div>
    <h3>Statusbasis konsolidieren</h3>
    <ul>
      <li>Single Source of Truth festlegen</li>
      <li>Projektstatus kontrolliert nachführen</li>
      <li>ACC-002-Abweichungen einzeln bearbeiten</li>
    </ul>
  </div>
  <div class="roadmap-stage">
    <div class="number">2</div>
    <h3>Testlücken schließen</h3>
    <ul>
      <li>Testumgebung verbindlich klären</li>
      <li>PT-004 bis PT-007 priorisieren</li>
      <li>Ergebnisse reproduzierbar dokumentieren</li>
    </ul>
  </div>
  <div class="roadmap-stage">
    <div class="number">3</div>
    <h3>Recherche abschließen</h3>
    <ul>
      <li>ACC-002 reviewfähig machen</li>
      <li>ACC-003 und ACC-004 validieren</li>
      <li>Screenreader-Aussagen absichern</li>
    </ul>
  </div>
  <div class="roadmap-stage">
    <div class="number">4</div>
    <h3>Redaktion und Ausgabe</h3>
    <ul>
      <li>freigegebene Aussagen übernehmen</li>
      <li>Kapitel 5 erweitern</li>
      <li>Export- und Veröffentlichungsweg vorbereiten</li>
    </ul>
  </div>
</div>

<p class="small center">Vorschlag zur Abstimmung; noch keine fachliche Freigabe oder verbindliche Terminplanung.</p>

---

## Abschlusskriterien je Etappe

| Etappe | Abschlusskriterium |
|--------|--------------------|
| Statusbasis | zentrale Übersichten und Fachdokumente weisen nachvollziehbare, konsistente Stände aus |
| Testlücken | Testumgebung, Schritte, Ergebnisse und Freigabe sind für jeden betroffenen Test dokumentiert |
| Recherche | Evidenzen besitzen vollständige Nachweise und einen geprüften Referenzhandbuchstatus |
| Redaktion | nur freigegebene Aussagen sind in Kapitel 5 übernommen |
| Veröffentlichung | Validierung und Topic-Review sind erfolgreich; Ausgabeweg ist festgelegt |

<div class="callout">
  <p><strong>Leitplanke:</strong> Jeder Übergang erfolgt erst nach erfüllten Nachweisen. Geschwindigkeit ersetzt keine fachliche Freigabe.</p>
</div>

---

## Entscheidungen für die Referatsrunde

<div class="grid two">
  <div class="card">
    <h3>Prioritäten</h3>
    <ul>
      <li>Vorgeschlagene Reihenfolge bestätigen</li>
      <li>ACC-002 vor ACC-003 und ACC-004 abschließen?</li>
      <li>Exportplanung parallel oder nach fachlicher Konsolidierung?</li>
    </ul>
  </div>
  <div class="card">
    <h3>Verantwortung und Ressourcen</h3>
    <ul>
      <li>Verantwortliche Reviewrolle benennen</li>
      <li>SAP-GUI-Testumgebung verbindlich bereitstellen</li>
      <li>Kapazität für PT-004 bis PT-007 festlegen</li>
    </ul>
  </div>
</div>

<div class="callout">
  <p><strong>Gewünschtes Ergebnis:</strong> Ein bestätigter nächster Scope mit Verantwortlichkeit, Reihenfolge und überprüfbaren Abschlusskriterien.</p>
</div>

---

## Abkürzungsverzeichnis I – Projekt und Verfahren

| Kürzel | Bedeutung | Verwendung im Projekt |
|--------|-----------|-----------------------|
| AKB | Accessibility Knowledge Base | Wissensplattform und Kennung zentraler Dokumente |
| ACC | Projektkennung für Recherche- und Themenpakete | beispielsweise ACC-001 bis ACC-004 |
| E | Evidenz | einzelne fachliche Aussage innerhalb eines Themenpakets |
| PT | Praxistest | reproduzierbare Prüfung mit Testumgebung, Schritten und Ergebnis |
| ADR | Architecture Decision Record | Begründung einer langfristigen Architekturentscheidung |
| CLI | Command-Line Interface | zentraler Kommandozeilenzugang zum AKB-Tooling |

<div class="callout">
  <p><strong>Lesebeispiel:</strong> ACC-002-E03 bezeichnet die dritte Evidenz des Themenpakets ACC-002; PT-003 ist der zugeordnete Praxistest.</p>
</div>

---

## Abkürzungsverzeichnis II – Dokumentstandards

| Kürzel | Geltungsbereich | Rolle im Workflow |
|--------|-----------------|-------------------|
| GOV-1.0 | Governance-Dokumente | verbindliche Regeln und Verantwortlichkeiten |
| STB-1.0 | Kapitel-Steckbriefe | Planung und Steuerung eines Kapitels |
| RCH-2.0 | Recherchedateien | Evidenzen und Quellen dokumentieren |
| PT-1.0 | Praxistests | reproduzierbare Prüfungen dokumentieren |
| DOC-1.0 | Kapiteldateien | freigegebenen Fachtext aufnehmen |
| TMP-1.0 | Themenpaket-Vorlagen | strukturelle Platzhalter erzeugen |
| TOP-1.0 | Topic Lifecycle | Status, Review und Abschluss begleiten |
| PHS-1.0 | Phasenberichte | abgeschlossene Projektphasen dokumentieren |

<p class="small">Die Versionsnummer ist Bestandteil der jeweiligen Standardkennung.</p>

---

## Abkürzungsverzeichnis III – Fachbegriffe

| Kürzel | Bedeutung | Kontext |
|--------|-----------|---------|
| ITZBund | Informationstechnikzentrum Bund | verantwortlicher Projektkontext |
| SAP GUI | SAP Graphical User Interface | betrachtete Windows-Benutzeroberfläche |
| SRE | SAP Screen Reader Extensions | Erweiterungen für die Screenreader-Nutzung |
| JAWS | Job Access With Speech | Screenreader im Recherchekontext |
| NVDA | NonVisual Desktop Access | Screenreader im Recherchekontext |
| WCAG | Web Content Accessibility Guidelines | internationale Richtlinien zur Web-Barrierefreiheit |
| BITV | Barrierefreie-Informationstechnik-Verordnung | deutscher Rechts- und Anforderungskontext |
| BSI | Bundesamt für Sicherheit in der Informationstechnik | Quellen- und Verwaltungskontext |

---

<!-- _class: lead -->
<!-- _paginate: false -->

<p class="eyebrow">Zusammenfassung</p>

## Die Basis steht. Jetzt entscheidet die fachliche Konsolidierung über den nächsten Reifegrad.

<p class="closing">Kapitel 5 liefert einen belastbaren Anfang. Mit einer konsistenten Statusbasis, geklärter Testumgebung und einem priorisierten Reviewpfad kann aus dem Teilstand schrittweise ein freigabefähiges Referenzhandbuch werden.</p>

**Nächster gemeinsamer Schritt:** Scope, Verantwortung und Reihenfolge bestätigen.
