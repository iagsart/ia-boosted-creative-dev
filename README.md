
# Hylst Human AI - Site Portfolio Personnel

Ce projet est un site web portfolio personnel développé avec React, Tailwind CSS et Vite, mettant en valeur des compétences en développement, IA, infographie et consulting.

## Fonctionnalités

- **Design responsive multi-thèmes** (Light, Dark, Fantasy, Tech)
- **Portfolio interactif** avec filtrage et animations
- **Blog** avec articles structurés et système de catégories
- **Présentation des services** offerts avec descriptions détaillées
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
  /public
    /images          # Images personnalisées
    /lovable-uploads # Images uploadées via l'interface
```

## Comment ajouter des images personnalisées

### Pour le Portfolio

1. **Préparer les images** : Optimisez vos images pour le web (format .jpg, .png ou .webp, taille recommandée: 1200x800px)
2. **Ajouter à public/images** : Placez vos images dans le dossier `public/images/`
3. **Utiliser dans le code** : Référencez vos images avec le chemin `/images/votre-image.jpg`

Exemple d'utilisation dans un composant:
```jsx
<img src="/images/mon-projet.jpg" alt="Description du projet" />
```

### Pour le Blog

1. **Préparer les images** : Optimisez vos images pour le web
2. **Ajouter à public/images/blog** : Créez un sous-dossier dans `public/images/blog/` pour organiser vos images
3. **Utiliser dans les articles** : Référencez vos images dans les articles du blog

Exemple d'ajout d'image dans un article de blog:
```jsx
// Dans src/data/blogPosts.tsx
{
  title: "Mon nouvel article",
  content: (
    <>
      <p>Contenu de l'article...</p>
      <img src="/images/blog/mon-image.jpg" alt="Description de l'image" className="my-6 rounded-lg" />
      <p>Suite du contenu...</p>
    </>
  ),
  // Autres propriétés...
}
```

### Via l'interface Lovable

Vous pouvez également télécharger des images directement via l'interface Lovable:
1. Dans la conversation, cliquez sur l'icône d'image
2. Sélectionnez l'image à télécharger
3. Une fois téléchargée, l'image sera disponible dans `/lovable-uploads/`
4. Utilisez le chemin complet fourni par Lovable pour référencer l'image

## Personnalisation

Le site offre plusieurs thèmes accessibles via le sélecteur en haut à droite:
- **Light**: Thème clair professionnel
- **Dark**: Thème sombre élégant
- **Fantasy**: Thème coloré avec des accents violets
- **Tech**: Thème axé technologie avec des accents bleus

## Pour plus d'informations

Pour une documentation complète sur la structure et les fonctionnalités du site, consultez le fichier `structure.md` à la racine du projet.

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
