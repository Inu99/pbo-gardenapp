## Ansichten in der GardenApp

### Pflanze View
![1_Pflanze_View](/documentation/images/1_Pflanze_View.png)
- zeigt Detailsinformationen zu einer Pflanze an
  - Name
  - Winterfest (j/n)
  - Erntezeitraum
  - Sonnenempfindlich (j/n)

- zeigt ein Beispielbild der Pflanze
- zu welcher Kategorie die Pflanze gehört

### Landing View
![2_Landing_View](/documentation/images/2_Landing_View.png)
- zeigt eine kurze Vorschau der Pflanzen im Garten des Nutzers
- zeigt Vorschläge für neue Pflanzen

### Kategorie/Suche View
![3_Kategorie_View](/documentation/images/3_Kategorie_View.png)
- zeigt eine Suchleiste und Suchergebnisse

### Nutzer View
![4_Nutzer_View](/documentation/images/4_Nutzer_View.png)
- zeigt die Pflanzen, die der Nutzer zu seinem Garten hinzugefügt hat
- zeigt Profilinformationen sowie einen Kalender

### Create View
![5_Create_View](/documentation/images/5_Create_View.png)
- zeigt alle nötigen Eingabenfelder um eine neue Pflanze anzulegen

## Linking

- Landing View <---> Nutzer View
- Landing View <---> Kategorie/Suche View
- Landing View <---> Pflanze View
- Pflanze View <---> Create View
- Nutzer View <---> Pflanze View

## Komponenten

### Header

zeigt alle wichtigen Informationen über die aktuelle Seite und ermöglicht die Navigation

- Seitenname
- Seitentyp
- NutzerID

-> per Klick auf den Nutzerbutton öffnet sich ein Popup:

- Login/Logout/Register
- Nutzerprofil ansehen (wenn ein Nutzer angemeldet ist)

### PlantCard
![Panel](/documentation/images/Panel.png)
![Panel-small](/documentation/images/Panel_small.png)
Vorschaubild einer Pflanze, zeigt das Bild und den Namen der Pflanze. Per klick darauf gelangt man zur Detailansicht der Pflanze.

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

### TagContainer

Beinhaltet Tags.

Input:

- Containerdimensionen
- TagIDs
- (Clickable)

### CardContainer

Ordnet die PlantCards entweder horizontal oder vertikal an und ermöglicht das Scrollen.

Input:

- Titel
- Vertikal/Horizontal
- Containerdimensionen?
- PflanzenIDs?

Output:

- Titel

### UserInfo

Zeigt die wichtigsten Information über den Nutzer an.

Input:

- NutzerID

Output:

- Name
- Nutzerbeschreibung
- Angemeldet seit
- ...

### PlantCalender

Zeigt den Ernte- sowie Pflanzzeitraum der Pflanzen an.

Input:

- NutzerID

Output:

- Wachstums-/Erntezeiträume der Pflanzen des Nutzers

### TextInput

Ein Eingabefeld für Text. Wird für Eingaben wie Suchbegriffe oder Anmeldeinformationen verwendet.

Output:

- String (Nutzereingabe)

### KalenderInput

Ein Kalender, welcher zum Anzeigen und Hervorheben von Zeiträumen verwendet wird.  
