# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Non publié]

### Ajouté
- Nouveau composant PageHeader pour uniformiser les en-têtes de pages
- Effet de scroll pour la barre de navigation
- Images personnalisées pour les articles de blog
- Effet de superposition sur les images de blog au survol
- Nouveau design pour la page de détail d'article de blog
- Logo animé "Hylst Digital Solutions" avec animations améliorées
- Animations améliorées pour le logo et les éléments d'interface
- Guide pour l'ajout d'images personnalisées au Portfolio et Blog
- ServicesGrid comme composant réutilisable
- Animations améliorées pour les sections Portfolio et Services
- Effets interactifs sur les cartes de projets
- Fichier structure.md détaillant l'architecture et les fonctionnalités du site
- Dossier public/images pour les ressources image personnalisées
- Descriptions détaillées des services dans la page Services
- Catégorisation des services avec des exemples de cas d'usage
- Design uniformisé sur toutes les pages du site
- Nouvelles images pour les articles de blog
- Constantes pour la gestion des chemins d'images
- Structure de dossiers pour les images de blog et services
- Images par défaut pour blog et services

### Modifié
- Modernisation du design de la barre de navigation avec meilleur espacement entre éléments
- Amélioration des en-têtes de toutes les pages pour un design cohérent
- Amélioration du pied de page avec des icônes stylisées et une meilleure organisation
- Amélioration des animations du menu mobile
- Déplacement de la section "Mes Services" de la page d'accueil vers la page Services
- Amélioration de la visibilité des catégories dans la section Portfolio
- Refactorisation des composants Portfolio pour une meilleure organisation
- Mise à jour du README avec des informations détaillées sur le projet
- Enrichissement du contenu de la page Services avec des descriptions complètes
- Modernisation du design de la page Consulting avec un style cohérent
- Uniformisation des animations et des éléments interactifs sur toutes les pages
- Correction des liens dans la barre de navigation pour assurer une navigation cohérente
- Mise à jour des chemins d'images dans les composants
- Réorganisation des assets dans le dossier public/images
- Documentation des images requises et leurs utilisations

### Corrigé
- Correction des routes pour la section Services
- Intégration correcte de ServicesGrid dans la page Services
- Amélioration de la visibilité des badges de catégories dans le Portfolio
- Meilleure adaptation aux différents thèmes (Light, Dark, Fantasy, Tech)
- Ajustement des contrastes pour une meilleure accessibilité
- Correction des problèmes de navigation et de liens dans le menu principal
- Résolution des problèmes de contenu manquant sur la page Services

## [1.0.0] - 2023-08-01

### Ajouté
- Structure initiale du site avec React et Tailwind CSS
- Implémentation des sections principales: Accueil, Portfolio, Services, Blog, À propos, Contact
- Système de thèmes multiples (Light, Dark, Fantasy, Tech)
- Animations et transitions fluides avec Framer Motion
- Portfolio filtrable par catégories et recherche
- Intégration des composants UI réutilisables avec shadcn/ui
