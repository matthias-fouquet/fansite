# Fansite

> « Être Fan ne s’explique pas, ça se vit »

## 🎯 Description du projet

Ce dépôt contient un site web de fans développé en groupe.  
Chaque membre du projet choisit une célébrité / équipe de sport / groupe de musique et réalise un mini-site dédié.  [oai_citation:0‡Fansite.pdf](file-service://file-GYGSPuRdjFLhiMMfZ76q8a)

Le site doit contenir :

- Une page d’accueil générale `index.html` présentant les 3 célébrités / groupes.
- 3 sous-dossiers : `fansite1/`, `fansite2/`, `fansite3/`.
- Pour chaque sous-dossier :
  - Une page d’accueil : `fansite1.html`, `fansite2.html`, `fansite3.html`.
  - Plusieurs pages HTML (pas de “one page”) avec un menu de navigation :
    - Actualité
    - Réalisations
    - Événements passés / à venir
    - Photos et vidéos
    - Liens vers d’autres sites de fans
    - Liens vers les réseaux sociaux
    - Formulaire de contact
    - Et tout autre contenu jugé utile  [oai_citation:1‡Fansite.pdf](file-service://file-GYGSPuRdjFLhiMMfZ76q8a)

La navigation entre toutes les pages doit être possible depuis le **header** et le **footer**. Le design doit être soigné et responsive.  [oai_citation:2‡Fansite - Kickof de Lancement.pdf](file-service://file-FA2WUyT48dPkVgMpsktief)

## 🗂 Structure du dépôt

Structure recommandée :

```text
fansite/
├── index.html                 # Page d'accueil principale
├── styles.css                 # CSS global (accueil + éléments communs)
├── fansite1/
│   ├── fansite1.html          # Accueil célébrité / groupe 1
│   ├── actualites.html
│   ├── realisations.html
│   ├── evenements.html
│   ├── galerie.html
│   ├── liens.html
│   ├── contact.html
│   └── fansite1.css           # Style dédié 1
├── fansite2/
│   ├── fansite2.html
│   ├── actualites.html
│   ├── realisations.html
│   ├── evenements.html
│   ├── galerie.html
│   ├── liens.html
│   ├── contact.html
│   └── fansite2.css           # Style dédié 2
├── fansite3/
│   ├── fansite3.html
│   ├── actualites.html
│   ├── realisations.html
│   ├── evenements.html
│   ├── galerie.html
│   ├── liens.html
│   ├── contact.html
│   └── fansite3.css           # Style dédié 3
└── README.md
