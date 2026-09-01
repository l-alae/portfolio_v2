# Portfolio Content Editing Guide

This file collects the current user-visible copy in one place for editorial review.

> Editing this Markdown file does **not** update the website automatically. Make your changes here, then ask Codex to sync `CONTENT.md` back into `src/i18n/en.js` and `src/i18n/fr.js`.

## How to edit

- Each section names the route or interface area where the copy appears.
- The source line shows the exact translation key and file used by the app.
- Keep English and French objects structurally identical.
- Keep technology names, email addresses, and URLs unchanged unless the underlying information changes.
- Image filenames and project routing metadata live in the code and are intentionally not duplicated here.

## Home page

Appears in: **/**

#### English

Source: `src/i18n/en.js` → `home`

```json
{
  "label": "DATA ENGINEERING · RABAT, MOROCCO",
  "name": "Alae Laita",
  "lede": "Final-year data engineering student at INPT Rabat. I build the layer between raw data and something a person can actually decide with — pipelines, models, and the interfaces that make either one legible.",
  "ctaProjects": "See the work",
  "ctaContact": "Get in touch",
  "selectedWork": "SELECTED WORK",
  "allProjects": "ALL PROJECTS"
}
```

#### French

Source: `src/i18n/fr.js` → `home`

```json
{
  "label": "INGÉNIERIE DES DONNÉES · RABAT, MAROC",
  "name": "Alae Laita",
  "lede": "Étudiant en dernière année d’ingénierie des données à l’INPT de Rabat. Je travaille sur le clustering, les pipelines et tout ce qui, loin des projecteurs, rend les données réellement exploitables — des modèles de segmentation qui restent fiables sur des données inédites et une orchestration qui tourne sans surveillance.",
  "ctaProjects": "Voir les projets",
  "ctaContact": "Me contacter",
  "selectedWork": "PROJETS SÉLECTIONNÉS",
  "allProjects": "TOUS LES PROJETS"
}
```

## Experience page

Appears in: **/experience**

#### English

Source: `src/i18n/en.js` → `experience`

```json
{
  "eyebrow": "EXPERIENCE",
  "title": "Experience",
  "lightbox": {
    "close": "Close image"
  },
  "entries": {
    "pfe": {
      "dates": "MAR — AUG 2026",
      "location": "CASABLANCA, MOROCCO",
      "role": "End-of-studies project",
      "org": "DA TECHNOLOGIES — AKWA GROUP / AFRIQUIA GAZ",
      "body": [
        {
          "lead": "Six months building a station profiling system for Afriquia Gaz across 660 service stations.",
          "rest": " The core was a dual-pipeline K-Means clustering architecture in PySpark, running two parallel treatments of the same transaction data — one deleting outliers, one winsorizing them — because the choice of treatment changed which segments the model could see at all. The industrial and fleet segment, Stations Spécialisées, only survived under winsorization; deleting outliers erased it."
        },
        {
          "lead": "Seasonality was modelled separately, then used as a second basis for clustering.",
          "rest": " I fit OLS regressions per station using Fourier terms for annual cycles and explicit encoding of Hijri calendar holidays, then clustered stations again on their calendar response — separating stations that move with Ramadan and Aïd from those that do not. I also built and delivered a SARIMAX(1,1,1) model forecasting weekly tonnage for Afriquia Gaz depositaires."
        },
        {
          "lead": "The analysis reached the business as Tableau dashboards.",
          "rest": " An operational overview, a custom-formatted view, and a segmentation-rules page setting out the thresholds behind each segment, the station-type breakdown, transaction types, and six years of history per segment."
        },
        {
          "lead": "The second half of the project generalised the work into Profiling.ai, a multi-tenant profiling-as-a-service platform.",
          "rest": " React and Vite on the front, Node and Express behind it, a Python clustering engine underneath, with Afriquia Gaz as its first client. Clients import their own data, run a guided elbow and silhouette analysis to choose k rather than guessing at it, configure preprocessing against per-feature skewness diagnostics, and keep a persistent history of every run. Porting the notebook methodology into the platform is what made the difference: the original pipeline scaled features and nothing else, and put 81.5% of records into a single cluster. Winsorization at P98, log transformation and feature weighting fixed it."
        }
      ],
      "tech": [
        "PySpark",
        "Python",
        "scikit-learn",
        "K-Means",
        "SARIMAX",
        "OLS",
        "Tableau",
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "SQL"
      ],
      "images": {
        "rules": {
          "caption": "SEGMENTATION RULES — THRESHOLDS, STATION TYPES, SIX-YEAR HISTORY PER SEGMENT"
        },
        "dashboard": {
          "caption": "MAIN DASHBOARD"
        },
        "custom": {
          "caption": "CUSTOM-FORMATTED DASHBOARD"
        }
      }
    },
    "ministry": {
      "dates": "INTERNSHIP",
      "location": "MOROCCO",
      "role": "Data science internship",
      "org": "MINISTÈRE DU TRANSPORT ET DE LA LOGISTIQUE",
      "body": [
        "Exploration, cleaning and structuring of datasets drawn from several departments, then building and evaluating machine learning models to anticipate business closures.",
        "Most of the gain came from the unglamorous half: improving dataset quality and running hyperparameter optimisation until the models held steady across evaluations rather than only on a lucky split."
      ]
    },
    "aeinpt": {
      "dates": "2022",
      "location": "INPT RABAT",
      "role": "Vice-President, then President",
      "org": "AEINPT — STUDENT ASSOCIATION OF INPT",
      "body": [
        "Led student initiatives and coordinated teams across departments.",
        "Organised the Olympiade INPT, an event with more than 6000 participants, covering technical coordination, logistics and communication."
      ]
    }
  }
}
```

#### French

Source: `src/i18n/fr.js` → `experience`

