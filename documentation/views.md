## Ansichten in der GardenApp

### Pflanze View

- zeigt Detailsinformationen zu einer Pflanze an
  - Name
  - Winterfest (j/n)
  - Erntezeitraum
  - Sonnenempfindlich (j/n)

- zeigt ein Beispielbild der Pflanze
- zu welcher Kategorie die Pflanze gehört

### Landing View

- zeigt eine kurze Vorschau der Pflanzen im Garten des Nutzers
- zeigt Vorschläge für neue Pflanzen

### Kategorie/Suche View

- zeigt eine Suchleiste und Suchergebnisse

### Nutzer View

- zeigt die Pflanzen, die der Nutzer zu seinem Garten hinzugefügt hat
- zeigt Profilinformationen sowie einen Kalender

### Create View

- zeigt alle nötigen Eingabenfelder um eine neue Pflanze anzulegen

## Linking

- Landing View <---> Nutzer View
- Landing View <---> Kategorie/Suche View
- Landing View <---> Pflanze View
- Pflanze View <---> Create View
- Nutzer View <---> Pflanze View

## Komponenten

### Kopfzeile

- Seitenname
- Seitentyp
- NutzerID

### Planzenkachel

- Boolean für groß oder klein
- PflanzenID

### Kategorie-Tag

- TagID
- selected

### Tag-Container

- Containerdimensionen
- TagIDs
- (Clickable)

### Kachel-Container

- Titel
- Vertikal/Horizontal
- Containerdimensionen?
- PflanzenIDs?

### Nutzerinfo-Container

- NutzerID

### Kalender

- NutzerID

### TextInput

### KalenderInput