# Barrierefreiheit

## 5.1 Überblick

Die SAP GUI for Windows bietet verschiedene Funktionen, die eine barrierearme Nutzung der Anwendung unterstützen. Ziel dieser Funktionen ist es, die Bedienbarkeit für Menschen mit unterschiedlichen Einschränkungen zu verbessern und die Nutzung assistiver Technologien zu ermöglichen.

Zu den unterstützten Bereichen gehören insbesondere:

- Konfigurationsmöglichkeiten für die Barrierefreiheit
- Unterstützung von Screenreadern
- Tastaturbedienung
- Anpassung der Darstellung
- verschiedene Themes
- weitere Einstellungen zur Verbesserung der Zugänglichkeit

Der Umfang der verfügbaren Funktionen kann abhängig von der eingesetzten Version der SAP GUI for Windows sowie der gewählten Konfiguration variieren.

Die nachfolgenden Abschnitte erläutern die einzelnen Funktionen, ihre Konfiguration, bekannte Einschränkungen sowie Empfehlungen für den praktischen Einsatz.

> [!NOTE]
> Dieses Kapitel bietet einen Überblick über die verfügbaren Funktionen. Detaillierte Informationen werden in den folgenden Abschnitten behandelt.

## 5.2 Accessibility Mode

Der Accessibility Mode ist Bestandteil der SAP GUI for Windows und unterstützt eine barrierefreie Nutzung der Anwendung.

Er ist insbesondere für den Einsatz assistiver Technologien vorgesehen und bildet die Grundlage für verschiedene Funktionen zur verbesserten Zugänglichkeit.

### 5.2.1 Aktivierung

Der Accessibility Mode wird in den SAP-GUI-Optionen aktiviert.

Der Menüpfad lautet:

`Accessibility & Scripting → Accessibility`

Dort wird die Option `Use Accessibility Mode` aktiviert.

### 5.2.2 Neustartverhalten

Eine Änderung am Accessibility Mode wird erst nach einem Neustart von SAP Logon beziehungsweise SAP Logon Pad wirksam.

Dies betrifft sowohl die Aktivierung als auch die Deaktivierung des Accessibility Mode.

### 5.2.3 Weiterführende Informationen

Dieses Kapitel beschreibt ausschließlich den Accessibility Mode.

Weiterführende Informationen zu den Einstellungen zur Barrierefreiheit, unterstützten Screenreadern und SAP Screen Reader Extensions werden in den folgenden Unterkapiteln behandelt.

## 5.3 Einstellungen zur Barrierefreiheit

> [!IMPORTANT]
> Dieser Abschnitt basiert derzeit ausschließlich auf den dokumentierten Herstellerinformationen.
> Die zugehörigen Praxistests konnten aufgrund einer fehlenden SAP-GUI-Testumgebung noch nicht durchgeführt werden.
> Eine fachliche Freigabe erfolgt nach Abschluss der Praxistests.

Dieser Abschnitt ist ein herstellerbasierter Entwurf.

Dieser Abschnitt beschreibt die von SAP dokumentierten Einstellungen zur Barrierefreiheit in der SAP GUI for Windows.

Die Darstellung beschränkt sich auf die fachliche Funktion der Einstellungen. Technische Implementierungsdetails sind nicht Bestandteil dieses Abschnitts.

### 5.3.1 Use Accessibility Mode

SAP dokumentiert die Einstellung `Use Accessibility Mode` im Bereich `Accessibility`.

SAP dokumentiert, dass diese Einstellung aktiviert sein muss, damit die weiteren Optionen auf der Accessibility-Seite aktiviert werden können.

### 5.3.2 Include read-only and disabled elements in tab chain

SAP dokumentiert die Einstellung `Include read-only and disabled elements in tab chain` als Option, die nach dem Umschalten des Accessibility Mode zur Auswahl verfügbar ist.

SAP dokumentiert, dass deaktivierte und schreibgeschützte Elemente beim Fokussieren per Tabulatortaste nicht übersprungen werden.

### 5.3.3 Display symbols in lists as letters

SAP dokumentiert die Einstellung `Display symbols in lists as letters` als Option, die nach dem Umschalten des Accessibility Mode zur Auswahl verfügbar ist.

SAP dokumentiert, dass Buchstaben im Unterschied zu Symbolen durch einen Screenreader identifiziert werden können.

SAP dokumentiert, dass Symbole in Listen zum Beispiel zum Auf- oder Zuklappen einer Unterstruktur verwendet werden.

SAP dokumentiert, dass diese Symbole für einen Screenreader unbekannte Zeichen darstellen können und daher nicht identifiziert werden können.

SAP dokumentiert, dass diese Symbole durch Buchstaben wie `4` und `5` ersetzt werden können. Der Screenreader kann diese Ersetzungen lesen und zusätzliche Informationen zu den Symbolen in der Liste ausgeben.

### 5.3.4 Dialog box for messages

SAP dokumentiert die Einstellung `Dialog box for messages` mit Verweis auf `Notifications`.

SAP ordnet dieser Einstellung die Anzeige von Erfolgsmeldungen, Warnmeldungen und Fehlermeldungen in Dialogfeldern zu.

SAP dokumentiert, dass diese Meldungen bei ausgewählter Option in der Statusleiste und zusätzlich in einem Dialogfeld angezeigt werden, das ausdrücklich bestätigt werden muss.

SAP dokumentiert für diese Optionen, dass sie hauptsächlich verwendet werden, wenn der Accessibility Mode verwendet wird.

### 5.3.5 Set F4 help to modal dialog

SAP dokumentiert die Einstellung `Set F4 help to modal dialog`.

SAP dokumentiert, dass diese Einstellung direkt in jedem System definiert wird und sich nicht im Optionsdialog in SAP Logon befindet.

SAP dokumentiert den Menüpfad `Help > Settings > F4 Help`.

### 5.3.6 Open Office documents outplace for better screen reader support

SAP dokumentiert die Einstellung `Open Office documents outplace for better screen reader support` im Zusammenhang mit Desktop Office Integration.

SAP dokumentiert, dass ein Dokument, das normalerweise innerhalb des SAP-GUI-Fensters angezeigt würde, stattdessen außerhalb des SAP-GUI-Fensters angezeigt werden kann.

SAP dokumentiert, dass dies in vielen Fällen die Erkennung und Handhabung von Dokumenten durch den Screenreader verbessert.

SAP dokumentiert außerdem, dass bei Verwendung dieser Einstellung einige Funktionen der Desktop Office Integration nicht verfügbar sind.

SAP dokumentiert unter anderem, dass so angezeigte Office-Dokumente nicht mit Formatierungen bereitgestellt werden und dass keine Daten aus Office-Dokumenten in die SAP GUI übertragen werden können.

SAP dokumentiert, dass diese Einstellung daher nur nützlich ist, wenn Dokumente nur angezeigt werden sollen.

### 5.3.7 Weiterführende Informationen

Weiterführende technische Informationen, Registry-Einstellungen und Evidenznachweise sind in den zugehörigen Recherchedateien dokumentiert.