```json
{
  "eyebrow": "EXPÉRIENCE",
  "title": "Expérience",
  "lightbox": {
    "close": "Fermer l’image"
  },
  "entries": {
    "pfe": {
      "dates": "MARS — AOÛT 2026",
      "location": "CASABLANCA, MAROC",
      "role": "Projet de fin d’études",
      "org": "DA TECHNOLOGIES — AKWA GROUP / AFRIQUIA GAZ",
      "body": [
        {
          "lead": "Six mois consacrés à la création d’un système de profilage pour les 660 stations-service du réseau Afriquia Gaz.",
          "rest": " Le cœur du projet reposait sur une architecture de clustering K-Means à deux pipelines sous PySpark, appliquant en parallèle deux traitements aux mêmes transactions : suppression des valeurs aberrantes d’un côté, winsorisation de l’autre. Ce choix changeait directement les segments que le modèle pouvait révéler. Le profil industriel et flotte, Stations Spécialisées, ne subsistait qu’avec la winsorisation ; la suppression des valeurs extrêmes le faisait disparaître."
        },
        {
          "lead": "La saisonnalité a été modélisée séparément, puis utilisée comme second axe de clustering.",
          "rest": " J’ai ajusté des régressions OLS par station avec des termes de Fourier pour les cycles annuels et un encodage explicite des fêtes du calendrier hégirien, avant de regrouper à nouveau les stations selon leur réaction au calendrier — en distinguant celles qui évoluent avec le Ramadan et l’Aïd de celles qui y sont peu sensibles. J’ai également développé et livré aux dépositaires d’Afriquia Gaz un modèle SARIMAX(1,1,1) de prévision du tonnage hebdomadaire."
        },
        {
          "lead": "L’analyse a été mise à disposition des équipes métier sous forme de tableaux de bord Tableau.",
          "rest": " Une vue opérationnelle, un tableau de bord au format personnalisé et une page consacrée aux règles de segmentation présentaient les seuils de chaque segment, la répartition des types de stations et de transactions, ainsi que six années d’historique par profil."
        },
        {
          "lead": "La seconde moitié du projet a généralisé ce travail dans Profiling.ai, une plateforme mutualisée de profilage à la demande.",
          "rest": " React et Vite côté interface, Node et Express côté serveur, avec un moteur de clustering Python et Afriquia Gaz comme premier client. Les utilisateurs importent leurs propres données, choisissent k à partir d’une analyse guidée du coude et du coefficient de silhouette, règlent le prétraitement selon l’asymétrie de chaque variable et conservent l’historique de leurs exécutions. Le passage du notebook à la plateforme a fait toute la différence : le pipeline initial se contentait de standardiser les variables et regroupait 81.5% des observations dans un seul cluster. Une winsorisation au P98, une transformation logarithmique et une pondération des variables ont corrigé ce déséquilibre."
        }
      ],
      "tech": [
        "PySpark",
        "Python",
        "scikit-learn",
        "K-Means",
        "SARIMAX",
        "OLS",
        "Tableau",
        "React",
        "Node.js",
        "Express",
        "PostgreSQL",
        "SQL"
      ],
      "images": {
        "rules": {
          "caption": "RÈGLES DE SEGMENTATION — SEUILS, TYPES DE STATIONS ET SIX ANS D’HISTORIQUE PAR SEGMENT"
        },
        "dashboard": {
          "caption": "TABLEAU DE BORD PRINCIPAL"
        },
        "custom": {
          "caption": "TABLEAU DE BORD AU FORMAT PERSONNALISÉ"
        }
      }
    },
    "ministry": {
      "dates": "STAGE",
      "location": "MAROC",
      "role": "Stage en data science",
      "org": "MINISTÈRE DU TRANSPORT ET DE LA LOGISTIQUE",
      "body": [
        "Exploration, nettoyage et structuration de jeux de données issus de plusieurs directions, puis conception et évaluation de modèles de machine learning destinés à anticiper les cessations d’activité.",
        "L’essentiel des progrès est venu du travail le moins visible : améliorer la qualité des données et pousser l’optimisation des hyperparamètres jusqu’à obtenir des performances stables d’une évaluation à l’autre, plutôt qu’un bon résultat sur une seule séparation favorable."
      ]
    },
    "aeinpt": {
      "dates": "2022",
      "location": "INPT RABAT",
      "role": "Vice-Président, puis Président",
      "org": "AEINPT — ASSOCIATION DES ÉTUDIANTS DE L’INPT",
      "body": [
        "Pilotage d’initiatives étudiantes et coordination d’équipes issues de plusieurs départements.",
        "Organisation de l’Olympiade INPT, un événement réunissant plus de 6 000 participants, de la coordination technique à la logistique et à la communication."
      ]
    }
  }
}
```

## Projects index

Appears in: **/projects**

#### English

Source: `src/i18n/en.js` → `projectIndex`

```json
{
  "eyebrow": "PROJECTS",
  "title": "Projects",
  "lede": "Selected work across data engineering, machine learning and the interfaces that make both usable."
}
```

#### French

Source: `src/i18n/fr.js` → `projectIndex`

```json
{
  "eyebrow": "PROJETS",
  "title": "Projets",
  "lede": "Une sélection de travaux en ingénierie des données, machine learning et conception d’interfaces qui rendent ces systèmes utilisables."
}
```

## Project detail shared labels

Appears in: **/projects/:slug**

#### English

Source: `src/i18n/en.js` → `projectDetail`

```json
{
  "eyebrow": "PROJECT",
  "back": "← ALL PROJECTS",
  "closeImage": "Close image",
  "liveDemo": "SEE LIVE DEMO",
  "openLiveDemo": "Open live demo",
  "source": "SOURCE"
}
```

#### French

Source: `src/i18n/fr.js` → `projectDetail`

```json
{
  "eyebrow": "PROJET",
  "back": "← TOUS LES PROJETS",
  "closeImage": "Fermer l’image",
  "liveDemo": "VOIR LA DÉMO",
  "openLiveDemo": "Ouvrir la démo",
  "source": "CODE SOURCE"
}
```

## Capital Bikeshare project

Appears in: **/projects/capital-bikeshare**

#### English

Source: `src/i18n/en.js` → `projects.capitalBikeshare`

