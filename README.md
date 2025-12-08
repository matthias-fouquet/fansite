# Fansite
## 🎯 Description du projet

Ce dépôt contient un site web développé en groupe.  
Chaque membre du projet choisit un genre de musique et réalise un mini-site commun dédié.

Le site contient :

- Une page d’accueil générale `index.html` présentant les 3 genres musicaux.
- 3 sous-dossiers : `pop_pages/`, `rnb_pages/`, `k-pop_pages/`.
- Pour chaque sous-dossier :
  - Une page d’accueil : `pop.html`, `rnb.html`, `k-pop.html`.

## 🗂 Structure du dépôt

Structure :

```text
fansite/
│
├── index.html            # Page d'accueil principale
├── styles.css            # CSS page d'accueil
├── script.js             # Utilisation des contenus audio de la page d'accueil
│
├── audios/
│   ├── pop.mp3
│   ├── rnb.mp3
│   └── k-pop.mp3
│
├── icons/
│   ├── pause.png
│   └── play.png
│
├── images/
│   └── 359 éléments
│
├── pop_pages/
│   ├── pop.html          # Page pop
│   └── pop.css           # Style page
│
├── rnb_pages/
│   ├── rnb.html          # Page rnb
│   └── rnb.css           # Style page
│
├── k-pop_pages/
│   ├── k-pop.html        # Papge k-pop
│   └── k-pop.css         # Style page
│
├── .gitignore
└── README.md