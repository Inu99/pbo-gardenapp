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

-> per Klick auf den Nutzerbutton öffnet sich ein Popup:
	- Login/Logout/Register
	- Nutzerprofil ansehen (wenn ein Nutzer angemeldet ist)

### Pflanzenkachel
Input:
- Boolean für groß oder klein
- PflanzenID

Output:
- Name
- Bild
- Wachstumsstadium

### Kategorie-Tag
Input:
- TagID
- selected

Output:
- Name
- Auswahlstatus

### Tag-Container
Input:
- Containerdimensionen
- TagIDs
- (Clickable)

### Kachel-Container
Input:
- Titel
- Vertikal/Horizontal
- Containerdimensionen?
- PflanzenIDs?

Output:
- Titel

### Nutzerinfo-Container
Input:
- NutzerID

Output:
- Name
- Nutzerbeschreibung
- Angemeldet seit
- ...

### Kalender
Input:
- NutzerID

Output:
- Wachstums-/Erntezeiträume der Pflanzen des Nutzers

### TextInput

### KalenderInput