```json
{
  "title": "Capital Bikeshare — Station Segmentation",
  "blurb": "Five interpretable station types derived from usage alone across 589 stations and 15.4M trips, holding 81.5% stability on unseen data.",
  "lede": "Every docked Capital Bikeshare station in Washington DC, grouped by how it is actually used, from 15.4 million trips — with the clustering running live in the browser so you can change the model and watch the map respond.",
  "stats": [
    {
      "label": "STATIONS",
      "value": "589"
    },
    {
      "label": "TRIPS",
      "value": "15,361,854"
    },
    {
      "label": "WINDOW",
      "value": "2022-01 → 2026-07"
    },
    {
      "label": "FIT / HOLDOUT",
      "value": "2025-07 / 2025-08–2026-07"
    },
    {
      "label": "HOLDOUT STABILITY",
      "value": "81.5%"
    }
  ],
  "tech": [
    "Python",
    "pandas",
    "scikit-learn",
    "K-Means",
    "PCA",
    "statsmodels",
    "React",
    "Vite",
    "Leaflet",
    "Recharts",
    "Web Workers"
  ],
  "table": {
    "label": "Capital Bikeshare cluster summary",
    "columns": {
      "cluster": "Cluster",
      "stations": "Stations",
      "memberShare": "Member share",
      "weekdayPeak": "Weekday peak",
      "medianTrips": "Median trips"
    },
    "rows": [
      {
        "cluster": "Commuter origin",
        "stations": "204",
        "memberShare": "61%",
        "weekdayPeak": "departures 08:00",
        "medianTrips": "10,466"
      },
      {
        "cluster": "Dense residential core",
        "stations": "132",
        "memberShare": "67%",
        "weekdayPeak": "departures 18:00",
        "medianTrips": "73,745"
      },
      {
        "cluster": "Employment destination",
        "stations": "118",
        "memberShare": "63%",
        "weekdayPeak": "arrivals 08:00",
        "medianTrips": "43,434"
      },
      {
        "cluster": "Peripheral recreational",
        "stations": "89",
        "memberShare": "41%",
        "weekdayPeak": "departures 17:00",
        "medianTrips": "2,232"
      },
      {
        "cluster": "Monumental leisure",
        "stations": "46",
        "memberShare": "39%",
        "weekdayPeak": "departures 17:00",
        "medianTrips": "48,746"
      }
    ]
  },
  "images": {
    "header": {
      "caption": "HEADER AND MAP — 589 STATIONS, 15,361,854 TRIPS, JANUARY 2022 TO JULY 2026"
    },
    "controls": {
      "caption": "MOVE THE K SLIDER OR SWITCH OFF A FEATURE BLOCK AND K-MEANS REFITS IN THE BROWSER, ON ALL 589 STATIONS IN 90 DIMENSIONS"
    },
    "clusters": {
      "caption": "THE FIVE STATION TYPES AND THEIR DAILY TRIP VOLUMES. THE DASHED LINE MARKS THE AUGUST 2025 RECORDING CHANGE"
    },
    "drawer": {
      "caption": "SELECTING A STATION LAZY-LOADS ITS DETAIL. STATIONS BELOW ~5,000 TRIPS CARRY A VISIBLE NOISE WARNING"
    },
    "mobile": {
      "caption": "BELOW 640PX THE PANELS COLLAPSE TO A SINGLE COLUMN AND THE ANALYSIS VIEWS MOVE INTO A TAB BAR"
    }
  },
  "sections": {
    "findings": {
      "eyebrow": "01",
      "title": "Findings",
      "intro": [
        "Five interpretable station types emerge from usage alone. No geography, land use or station metadata went into the model — only the hour-by-hour shape of departures and arrivals, the weekend and member mix, and seasonality."
      ],
      "body": [
        "Two of those clusters are separated by the phase of their daily profile rather than by their mix. Commuter origin peaks on departures at 08:00; Employment destination peaks on arrivals at 08:00. Their member shares are near-identical — 61% and 63% — so what distinguishes them is when the peak falls, which is exactly the residential-versus-workplace distinction, recovered without the model being told where anything is. The clusters land where you would expect on the map: Monumental leisure picks out the National Mall and the waterfront, Dense residential core the row-house neighbourhoods north of downtown.",
        "The model holds at 81.5% on held-out data. It was fit on 2022-01 to 2025-07 and then applied unchanged — frozen centroids, no refitting — to the following twelve months. 480 of 589 stations kept their cluster. That figure is a lower bound: the holdout window is only twelve months, so its seasonal block could not be detrended the way the fit window's was, and some of the 109 disagreements are measurement rather than behaviour."
      ]
    },
    "recording": {
      "eyebrow": "02",
      "title": "A recording change, detected rather than clustered through",
      "body": [
        "Trip counts jump in August 2025 for a reason that has nothing to do with demand. Rather than let it distort the features, the ingest step diagnoses it.",
        "Trips with no station at either end fell 71% in a single month, from 142,110 to 41,130, while station-attributed trips rose 13% in a month when total volume fell 9.4% — within normal seasonal variation. The fleet mix is unchanged either side. Member share moves in opposite directions on the two sides, which season cannot cause. 19 of the 20 top stations gain against a year-on-year control.",
        "The conclusion is that the operator began attributing dockless e-bike trips to nearby stations. It is a change in recording, not in riding. The fit window therefore stops at 2025-07 so the model trains on a single regime, and the post-break months become the holdout. Pre-break counts are not rescaled to match — that would fabricate station-level attributions the data does not contain."
      ]
    },
    "method": {
      "eyebrow": "03",
      "title": "Method",
      "body": [
        "The work splits across a boundary that is deliberate rather than incidental.",
        "Offline, in Python, sits everything expensive or that must be pinned: ingesting and cleaning 24.2M raw rows down to 15.4M usable trips, building a 90-dimensional feature matrix per station — 24 weekday-departure hours, 24 weekday-arrival, 24 weekend-departure, 12 seasonal, 6 mix-and-volume — z-scoring on fit-window statistics only, PCA, and a k-sweep from k=2 to 10.",
        "Live, in the browser, sits everything a viewer might want to interrogate: k-means itself, refit on every slider move and every feature-block toggle, in around 300ms across 589 stations.",
        "The boundary sits there because the two sides have different constraints. The features are a twenty-minute pass over 15.4M trips and must be identical for everyone, so they ship as precomputed JSON. The clustering is cheap, and its result is exactly what a reviewer would want to poke at — \"what if seasonality didn't count?\" is a question the dashboard answers in 300ms rather than one you have to take on faith.",
        "Two things stay fixed on purpose. The PCA projection is computed once and never recomputed, so points never jump: the scatter is a stable map of station-space that clusterings get painted onto. And at the reference configuration — k=5, all blocks on — the displayed labels come from the offline scikit-learn fit, because every published figure was computed against it. The browser's own fit still runs there, so the live inertia and silhouette remain honest comparisons.",
        "Below 640px the panels collapse to a single column and the four analysis views move into a tab bar, so the page stays a few screens rather than ten. The Leaflet map keeps a single DOM position across every breakpoint — CSS handles the reordering — because remounting it on a viewport change tears the map down underneath Leaflet's own in-flight callbacks."
      ]
    },
    "limitations": {
      "eyebrow": "04",
      "title": "Limitations",
      "body": [
        "Silhouette sits below 0.19 at every k, peaking at 0.1845 for k=2 and falling to around 0.06 from k=4 upward. The metric cannot discriminate here. k=5 comes from the inertia elbow — marginal improvement falls below 4% per step at k=5 — and from interpretability: five is where each cluster is distinguished by a different feature block rather than by a finer cut of the same one. It is not a metric optimum and is not presented as one.",
        "The first ten principal components explain 58.8% of variance, with PC1 at 16.7% and PC2 at 11.2%. Station behaviour is a continuum, not five separated groups. The scatter plot is a partial projection: two points sitting on top of each other there may differ sharply across the eighty-odd dimensions the view discards. The clustering itself runs in all 90 dimensions, never on the 2D coordinates.",
        "Low-volume stations are noisy. Below roughly 5,000 trips a row-normalised 24-hour profile is mostly sampling noise. The five largest-norm stations in the feature matrix are all small peripheral ones — that is normalisation noise rather than distinctive behaviour, and the station drawer says so instead of presenting it as insight.",
        "Data-quality issues are reported, not silently repaired. 514 stations show a coordinate spread over 500m, though only 7 have a p99 also beyond it and the rest are single stray GPS fixes. 92 station IDs map to more than one name, and 7 names map to more than one ID. These print as tables for a human to adjudicate."
      ]
    },
    "attribution": {
      "eyebrow": "05",
      "title": "Data and attribution",
      "body": [
        "Trip data: Capital Bikeshare system data, used under the Capital Bikeshare Data License Agreement. Monthly archives are fetched from the operator's public S3 bucket; no filenames are hardcoded — the bucket's XML index is parsed and filtered.",
        "Basemap tiles: © Esri — Esri, HERE, Garmin, © OpenStreetMap contributors, and the GIS user community.",
        "This project is not affiliated with or endorsed by Capital Bikeshare or Lyft."
      ]
    }
  }
}
```

