

# Changelog

Toutes les modifications notables de ce projet seront documentées dans ce fichier.

Le format est basé sur [Keep a Changelog](https://keepachangelog.com/fr/1.0.0/),
et ce projet adhère au [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Non publié]

### Terminé
- Configuration de l'API IA avec Gemini et DeepSeek en fallback
- Mise à jour du logo Hylst Digital Solutions avec animations
- Enrichissement du contenu de la page Services Development
- Ajout de sections sur l'expertise en optronique et systèmes embarqués
- Ajout de nouvelles sections à la page Development pour les applications Desktop Python et l'IoT
- Mise à jour des technologies utilisées (Python, C/C++, No-Code/Low-Code, etc.)
- Optimisation du traitement des requêtes pour l'assistant IA
- Amélioration du design UI/UX de l'assistant IA
- Développement d'un logo animé pour la barre de navigation et le pied de page
- Création d'une nouvelle page No-Code / Low-Code dans la section Services

### En cours
- Amélioration de l'expérience utilisateur de l'assistant IA
- Enrichissement des données contextuelles pour l'IA par section
- Mise à jour des presets de prompts selon la section active

### À faire
- Implémenter un système de commentaires sur les articles de blog
- Ajouter une section portfolio plus détaillée avec filtrage avancé
- Développer une section ressources avec documents téléchargeables
- Créer une galerie de projets avec cas d'études
- Optimiser les performances de chargement des pages
- Améliorer l'accessibilité du site pour tous les utilisateurs
- Ajouter des traductions multilingues (EN, DE)
- Implémenter un système de newsletter
- Développer un tableau de bord administrateur
- Ajouter un système de recherche global
- Optimiser le référencement SEO de toutes les pages
- Créer un configurateur de projet interactif
- Ajouter des calculateurs spécifiques (ROI, temps de développement)
- Implémenter un système de réservation de consultation
- Intégrer un système de chat en direct
- Développer des quiz interactifs sur les technologies
- Ajouter une section FAQ dynamique
- Créer une timeline interactive pour présenter l'évolution du site
- Implémenter un mode sombre/clair automatique
- Ajouter des animations au scroll sur toutes les pages
- Optimiser les images pour différentes tailles d'écran
- Créer une application mobile companion
- Implémenter un système de notifications push
- Développer un outil de diagnostic en ligne
- Créer des intégrations avec des outils externes (GitHub, Figma, etc.)
- Mettre en place une zone membre avec contenu exclusif
- Ajouter des vidéos explicatives pour chaque service
- Développer des démos interactives pour les projets

## [1.0.0] - 2023-08-01

### Ajouté
- Structure initiale du site avec React et Tailwind CSS
- Implémentation des sections principales: Accueil, Portfolio, Services, Blog, À propos, Contact
- Système de thèmes multiples (Light, Dark, Fantasy, Tech)
- Animations et transitions fluides avec Framer Motion
- Portfolio filtrable par catégories et recherche
- Intégration des composants UI réutilisables avec shadcn/ui
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
- Composants modulaires pour la page Portfolio: PortfolioSearch, PortfolioGrid, PortfolioCategories
- Implémentation des images locales dans les composants ServicesGrid et BlogList
- Fichier portfolioProjects.ts pour séparer les données des composants d'UI
- Fonction edge Supabase pour l'intégration IA
- Assistante IA avec contexte spécifique par page

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
- Refactorisation de la page Portfolio en composants plus petits et mieux organisés

### Corrigé
- Correction des routes pour la section Services
- Intégration correcte de ServicesGrid dans la page Services
- Amélioration de la visibilité des badges de catégories dans le Portfolio
- Meilleure adaptation aux différents thèmes (Light, Dark, Fantasy, Tech)
- Ajustement des contrastes pour une meilleure accessibilité
- Correction des problèmes de navigation et de liens dans le menu principal
- Résolution des problèmes de contenu manquant sur la page Services
- Correction de l'affichage des images dans les articles de blog et services
- Optimisation du chargement des images avec fallback en cas d'erreur
- Correction des bugs dans l'assistant IA


