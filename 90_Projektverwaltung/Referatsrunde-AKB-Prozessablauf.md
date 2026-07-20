---
marp: true
theme: default
paginate: true
size: 16:9
footer: Accessibility Knowledge Base · Prozessablauf
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
    --petrol: #0A5F6C;
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
    color: var(--petrol);
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
    color: var(--petrol);
    font-size: 58px;
    line-height: 1.08;
    letter-spacing: -1.2px;
    margin: 0 0 28px;
  }
  h2 {
    color: var(--petrol);
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
    color: var(--petrol);
  }
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 20px;
  }
  th {
    background: var(--petrol);
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
    color: var(--petrol);
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
  .grid.metrics {
    column-gap: 28px;
    row-gap: 30px;
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
    background: var(--petrol);
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
  .technical-note {
    margin-top: 32px;
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

<!-- _class: lead -->

<!-- _paginate: false -->

<p class="eyebrow">Referatsrunde · Gesamtprozess</p>

# Kompletter Ablauf der Accessibility Knowledge Base

<p class="subtitle">Vom Themenpaket über Recherche, Test, Review und Freigabe bis zur Veröffentlichung</p>

**Stand:** 20.07.2026  
**Bereich:** AKB-Workflow, TOP-1.0, TMP-1.0, AKB-006

---

## Was wir heute vorstellen

<div class="grid three">
  <div class="card">
    <h3>Unser Prozessmodell</h3>
    <p>Ein Thema entsteht aus einer leeren Struktur und wird über Recherche, Test, Review und Freigabe zu einer belastbaren Dokumentation.</p>
  </div>
  <div class="card">
    <h3>Unsere Themenfelder</h3>
    <p>Governance, Themenpakete, Praxistests und Kapitel bilden den fachlichen und organisatorischen Rahmen.</p>
  </div>
  <div class="card">
    <h3>Unser weiterer Verlauf</h3>
    <p>Die nächste Stufe ist die konsistente Überführung von Struktur in freigabefähige Inhalte.</p>
  </div>
</div>

<div class="callout">
  <p><strong>Kernaussage:</strong> Ein neues Thema wird nicht direkt „voll“ dokumentiert. Es entsteht schrittweise aus einer transparenten Struktur.</p>
</div>

---

## Das Projekt in einem Bild

<div class="grid three">
  <div class="card">
    <h3>Leere Struktur</h3>
    <p>Das Thema erhält über TMP-1.0 und die AKB CLI eine nachvollziehbare Basis aus Pflichtdokumenten.</p>
  </div>
  <div class="card">
    <h3>Fachliche Aufwertung</h3>
    <p>Recherche, Evidenz, Praxistests und Redaktion füllen die Vorlage mit belastbaren Inhalten.</p>
  </div>
  <div class="card">
    <h3>Freigabe und Veröffentlichung</h3>
    <p>Review, Validierung und Übernahme in das Referenzhandbuch schließen den Prozess ab.</p>
  </div>
</div>

<div class="callout">
  <p><strong>Qualitätsprinzip:</strong> Qualität hat Vorrang vor Vollständigkeit. Kein Inhalt wird freigegeben, ohne Nachweis.</p>
</div>

---

## Kennzahlen des Prozessstands

<div class="grid four metrics">
  <div class="metric"><strong>7</strong><span>Prozessschritte</span></div>
  <div class="metric"><strong>1</strong><span>Pflichtstruktur pro Thema</span></div>
  <div class="metric"><strong>3</strong><span>Pflichtbereiche: Recherche, Test, Kapitel</span></div>
  <div class="metric"><strong>2</strong><span>Freigabeebenen: fachlich und organisatorisch</span></div>
</div>

<p class="small center technical-note"><strong>Hinweis:</strong> Der Prozess ist vollständig nachvollziehbar. Jede Stufe ist an prüfbare Dokumente und Zustände gebunden.</p>

---

## Qualitäts- und Veröffentlichungsmodell

<div class="flow">
  <div class="flow-step"><strong>Recherche</strong><span>Quellen und Evidenzen dokumentieren</span></div>
  <div class="arrow">→</div>
  <div class="flow-step"><strong>Validierung</strong><span>Quellenbezug und Praxistests prüfen</span></div>
  <div class="arrow">→</div>
  <div class="flow-step"><strong>Redaktion</strong><span>Freigabefähigen Fachtext erstellen</span></div>
  <div class="arrow">→</div>
  <div class="flow-step"><strong>Veröffentlichung</strong><span>Kapitel in das Referenzhandbuch übernehmen</span></div>
</div>

<div class="grid three" style="margin-top: 26px;">
  <div class="card"><h3>Steckbrief</h3><p>Planung und Steuerung</p></div>
  <div class="card"><h3>Recherche und Test</h3><p>Nachweise und reproduzierbare Prüfung</p></div>
  <div class="card"><h3>Kapitel</h3><p>Einzige Ebene für veröffentlichten Fachtext</p></div>
</div>

---

## Schritt 1 · Themenpaket anlegen

<div class="grid two">
  <div class="card">
    <h3>Startpunkt</h3>
    <ul>
      <li>Ein neues Thema erhält über die AKB CLI eine Themenpaketstruktur.</li>
      <li>TMP-1.0 legt Pflichtstruktur, Platzhalter und Mindestdokumente fest.</li>
      <li>Recherche, Praxistest, Kapitel, Steckbrief und Projektstatus werden vorbereitet.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Ergebnis</h3>
    <ul>
      <li>Die organisatorische Basis ist vorhanden.</li>
      <li>Der Bearbeitungsstatus wird als Draft oder Research gesetzt.</li>
      <li>Die fachliche Arbeit beginnt erst nach der strukturellen Anlage.</li>
    </ul>
  </div>
</div>

<div class="callout">
  <p><strong>Wichtiger Punkt:</strong> Der Initialschritt erzeugt keine fachlichen Inhalte, sondern nur einen nachvollziehbaren Aufbau.</p>
</div>

---

## Schritt 2 · Recherche und Evidenz

<div class="grid two">
  <div class="card">
    <h3>Arbeitsweise</h3>
    <ul>
      <li>Primärquellen werden gesammelt und dokumentiert.</li>
      <li>Jede fachliche Aussage erhält eine eigene Evidenz.</li>
      <li>Offene Fragen oder Unsicherheiten werden transparent markiert.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Ergebnis</h3>
    <ul>
      <li>Recherchedatei wird aufgebaut.</li>
      <li>Quellenverknüpfung und Bearbeitungsstand bleiben nachvollziehbar.</li>
      <li>Nur belegte Aussagen werden in späteren Schritten weiterverarbeitet.</li>
    </ul>
  </div>
</div>

<div class="callout">
  <p><strong>Regel:</strong> Nicht geprüfte Zusammenfassungen oder Vermutungen dürfen nicht als fachliche Aussage gelten.</p>
</div>

---

## Schritt 3 · Praxistest und Validierung

<div class="grid two">
  <div class="card">
    <h3>Vorbereitung</h3>
    <ul>
      <li>Ein Praxistest wird vorbereitet, reproduzierbar beschrieben und mit Schritten dokumentiert.</li>
      <li>Testergebnisse werden getrennt von der fachlichen Bewertung festgehalten.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Durchführung</h3>
    <ul>
      <li>Der Test wird nachvollziehbar durchgeführt.</li>
      <li>Beobachtungen, Ergebnisse und Einschränkungen werden protokolliert.</li>
      <li>Ein fehlender oder unvollständiger Test blockiert die Freigabe der betroffenen Aussage.</li>
    </ul>
  </div>
</div>

<div class="callout">
  <p><strong>Wichtige Funktion:</strong> Ein Praxistest ist nicht nur ein Nachweis, sondern ein Bestandteil der fachlichen Qualitätssicherung.</p>
</div>

---

## Schritt 4 · Dokumentation und Redaktion

<div class="grid two">
  <div class="card">
    <h3>Redaktion</h3>
    <ul>
      <li>Kapitel werden in freigabefähiger Form aufgebaut.</li>
      <li>Steckbrief, Kapitelstand und Status werden mitgeführt.</li>
      <li>Sprache, Struktur und Verweise werden an den Dokumentationsstandards ausgerichtet.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Technische Prüfung</h3>
    <ul>
      <li>Markdown-Validierung und weitere Prüfungen werden durchgeführt.</li>
      <li>Die Struktur bleibt konsistent und nachvollziehbar.</li>
      <li>Fehlerhafte oder unvollständige Inhalte werden nicht stillschweigend weitergereicht.</li>
    </ul>
  </div>
</div>

<div class="callout">
  <p><strong>Fachliche Grenze:</strong> Ein Kapitel darf erst als veröffentlicht gelten, wenn die zugehörigen Aussagen geprüft und freigegeben wurden.</p>
</div>

---

## Schritt 5 · Review und Freigabe

<div class="grid three">
  <div class="card">
    <h3>Selbstprüfung</h3>
    <p>Autor prüft Vollständigkeit, Struktur, Quellen und Rechtschreibung.</p>
  </div>
  <div class="card">
    <h3>Fachliche Prüfung</h3>
    <p>Inhalt, Begründung, Vollständigkeit und Einschränkungen werden fachlich bewertet.</p>
  </div>
  <div class="card">
    <h3>Quellen-, Sprach- und Barrierefreiheitsprüfung</h3>
    <p>Quellen, Terminologie und Zugänglichkeit werden vor der Veröffentlichung geprüft.</p>
  </div>
</div>

<div class="callout">
  <p><strong>Freigabekriterium:</strong> Eine Evidenz darf erst in das Referenzhandbuch übernommen werden, wenn sie vollständig geprüft und freigegeben wurde.</p>
</div>

---

## Schritt 6 · Veröffentlichung und Übergabe

<div class="grid two">
  <div class="card">
    <h3>Veröffentlichung</h3>
    <ul>
      <li>Freigegebene Inhalte werden in das Referenzhandbuch übernommen.</li>
      <li>Abgeleitete Inhalte können in Confluence oder andere Ausgabekanäle übergehen.</li>
      <li>Die veröffentlichte Fassung bleibt Bestandteil der dokumentierten Baseline.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Projektsteuerung</h3>
    <ul>
      <li>Status, Sprint und Phase werden aktualisiert.</li>
      <li>Änderungen werden nachvollziehbar in Projektverwaltung und Changelog dokumentiert.</li>
      <li>Wenn nötig, folgt eine neue Reviewrunde für Änderungen.</li>
    </ul>
  </div>
</div>

---

## Schritt 7 · Abschluss und Archivierung

<div class="grid two">
  <div class="card">
    <h3>Abschluss</h3>
    <ul>
      <li>Topic Finish erzeugt organisatorische Abschlussartefakte.</li>
      <li>Validierung, Phase und Sprint Summary werden erzeugt.</li>
      <li>Der Abschluss dokumentiert nur den organisatorischen Abschluss, nicht eine fachliche Freigabe.</li>
    </ul>
  </div>
  <div class="card">
    <h3>Archivierung</h3>
    <ul>
      <li>Abgeschlossene oder abgelöste Themenpakete können organisatorisch abgelegt werden.</li>
      <li>Die fachliche Historie bleibt erhalten.</li>
      <li>Spätere Änderungen erfolgen nur noch durch einen neuen, nachvollziehbaren Prozessschritt.</li>
    </ul>
  </div>
</div>

<div class="callout">
  <p><strong>Abschlussregel:</strong> Ein Themenpaket gilt erst dann als abgeschlossen, wenn die Struktur, die Prüfschritte, die Dokumentation und die Nachvollziehbarkeit vollständig vorliegen.</p>
</div>

---

## Rollen im Prozess

<div class="grid three">
  <div class="card">
    <h3>Autor</h3>
    <p>Erstellt fachliche Inhalte auf Basis freigegebener Evidenzen.</p>
  </div>
  <div class="card">
    <h3>Fachredaktion</h3>
    <p>Prüft Sprache, Struktur und Einhaltung der Dokumentationsstandards.</p>
  </div>
  <div class="card">
    <h3>Reviewer</h3>
    <p>Prüft Nachvollziehbarkeit, Quellenbezug und Freigabereife.</p>
  </div>
  <div class="card">
    <h3>Praxistester</h3>
    <p>Führt reproduzierbare Prüfungen durch und dokumentiert Ergebnisse.</p>
  </div>
  <div class="card">
    <h3>Automatisierungsagent</h3>
    <p>Erzeugt Struktur, pflegt Status und führt Validierung aus.</p>
  </div>
  <div class="card">
    <h3>Projektteam</h3>
    <p>Steuert Sprint, Phase, Baseline und organisatorische Abschlussartefakte.</p>
  </div>
</div>

---

## Fazit

<div class="card">
  <h3>Der komplette Ablauf</h3>
  <ul>
    <li>Start mit der Struktur eines Themenpakets.</li>
    <li>Fortführung durch Recherche, Evidenz, Test und Redaktion.</li>
    <li>Prüfung über Review, Freigabe und Validierung.</li>
    <li>Abschluss über Veröffentlichung, Projektstatus und Archivierung.</li>
  </ul>
</div>

<div class="callout">
  <p><strong>Zusammenfassung:</strong> Der Prozess ist nicht nur ein Dokumentationsweg, sondern ein kontrollierter Qualitätsprozess für belastbare und nachvollziehbare Fachinhalte.</p>
</div>