#### French

Source: `src/i18n/fr.js` → `projects.capitalBikeshare`

```json
{
  "title": "Capital Bikeshare — Segmentation des stations",
  "blurb": "Cinq profils de stations interprétables, établis à partir des seuls usages de 589 stations et 15,4 millions de trajets, avec une stabilité de 81,5 % sur des données inédites.",
  "lede": "Toutes les stations avec bornes de Capital Bikeshare à Washington DC, regroupées selon leurs usages réels à partir de 15.4 millions de trajets — avec un clustering exécuté en direct dans le navigateur pour modifier le modèle et observer immédiatement la réaction de la carte.",
  "stats": [
    {
      "label": "STATIONS",
      "value": "589"
    },
    {
      "label": "TRAJETS",
      "value": "15,361,854"
    },
    {
      "label": "PÉRIODE",
      "value": "2022-01 → 2026-07"
    },
    {
      "label": "APPRENTISSAGE / HOLDOUT",
      "value": "2025-07 / 2025-08–2026-07"
    },
    {
      "label": "STABILITÉ HOLDOUT",
      "value": "81.5%"
    }
  ],
  "tech": [
    "Python",
    "pandas",
    "scikit-learn",
    "K-Means",
    "PCA",
    "statsmodels",
    "React",
    "Vite",
    "Leaflet",
    "Recharts",
    "Web Workers"
  ],
  "table": {
    "label": "Synthèse des clusters Capital Bikeshare",
    "columns": {
      "cluster": "Cluster",
      "stations": "Stations",
      "memberShare": "Part abonnés",
      "weekdayPeak": "Pic en semaine",
      "medianTrips": "Trajets médians"
    },
    "rows": [
      {
        "cluster": "Commuter origin",
        "stations": "204",
        "memberShare": "61%",
        "weekdayPeak": "départs 08:00",
        "medianTrips": "10,466"
      },
      {
        "cluster": "Dense residential core",
        "stations": "132",
        "memberShare": "67%",
        "weekdayPeak": "départs 18:00",
        "medianTrips": "73,745"
      },
      {
        "cluster": "Employment destination",
        "stations": "118",
        "memberShare": "63%",
        "weekdayPeak": "arrivées 08:00",
        "medianTrips": "43,434"
      },
      {
        "cluster": "Peripheral recreational",
        "stations": "89",
        "memberShare": "41%",
        "weekdayPeak": "départs 17:00",
        "medianTrips": "2,232"
      },
      {
        "cluster": "Monumental leisure",
        "stations": "46",
        "memberShare": "39%",
        "weekdayPeak": "départs 17:00",
        "medianTrips": "48,746"
      }
    ]
  },
  "images": {
    "header": {
      "caption": "EN-TÊTE ET CARTE — 589 STATIONS, 15,361,854 TRAJETS, DE JANVIER 2022 À JUILLET 2026"
    },
    "controls": {
      "caption": "DÉPLACEZ LE CURSEUR K OU DÉSACTIVEZ UN BLOC DE VARIABLES : K-MEANS SE RÉENTRAÎNE DANS LE NAVIGATEUR SUR LES 589 STATIONS ET LES 90 DIMENSIONS"
    },
    "clusters": {
      "caption": "LES CINQ TYPES DE STATIONS ET LEURS VOLUMES QUOTIDIENS. LA LIGNE POINTILLÉE MARQUE LE CHANGEMENT D’ENREGISTREMENT D’AOÛT 2025"
    },
    "drawer": {
      "caption": "SÉLECTIONNER UNE STATION CHARGE SES DÉTAILS À LA DEMANDE. SOUS ENVIRON 5,000 TRAJETS, UN AVERTISSEMENT DE BRUIT EST AFFICHÉ"
    },
    "mobile": {
      "caption": "SOUS 640PX, LES PANNEAUX PASSENT SUR UNE COLONNE ET LES VUES D’ANALYSE REJOIGNENT UNE BARRE D’ONGLETS"
    }
  },
  "sections": {
    "findings": {
      "eyebrow": "01",
      "title": "Résultats",
      "intro": [
        "Cinq types de stations interprétables émergent des seuls usages. Le modèle ne reçoit aucune information géographique, foncière ou descriptive : uniquement la forme horaire des départs et arrivées, la répartition entre week-end et semaine, la part des abonnés et la saisonnalité."
      ],
      "body": [
        "Deux de ces clusters se distinguent par la phase de leur profil quotidien plutôt que par leur composition. Commuter origin atteint son pic de départs à 08:00 ; Employment destination son pic d’arrivées à 08:00. Leurs parts d’abonnés sont presque identiques — 61% et 63% — et c’est donc l’heure du pic qui les sépare. La distinction entre quartiers résidentiels et pôles d’emploi est ainsi retrouvée sans aucune information de localisation. La carte place les clusters là où on les attend : Monumental leisure autour du National Mall et des quais, Dense residential core dans les quartiers de maisons mitoyennes au nord du centre-ville.",
        "Le modèle conserve une stabilité de 81.5% sur les données de holdout. Entraîné de 2022-01 à 2025-07, il est appliqué sans aucune modification — centroïdes figés, aucun réentraînement — aux douze mois suivants. 480 stations sur 589 gardent leur cluster. Ce chiffre constitue une borne basse : la fenêtre de holdout ne couvre que douze mois, son bloc saisonnier ne peut donc pas être corrigé de sa tendance comme celui de la période d’apprentissage, et une partie des 109 divergences relève de la mesure plutôt que d’un changement de comportement."
      ]
    },
    "recording": {
      "eyebrow": "02",
      "title": "Un changement d’enregistrement détecté, plutôt qu’absorbé par les clusters",
      "body": [
        "Le nombre de trajets bondit en août 2025 pour une raison sans rapport avec la demande. Au lieu de laisser cette rupture déformer les variables, l’étape d’ingestion la diagnostique.",
        "Les trajets sans station à l’une ou l’autre extrémité chutent de 71% en un mois, de 142,110 à 41,130, tandis que les trajets attribués à une station progressent de 13% pendant un mois où le volume total recule de 9.4% — une variation saisonnière normale. La composition de la flotte reste identique de part et d’autre. La part des abonnés évolue en sens opposé entre les deux ensembles, ce que la saison ne peut expliquer. 19 des 20 principales stations progressent par rapport à un témoin en glissement annuel.",
        "L’opérateur a donc vraisemblablement commencé à rattacher les trajets de vélos électriques sans borne aux stations voisines. Il s’agit d’un changement d’enregistrement, pas d’usage. La période d’apprentissage s’arrête donc à 2025-07 afin que le modèle soit entraîné sur un seul régime, et les mois postérieurs à la rupture deviennent le holdout. Les volumes antérieurs ne sont pas recalibrés : cela reviendrait à inventer des attributions par station absentes des données."
      ]
    },
    "method": {
      "eyebrow": "03",
      "title": "Méthode",
      "body": [
        "Le travail se partage selon une frontière voulue, et non accidentelle.",
        "Hors ligne, en Python, se trouvent les opérations coûteuses ou qui doivent rester figées : ingestion et nettoyage de 24.2M de lignes brutes pour obtenir 15.4M de trajets exploitables, construction d’une matrice de 90 variables par station — 24 heures de départ en semaine, 24 d’arrivée en semaine, 24 de départ le week-end, 12 variables saisonnières et 6 de composition et de volume — standardisation à partir des seules statistiques de la période d’apprentissage, PCA et balayage de k=2 à 10.",
        "En direct, dans le navigateur, se trouve tout ce qu’un lecteur peut vouloir interroger : K-Means lui-même, réentraîné à chaque mouvement du curseur et à chaque activation ou désactivation d’un bloc de variables, en environ 300ms pour les 589 stations.",
        "Cette frontière répond à des contraintes différentes. La construction des variables demande vingt minutes sur 15.4M de trajets et doit être identique pour tout le monde ; elles sont donc livrées sous forme de JSON précalculé. Le clustering est peu coûteux et son résultat est précisément ce qu’un évaluateur voudra tester : « que se passe-t-il si la saisonnalité ne compte plus ? » trouve une réponse dans le tableau de bord en 300ms, sans devoir être accepté sur parole.",
        "Deux éléments restent volontairement fixes. La projection PCA n’est calculée qu’une fois afin que les points ne se déplacent jamais : le nuage constitue une carte stable de l’espace des stations sur laquelle les clusterings sont peints. Dans la configuration de référence — k=5, tous les blocs actifs — les étiquettes affichées viennent du modèle scikit-learn hors ligne, car tous les chiffres publiés ont été calculés à partir de celui-ci. Le modèle du navigateur s’exécute tout de même, afin que l’inertie et la silhouette en direct restent des comparaisons honnêtes.",
        "Sous 640px, les panneaux se replient en une colonne et les quatre vues d’analyse passent dans une barre d’onglets, ce qui maintient la page à quelques écrans plutôt qu’une dizaine. La carte Leaflet conserve une seule position dans le DOM à toutes les largeurs — le CSS gère la réorganisation — car la remonter lors d’un changement de viewport la détruirait pendant que les callbacks de Leaflet sont encore en cours."
      ]
    },
    "limitations": {
      "eyebrow": "04",
      "title": "Limites",
      "body": [
        "La silhouette reste inférieure à 0.19 pour toutes les valeurs de k, avec un maximum de 0.1845 à k=2 puis environ 0.06 à partir de k=4. Cette métrique ne permet pas de trancher ici. Le choix de k=5 vient du coude d’inertie — le gain marginal passe sous 4% par étape à k=5 — et de l’interprétabilité : cinq clusters correspondent au point où chacun se distingue par un bloc de variables différent, plutôt que par une subdivision plus fine du même profil. Ce n’est pas un optimum métrique et il n’est pas présenté comme tel.",
        "Les dix premières composantes principales expliquent 58.8% de la variance, dont 16.7% pour PC1 et 11.2% pour PC2. Le comportement des stations forme un continuum, pas cinq groupes séparés. Le nuage de points n’est qu’une projection partielle : deux stations superposées dans cette vue peuvent être très différentes dans les quelque quatre-vingts dimensions écartées. Le clustering s’exécute bien dans les 90 dimensions, jamais sur les coordonnées 2D.",
        "Les stations à faible volume sont bruitées. Sous environ 5,000 trajets, un profil horaire sur 24 heures normalisé par ligne reflète surtout le bruit d’échantillonnage. Les cinq stations ayant la plus grande norme dans la matrice sont toutes de petites stations périphériques : il s’agit de bruit lié à la normalisation, pas d’un comportement distinctif, et le volet de détail le signale au lieu de le présenter comme un résultat.",
        "Les problèmes de qualité sont signalés, jamais corrigés silencieusement. 514 stations présentent une dispersion de coordonnées supérieure à 500m, mais seules 7 ont également un p99 au-delà de ce seuil ; pour les autres, il s’agit d’un unique point GPS errant. 92 identifiants de stations correspondent à plusieurs noms, et 7 noms à plusieurs identifiants. Ces cas sont imprimés sous forme de tableaux pour décision humaine."
      ]
    },
    "attribution": {
      "eyebrow": "05",
      "title": "Données et attribution",
      "body": [
        "Données de trajets : données système de Capital Bikeshare, utilisées conformément au Capital Bikeshare Data License Agreement. Les archives mensuelles sont récupérées depuis le bucket S3 public de l’opérateur ; aucun nom de fichier n’est codé en dur, l’index XML du bucket est analysé puis filtré.",
        "Tuiles du fond de carte : © Esri — Esri, HERE, Garmin, © contributeurs OpenStreetMap et communauté des utilisateurs SIG.",
        "Ce projet n’est ni affilié à Capital Bikeshare ou Lyft, ni approuvé par ces organisations."
      ]
    }
  }
}
```

