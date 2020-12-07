# In diesem Dokument kann man eine chronologische Entwicklung der App sehen.

## Date 02/11/20
### Aufteilung den Komponenten.
### Drei je für einen Gruppenmitglied:

- Header
- TagContainer
- PflanzenKarte

## Date 09/11/20
### Die oben genannten Komponenten fertigmachen. <br>
### Header Komponente fertig:
    verschiedene Darstellungen für die Seiten, Dropdown Menu für Nutzer Icon

### CloudTag Komponente weiterentwickelt:
    style und funktionalität fertig, fehlt noch emit nach oben

### Pflanzenkarte weiterentwickelt:
    CSS für responsive Größe implementiert
    bei Klick weiterleitung an eine (bisher prototypisch implementierte) PflanzenView, mit Übergabe der PflanzenID

## Date 16/11/20
erste Code Review: <br>
TagContainer fertig<br>


neue Komponente begonnen: <br>
- CardContainer

## Date 23/11/20

CardContainer: <br>
- Scroll-Schatten hinzugefügt
- wechsel zwischen horizontaler/ vertikaler ausrichtung
- soweit fertig

Nutzer View: <br>
- angefangen
- neue UserInfo komponente begonnen

UserInfo: <br>
- styling begonnen

Firestore: <br>
- erstellt und collections für plants und users angelegt
- in code bei dem CardContainer angebunden

PlantCard <br>
- Schattenhöhe angepasst

PflanzenView <br>
- Header hinzugefügt

## Date 30/11/20

Datenbank anbindung: <br>
- UserView lädt jetzt die Daten für den eingeloggten Nutzer
- CardContainer lädt dem Nutzer zugewiesene Pflanzen oder alle 

Calendar erstellung: <br>
- Libraries wie Ant design, Element UI und primevue probiert (kein Erfolg)
- Ziel für die nächste Woche einen Calendar vom Anfang an zu bauen 


## Date 07/12/20

- Veux store angebunden
- login modal erstellt

- Calendar angefangen
- login Funktionalität eingebaut

- PlantView inhalte hinzugefügt
- Header Methode zum Setzen des Titels zugefügt
