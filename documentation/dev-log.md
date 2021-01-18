# In diesem Dokument kann man eine chronologische Entwicklung der App sehen

## Date 18/01/21

### Lucas

- einfache Suche Über die Namen der Pflanzen implementiert
- Loginlogik und "neuen-Nutzer-anlegen" in Store umgezogen
- Such funktion in Store implementieren
- überflüssige Props entfernt
- CardContainer um ein Props erweitert um auf bei der Suche auf die gefilterten Pflanzen zuzugreifen
- Header aus den einzelnen Views entfernt und in App.vue eingebunden
- Header dafür umstrukturiert:
    - hat nun keine Props mehr
    - ermittelt den Titel nun selbst anhand der Route
    

### Anton

- Kalendar zum presentaion State zurückgesetzt
- var zu let
- Header zu App.vue verschoben
- tags und user data from main page gelöscht
- api key in Firebase.js mit .env.local Datei ersetzt
- rename PflanzenView.vue zu PlantView.vue und Pfade angepasst
- alte Variablen aus data() gelöscht 


## Date 11/01/21

### Lucas

- neuen Nutzer anlegen eingefügt
- mit Suche Seite begonnen
- Store erweitert -> alle Pflanzendaten werden jetzt im store gespeichert

### Anton

Kalender: 
- Anzeige der Daten gefixed
- Tooltips bei hovern über ein bestimmtes Datum hinzugefügt
- Begonnen den Tooltips informationen hinzuzufügen

### Thomas

- Button zum Pflanzen "Abonnieren" in der PlantView gefixed (Funktionalität muss noch implementiert werden)
- PlantView an den Store angepasst, sodass nicht jedes mal ein neuer Datenbankzugriff gemacht wird


## Date 04/01/21

### Code Review Änderungen

Projektdoku aktualisiert:

- Komponenten beschreibung eingefügt
- konsenstente Namen
- Anforderungen angepasst

Projektstruktur:

- index.js in /store und /router umbenannt

### normale Arbeit

vuex Store:

- Pflanzen eines Nutzers werden jetzt beim einloggen geladen und im Store gespeichert
- entsprechende Anpassungen in Header:

    - laden der Pflanzen beim einloggen

- Anpassung in CardContainer:

    - Pflanzen jetzt aus Store laden in computed Variable

PflanzenView:
- Button Hinzugefügt, mit welchem ein Nutzer eine Pflanze seinem Garten hinzuzufügen kann
- Einen Bug behoben, dass die Bilder der Pflanzen bei Ändern der Festergröße ihr Seitenverhältnis nicht behalten 

## Date 07/12/20

- Veux store angebunden
- login modal erstellt

- Calendar angefangen
- login Funktionalität eingebaut

- PlantView inhalte hinzugefügt
- Header Methode zum Setzen des Titels zugefügt

## Date 30/11/20

Datenbank anbindung:

- UserView lädt jetzt die Daten für den eingeloggten Nutzer
- CardContainer lädt dem Nutzer zugewiesene Pflanzen oder alle 

Calendar erstellung:

- Libraries wie Ant design, Element UI und primevue probiert (kein Erfolg)
- Ziel für die nächste Woche einen Calendar vom Anfang an zu bauen 

## Date 23/11/20

CardContainer:

- Scroll-Schatten hinzugefügt
- wechsel zwischen horizontaler/ vertikaler ausrichtung
- soweit fertig

Nutzer View:

- angefangen
- neue UserInfo komponente begonnen

UserInfo:

- styling begonnen

Firestore:

- erstellt und collections für plants und users angelegt
- in code bei dem CardContainer angebunden

PlantCard:

- Schattenhöhe angepasst

PflanzenView:

- Header hinzugefügt

## Date 16/11/20

erste Code Review:

- TagContainer fertig

neue Komponente begonnen:

- CardContainer

## Date 09/11/20

Die oben genannten Komponenten fertigmachen.<br>

Header Komponente fertig:

- verschiedene Darstellungen für die Seiten, Dropdown Menu für Nutzer Icon

CloudTag Komponente weiterentwickelt:

- style und funktionalität fertig, fehlt noch emit nach oben

Pflanzenkarte weiterentwickelt:

- CSS für responsive Größe implementiert
- bei Klick weiterleitung an eine (bisher prototypisch implementierte) PflanzenView, mit Übergabe der PflanzenID

## Date 02/11/20

Aufteilung der Komponenten. <br>
Drei je für ein Gruppenmitglied:

- Header
- TagContainer
- PflanzenKarte