## ELT Pipeline project

Appears in: **/projects/elt-pipeline**

#### English

Source: `src/i18n/en.js` → `projects.eltPipeline`

```json
{
  "title": "ELT Pipeline — Film Data",
  "blurb": "Postgres to Postgres extraction with dbt transformations on top, orchestrated end to end by an Airflow DAG.",
  "tech": [
    "Airflow",
    "dbt",
    "PostgreSQL",
    "Docker"
  ],
  "meta": [
    {
      "label": "STACK",
      "value": "Airflow · dbt · PostgreSQL · Docker"
    },
    {
      "label": "SHAPE",
      "value": "Postgres → Postgres"
    },
    {
      "label": "ROLE",
      "value": "Solo"
    }
  ],
  "body": [
    "A containerised ELT pipeline moving film data from a source PostgreSQL instance to a destination instance, with the transformation layer built in dbt and the whole thing orchestrated by a single Airflow DAG.",
    "Extraction and loading run through a Python script invoked as the first task. dbt then builds the models on top of the loaded tables, including a query output joining each film to its rating category and actor, and one incremental model so reruns process only new rows rather than rebuilding from scratch. A dbt test task runs last and fails the DAG if any assertion breaks — twelve tests covering uniqueness, null constraints and referential integrity between films, actors and ratings.",
    "Everything runs in Docker, so the pipeline stands up from a single compose command with no local Postgres or Airflow install."
  ],
  "images": [
    {
      "caption": "AIRFLOW DAG — RUN_ELT_SCRIPT → DBT_RUN → DBT_TEST, ALL GREEN"
    },
    {
      "caption": "QUERY OUTPUT — FILMS JOINED TO RATING CATEGORY AND ACTOR"
    },
    {
      "caption": "DBT TEST RUN — 12 TESTS PASSING"
    }
  ]
}
```

