
# Structure du Site Hylst Human AI

## Présentation générale

Le site "Hylst Human AI" est un portfolio professionnel pour Geoffroy Streit (alias Hylst), un ingénieur en reconversion IT avec une expertise en optronique, infographie, et développement. Le site met en valeur son parcours, ses compétences, ses projets et les services qu'il propose, avec une approche combinant la créativité humaine et les technologies avancées.

## Objectifs et finalités

1. **Présentation professionnelle** : Mettre en valeur les compétences, l'expérience et l'expertise de Geoffroy Streit.
2. **Vitrine de services** : Présenter les différents services proposés (IA, développement, infographie, etc.).
3. **Showcase de projets** : Exposer les projets réalisés avec possibilité de filtrage par catégorie.
4. **Partage de connaissances** : Section blog pour partager des articles et tutoriels.
5. **Point de contact** : Permettre aux visiteurs de prendre contact facilement.

## Architecture technique

Le site est développé avec les technologies modernes suivantes :

- **React 18** : Bibliothèque JavaScript pour construire des interfaces utilisateurs.
- **TypeScript** : Sur-ensemble de JavaScript ajoutant le typage statique.
- **Tailwind CSS** : Framework CSS utilitaire pour le style.
- **Framer Motion** : Bibliothèque pour les animations et transitions.
- **Shadcn/UI** : Collection de composants UI réutilisables.
- **React Router** : Gestion des routes et de la navigation.
- **Vite** : Environnement de développement rapide.

## Structure de fichiers

```
/public
  /images                     # Images personnalisées
  /lovable-uploads            # Images uploadées via l'interface
  favicon.ico                 # Icône du site
  
/src
  /components                 # Composants réutilisables
    /blog                     # Composants pour le blog
      BlogCategories.tsx      # Filtrage par catégories
      BlogList.tsx            # Liste d'articles
      BlogSearch.tsx          # Recherche d'articles
    
    /home                     # Composants pour la page d'accueil
      AboutSection.tsx        # Section "Qui suis-je"
      CtaSection.tsx          # Appel à l'action
      HeroSection.tsx         # En-tête de la page d'accueil
      PortfolioSection.tsx    # Aperçu du portfolio
      TestimonialsSection.tsx # Témoignages clients
    
    /layout                   # Structure globale du site
      Footer.tsx              # Pied de page
      Layout.tsx              # Conteneur principal
      Navbar.tsx              # Barre de navigation
    
    /portfolio                # Composants pour le portfolio
      PortfolioCategories.tsx # Filtrage par catégories
      PortfolioProjectCard.tsx # Carte de projet
    
    /services                 # Composants pour la section services
      ServicesGrid.tsx        # Grille de services
    
    /ui                       # Composants UI réutilisables
      avatar.tsx              # Avatar utilisateur
      button.tsx              # Bouton
      card.tsx                # Carte
      section-title.tsx       # Titre de section
      service-card.tsx        # Carte de service
      [+ autres composants UI]
  
  /context                    # Contextes React
    theme-provider.tsx        # Gestion des thèmes
  
  /data                       # Données du site
    blogPosts.tsx             # Articles de blog
  
  /docs                       # Documentation
    image-upload-guide.md     # Guide d'upload d'images
  
  /hooks                      # Custom React hooks
    use-media-query.ts        # Gestion des media queries
    use-mobile.tsx            # Détection mobile
    use-toast.ts              # Notifications toast
  
  /integrations               # Intégrations externes
    /supabase                 # Intégration avec Supabase
      client.ts               # Client Supabase
      types.ts                # Types Supabase
  
  /lib                        # Bibliothèques et utilitaires
    utils.ts                  # Fonctions utilitaires
  
  /pages                      # Pages principales
    About.tsx                 # Page À propos
    Blog.tsx                  # Page Blog
    BlogPost.tsx              # Page article de blog
    Contact.tsx               # Page Contact
    Index.tsx                 # Page d'accueil
    NotFound.tsx              # Page 404
    Portfolio.tsx             # Page Portfolio
    
    /services                 # Pages des services
      index.tsx               # Page principale Services
      AI.tsx                  # Service IA
      Consulting.tsx          # Service Consulting
      Content.tsx             # Service Contenu
      Data.tsx                # Service Données
      Development.tsx         # Service Développement
      Music.tsx               # Service Musique
  
  /types                      # Définitions de types
    blog.ts                   # Types pour le blog
  
  App.tsx                     # Composant principal
  main.tsx                    # Point d'entrée
```

## Fonctionnalités clés

### 1. Système de thèmes multiples
Le site propose quatre thèmes distincts :
- **Light** : Thème clair professionnel
- **Dark** : Thème sombre élégant
- **Fantasy** : Thème coloré avec des accents violets
- **Tech** : Thème axé technologie avec des accents bleus

### 2. Portfolio interactif
- Filtrage par catégories (Technique, Artistique, Développement, etc.)
- Recherche textuelle
- Affichage en grille avec cartes de projets animées
- Possibilité d'ajouter des images personnalisées (voir guide d'upload)

### 3. Présentation des services
- Cartes interactives pour chaque service proposé
- Pages détaillées par type de service
- Transition fluide et animations lors de la navigation

### 4. Blog
- Articles structurés avec catégories
- Système de recherche et de filtrage
- Mise en page responsive pour tous les appareils

### 5. Interface responsive
- Adaptation automatique à tous les formats d'écran
- Expérience utilisateur optimisée sur mobiles et tablettes
- Animations adaptées selon les capacités de l'appareil

### 6. Contact et interactions
- Formulaire de contact facilement accessible
- Liens vers réseaux sociaux et moyens de communication
- Appels à l'action stratégiquement placés

## Guide pour ajouter des images personnalisées

Pour ajouter vos propres images au Portfolio ou au Blog :

1. Placez vos images dans le dossier `/public/images`
2. Référencez-les dans vos composants avec le chemin `/images/nom-de-votre-image.jpg`
3. Pour les images uploadées via l'interface, elles seront stockées dans `/public/lovable-uploads` et accessibles via le chemin `/lovable-uploads/identifiant-unique.jpg`

Pour plus de détails, consultez le guide complet dans `/src/docs/image-upload-guide.md`.

## Personnalisation future

Le site est conçu pour être facilement extensible et personnalisable. Voici quelques axes d'amélioration possibles :

1. Ajout d'une section témoignages clients plus élaborée
2. Intégration d'un système de commentaires pour le blog
3. Mise en place d'une galerie d'images plus interactive
4. Développement d'un dashboard administrateur pour la gestion du contenu
5. Intégration de visualisations de données plus avancées pour la section portfolio

## Maintenance et mise à jour

La structure modulaire du site facilite sa maintenance et sa mise à jour. Les composants réutilisables permettent d'ajouter de nouvelles fonctionnalités sans duplication de code, et l'architecture des dossiers permet de localiser rapidement les fichiers à modifier.

Pour suivre les modifications apportées au site, consultez le fichier `CHANGELOG.md` à la racine du projet.
