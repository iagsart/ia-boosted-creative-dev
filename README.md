
# Hylst Human AI - Site Portfolio Personnel

Ce projet est un site web portfolio personnel développé avec React, Tailwind CSS et Vite, mettant en valeur des compétences en développement, IA, infographie et consulting.

## Fonctionnalités

- **Design responsive multi-thèmes** (Light, Dark, Fantasy, Tech)
- **Portfolio interactif** avec filtrage et animations
- **Blog** avec articles structurés et système de catégories
- **Présentation des services** offerts
- **Showcase de projets** développés personnellement
- **Section contact** avec formulaire

## Technologies utilisées

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion pour les animations
- Shadcn/UI pour les composants
- Vite pour le développement
- React Router pour la navigation

## Structure du projet

```
/src
  /components        # Composants réutilisables
    /blog            # Composants pour le blog
    /home            # Composants pour la page d'accueil
    /layout          # Layout de l'application
    /portfolio       # Composants pour la section portfolio
    /services        # Composants pour la section services
    /ui              # Composants UI réutilisables
  /context           # Contextes React (Theme, etc.)
  /data              # Données du site (articles, projets)
  /docs              # Documentation
  /hooks             # Custom React hooks
  /integrations      # Intégrations avec services externes
  /lib               # Utilitaires et fonctions
  /pages             # Pages principales de l'application
    /services        # Pages des différents services
```

## Comment ajouter du contenu

- **Portfolio**: Modifiez `src/pages/Portfolio.tsx` pour ajouter de nouveaux projets
- **Blog**: Ajoutez des articles dans `src/data/blogPosts.tsx`
- **Services**: Modifiez `src/components/services/ServicesGrid.tsx` pour mettre à jour vos services

Consultez `src/docs/image-upload-guide.md` pour ajouter vos propres images.

## Personnalisation

Le site offre plusieurs thèmes accessibles via le sélecteur en haut à droite:
- **Light**: Thème clair professionnel
- **Dark**: Thème sombre élégant
- **Fantasy**: Thème coloré avec des accents violets
- **Tech**: Thème axé technologie avec des accents bleus

## Développement

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build pour la production
npm run build
```

## Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant les applications React statiques comme Vercel, Netlify, GitHub Pages, etc.