#### French

Source: `src/i18n/fr.js` → `projects.eltPipeline`

```json
{
  "title": "Pipeline ELT — Données cinématographiques",
  "blurb": "Une extraction de Postgres vers Postgres, enrichie par des transformations dbt et orchestrée de bout en bout par un DAG Airflow.",
  "tech": [
    "Airflow",
    "dbt",
    "PostgreSQL",
    "Docker"
  ],
  "meta": [
    {
      "label": "STACK",
      "value": "Airflow · dbt · PostgreSQL · Docker"
    },
    {
      "label": "FLUX",
      "value": "Postgres → Postgres"
    },
    {
      "label": "RÔLE",
      "value": "Projet individuel"
    }
  ],
  "body": [
    "Un pipeline ELT conteneurisé qui transfère des données cinématographiques d’une instance PostgreSQL source vers une instance de destination, avec une couche de transformation construite dans dbt et une orchestration complète assurée par un unique DAG Airflow.",
    "L’extraction et le chargement sont exécutés par un script Python appelé lors de la première tâche. dbt construit ensuite les modèles sur les tables chargées, dont une requête qui joint chaque film à sa catégorie de note et à son acteur, ainsi qu’un modèle incrémental qui ne traite que les nouvelles lignes lors des exécutions suivantes. Une dernière tâche lance les tests dbt et met le DAG en échec dès qu’une assertion est rompue : douze tests couvrent l’unicité, les valeurs nulles et l’intégrité référentielle entre films, acteurs et évaluations.",
    "L’ensemble fonctionne sous Docker : une seule commande Compose suffit à démarrer le pipeline, sans installation locale de PostgreSQL ni d’Airflow."
  ],
  "images": [
    {
      "caption": "DAG AIRFLOW — RUN_ELT_SCRIPT → DBT_RUN → DBT_TEST, TOUT EST AU VERT"
    },
    {
      "caption": "RÉSULTAT DE REQUÊTE — FILMS JOINTS À LEUR CATÉGORIE DE NOTE ET À LEUR ACTEUR"
    },
    {
      "caption": "EXÉCUTION DES TESTS DBT — 12 TESTS RÉUSSIS"
    }
  ]
}
```

## Heart Disease project

Appears in: **/projects/heart-disease**

#### English

Source: `src/i18n/en.js` → `projects.heartDisease`

```json
{
  "title": "Heart Disease Prediction App",
  "blurb": "Logistic regression on the UCI dataset, served through a dockerised Flask API behind a React front end.",
  "tech": [
    "React",
    "Flask",
    "scikit-learn",
    "Docker"
  ],
  "meta": [
    {
      "label": "STACK",
      "value": "React · Flask · scikit-learn · Docker"
    },
    {
      "label": "DATA",
      "value": "UCI heart disease dataset"
    },
    {
      "label": "MODEL",
      "value": "Logistic regression"
    },
    {
      "label": "ROLE",
      "value": "Solo"
    }
  ],
  "body": [
    "A logistic regression model trained on the UCI heart disease dataset, served as a prediction API and wrapped in a front end that a non-technical user can actually operate.",
    "The model is trained in scikit-learn and persisted, then loaded by a Flask API exposing a single prediction endpoint. A React front end collects the clinical inputs, posts them, and renders the returned probability. Both services are dockerised and composed together with PostgreSQL for storing submitted cases.",
    "The point was less the model — logistic regression on a small tabular dataset is not hard — than the full path from a trained artifact to something reachable through a browser."
  ],
  "images": [
    {
      "caption": "PREDICTION INTERFACE"
    }
  ]
}
```

#### French

Source: `src/i18n/fr.js` → `projects.heartDisease`

```json
{
  "title": "Application de prédiction des maladies cardiaques",
  "blurb": "Une régression logistique entraînée sur le jeu de données UCI, exposée par une API Flask conteneurisée et reliée à une interface React.",
  "tech": [
    "React",
    "Flask",
    "scikit-learn",
    "Docker"
  ],
  "meta": [
    {
      "label": "STACK",
      "value": "React · Flask · scikit-learn · Docker"
    },
    {
      "label": "DONNÉES",
      "value": "Jeu de données UCI sur les maladies cardiaques"
    },
    {
      "label": "MODÈLE",
      "value": "Régression logistique"
    },
    {
      "label": "RÔLE",
      "value": "Projet individuel"
    }
  ],
  "body": [
    "Un modèle de régression logistique entraîné sur le jeu de données UCI consacré aux maladies cardiaques, servi par une API de prédiction et intégré à une interface utilisable par une personne sans expertise technique.",
    "Le modèle est entraîné avec scikit-learn puis sauvegardé avant d’être chargé par une API Flask exposant un unique endpoint de prédiction. L’interface React recueille les données cliniques, les envoie à l’API et affiche la probabilité retournée. Les deux services sont conteneurisés et orchestrés avec PostgreSQL pour conserver les cas soumis.",
    "L’enjeu principal n’était pas le modèle — une régression logistique sur un petit jeu tabulaire reste simple — mais tout le chemin entre l’artefact entraîné et un outil réellement accessible depuis un navigateur."
  ],
  "images": [
    {
      "caption": "INTERFACE DE PRÉDICTION"
    }
  ]
}
```

## Power BI project

Appears in: **/projects/powerbi**

#### English

Source: `src/i18n/en.js` → `projects.powerbi`

```json
{
  "title": "Power BI",
  "blurb": "Project details coming soon.",
  "tech": [],
  "meta": [
    {
      "label": "STATUS",
      "value": "In progress"
    }
  ],
  "body": [
    "This project is still in progress. The write-up will follow."
  ],
  "images": []
}
```

#### French

Source: `src/i18n/fr.js` → `projects.powerbi`

```json
{
  "title": "Power BI",
  "blurb": "Détails du projet à venir.",
  "tech": [],
  "meta": [
    {
      "label": "STATUT",
      "value": "En cours"
    }
  ],
  "body": [
    "Ce projet est toujours en cours. L’étude de cas sera publiée prochainement."
  ],
  "images": []
}
```

## Project status labels

Appears in: **/projects and project rows**

#### English

Source: `src/i18n/en.js` → `projects.status`

```json
{
  "inProgress": "IN PROGRESS"
}
```

#### French

Source: `src/i18n/fr.js` → `projects.status`

```json
{
  "inProgress": "EN COURS"
}
```

## About page

Appears in: **/about**

#### English

Source: `src/i18n/en.js` → `about`

```json
{
  "eyebrow": "ABOUT",
  "title": "About",
  "bio": [
    "I'm a final-year data engineering student at INPT in Rabat. Most of what I've built sits at the point where data stops being a table and starts being a decision — segmentation that a commercial team can act on, pipelines that run unattended, interfaces that make a model's output legible to someone who will never read the model.",
    "I like the parts of the work that don't photograph well. Outlier treatment that determines whether a whole segment exists or vanishes. Test coverage that fails a DAG before bad rows reach anyone. The difference between a model that scores well once and one that holds on data it hasn't seen.",
    "Outside of it I write fiction, which has turned out to be less separate from this than it sounds — both are mostly about noticing what's actually there rather than what you expected to find."
  ],
  "downloadCv": "DOWNLOAD CV",
  "skills": {
    "eyebrow": "WORKING WITH",
    "title": "Skills",
    "spokenEyebrow": "SPOKEN",
    "spokenLanguages": [
      "Arabic",
      "French",
      "English"
    ],
    "groups": {
      "pipelines": "CODE & PROCESSING",
      "modelling": "MODELLING",
      "storage": "STORAGE",
      "interfaces": "INTERFACES & TOOLING"
    }
  }
}
```

#### French

Source: `src/i18n/fr.js` → `about`

```json
{
  "eyebrow": "À PROPOS",
  "title": "À propos",
  "bio": [
    "Je suis étudiant en dernière année d’ingénierie des données à l’INPT de Rabat. La plupart de mes projets se situent à l’endroit où la donnée cesse d’être un tableau pour devenir une décision : une segmentation exploitable par une équipe commerciale, des pipelines qui tournent sans surveillance et des interfaces qui rendent les résultats d’un modèle compréhensibles sans avoir à lire le modèle.",
    "J’aime les aspects du travail qui se prêtent mal aux photos. Le traitement des valeurs aberrantes qui décide si un segment entier apparaît ou disparaît. Des tests qui interrompent un DAG avant que des données erronées n’atteignent leurs utilisateurs. La différence entre un modèle performant une fois et un modèle qui tient sur des données qu’il n’a jamais vues.",
    "En dehors de la data, j’écris de la fiction. Ces deux activités sont finalement moins éloignées qu’elles n’en ont l’air : toutes deux consistent surtout à regarder ce qui est réellement là, plutôt que ce que l’on s’attendait à trouver."
  ],
  "downloadCv": "TÉLÉCHARGER LE CV",
  "skills": {
    "eyebrow": "COMPÉTENCES",
    "title": "Savoir-faire",
    "spokenEyebrow": "LANGUES",
    "spokenLanguages": [
      "Arabe",
      "Français",
      "Anglais"
    ],
    "groups": {
      "pipelines": "CODE ET TRAITEMENT",
      "modelling": "MODÉLISATION",
      "storage": "STOCKAGE",
      "interfaces": "INTERFACES ET OUTILS"
    }
  }
}
```

## Contact page

Appears in: **/contact**

#### English

Source: `src/i18n/en.js` → `contact`

```json
{
  "eyebrow": "CONTACT",
  "title": "Contact",
  "lede": "For opportunities, collaborations or a conversation about the work.",
  "links": [
    {
      "label": "EMAIL",
      "value": "laita.alae@gmail.com",
      "href": "mailto:laita.alae@gmail.com",
      "external": false
    },
    {
      "label": "GITHUB",
      "value": "github.com/l-alae",
      "href": "https://github.com/l-alae",
      "external": true
    },
    {
      "label": "LINKEDIN",
      "value": "linkedin.com/in/alae-laita-623b0818b",
      "href": "https://linkedin.com/in/alae-laita-623b0818b",
      "external": true
    }
  ]
}
```

#### French

Source: `src/i18n/fr.js` → `contact`

```json
{
  "eyebrow": "CONTACT",
  "title": "Contact",
  "lede": "Pour une opportunité, une collaboration ou simplement échanger autour de mon travail.",
  "links": [
    {
      "label": "E-MAIL",
      "value": "laita.alae@gmail.com",
      "href": "mailto:laita.alae@gmail.com",
      "external": false
    },
    {
      "label": "GITHUB",
      "value": "github.com/l-alae",
      "href": "https://github.com/l-alae",
      "external": true
    },
    {
      "label": "LINKEDIN",
      "value": "linkedin.com/in/alae-laita-623b0818b",
      "href": "https://linkedin.com/in/alae-laita-623b0818b",
      "external": true
    }
  ]
}
```

## Remaining page shells and 404

Appears in: **Various routes**

#### English

Source: `src/i18n/en.js` → `pages`

```json
{
  "home": {
    "eyebrow": "Introduction",
    "title": "Home",
    "placeholder": "Content coming soon."
  },
  "experience": {
    "eyebrow": "Selected work",
    "title": "Experience",
    "placeholder": "Experience content coming soon."
  },
  "projects": {
    "eyebrow": "Case studies",
    "title": "Projects",
    "placeholder": "Project content coming soon."
  },
  "projectDetail": {
    "eyebrow": "Project detail",
    "placeholder": "Project details coming soon."
  },
  "about": {
    "eyebrow": "Profile",
    "title": "About",
    "placeholder": "About content coming soon."
  },
  "contact": {
    "eyebrow": "Get in touch",
    "title": "Contact",
    "placeholder": "Contact content coming soon."
  },
  "notFound": {
    "eyebrow": "Error 404",
    "title": "Page not found",
    "placeholder": "The requested page could not be found."
  }
}
```

#### French

Source: `src/i18n/fr.js` → `pages`

```json
{
  "home": {
    "eyebrow": "Introduction",
    "title": "Accueil",
    "placeholder": "Contenu à venir."
  },
  "experience": {
    "eyebrow": "Parcours choisi",
    "title": "Expérience",
    "placeholder": "Contenu sur l’expérience à venir."
  },
  "projects": {
    "eyebrow": "Études de cas",
    "title": "Projets",
    "placeholder": "Contenu des projets à venir."
  },
  "projectDetail": {
    "eyebrow": "Détail du projet",
    "placeholder": "Détails du projet à venir."
  },
  "about": {
    "eyebrow": "Profil",
    "title": "À propos",
    "placeholder": "Contenu à propos à venir."
  },
  "contact": {
    "eyebrow": "Prendre contact",
    "title": "Contact",
    "placeholder": "Contenu de contact à venir."
  },
  "notFound": {
    "eyebrow": "Erreur 404",
    "title": "Page introuvable",
    "placeholder": "La page demandée est introuvable."
  }
}
```

## Header navigation

Appears in: **Persistent header**

#### English

Source: `src/i18n/en.js` → `nav`

```json
{
  "logo": "Portfolio home",
  "home": "Home",
  "experience": "Experience",
  "projects": "Projects",
  "about": "About",
  "contact": "Contact",
  "openMenu": "Open navigation menu",
  "closeMenu": "Close navigation menu",
  "primary": "Primary navigation"
}
```

#### French

Source: `src/i18n/fr.js` → `nav`

```json
{
  "logo": "Accueil du portfolio",
  "home": "Accueil",
  "experience": "Expérience",
  "projects": "Projets",
  "about": "À propos",
  "contact": "Contact",
  "openMenu": "Ouvrir le menu de navigation",
  "closeMenu": "Fermer le menu de navigation",
  "primary": "Navigation principale"
}
```

## Footer

Appears in: **Persistent footer**

#### English

Source: `src/i18n/en.js` → `footer`

```json
{
  "name": "AL",
  "copyright": "{year} · Built with care and curiosity."
}
```

#### French

Source: `src/i18n/fr.js` → `footer`

```json
{
  "name": "AL",
  "copyright": "{year} · Conçu avec soin et curiosité."
}
```

## Brand mark

Appears in: **Header and document identity**

#### English

Source: `src/i18n/en.js` → `brand`

```json
{
  "mark": "AL"
}
```

#### French

Source: `src/i18n/fr.js` → `brand`

```json
{
  "mark": "AL"
}
```

## Theme controls

Appears in: **Persistent header**

#### English

Source: `src/i18n/en.js` → `theme`

```json
{
  "switchToDark": "Switch to dark theme",
  "switchToLight": "Switch to light theme"
}
```

#### French

Source: `src/i18n/fr.js` → `theme`

```json
{
  "switchToDark": "Activer le thème sombre",
  "switchToLight": "Activer le thème clair"
}
```

## Language controls

Appears in: **Persistent header**

#### English

Source: `src/i18n/en.js` → `language`

```json
{
  "label": "Choose language",
  "english": "English",
  "french": "French",
  "englishShort": "EN",
  "frenchShort": "FR"
}
```

#### French

Source: `src/i18n/fr.js` → `language`

```json
{
  "label": "Choisir la langue",
  "english": "Anglais",
  "french": "Français",
  "englishShort": "EN",
  "frenchShort": "FR"
}
```

## Accessibility labels

Appears in: **Site-wide**

#### English

Source: `src/i18n/en.js` → `accessibility`

```json
{
  "skipToContent": "Skip to content"
}
```

#### French

Source: `src/i18n/fr.js` → `accessibility`

```json
{
  "skipToContent": "Aller au contenu"
}
```

## Document metadata

Appears in: **Browser tab**

#### English

Source: `src/i18n/en.js` → `meta`

```json
{
  "title": "Portfolio"
}
```

#### French

Source: `src/i18n/fr.js` → `meta`

```json
{
  "title": "Portfolio"
}
```
