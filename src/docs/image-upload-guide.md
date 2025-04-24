
# Guide pour l'ajout d'images personnalisées

Ce guide explique comment ajouter et utiliser vos propres images dans le site, que ce soit pour le portfolio, le blog ou d'autres sections.

## Méthode 1: Utiliser le dossier public/images

Cette méthode est recommandée pour les images statiques qui font partie intégrante du site.

### Étapes:

1. **Préparer vos images**
   - Optimisez vos images pour le web (compression, dimensions appropriées)
   - Formats recommandés: `.jpg`, `.png`, `.webp`
   - Résolution recommandée: 1200x800px pour les grandes images, 600x400px pour les vignettes

2. **Organiser vos images**
   - Placez vos images dans le dossier `public/images/`
   - Créez des sous-dossiers pour mieux organiser (`portfolio`, `blog`, etc.)
   - Exemple: `public/images/portfolio/projet-a.jpg`

3. **Référencer vos images dans le code**
   - Utilisez le chemin relatif depuis la racine, commençant par `/images/`
   - Exemple: `<img src="/images/portfolio/projet-a.jpg" alt="Projet A" />`

### Exemple pour le Portfolio:

Pour ajouter un nouveau projet avec votre image personnalisée:

```jsx
// Dans src/data/portfolioProjects.ts
{
  id: "mon-nouveau-projet",
  title: "Mon Nouveau Projet",
  description: "Description du projet...",
  categories: ["web", "design"],
  image: "/images/portfolio/mon-nouveau-projet.jpg",
  link: "/portfolio/mon-nouveau-projet"
}
```

### Exemple pour le Blog:

Pour ajouter une image dans un article de blog:

```jsx
// Dans src/data/blogPosts.tsx
{
  title: "Mon nouvel article",
  content: (
    <>
      <p>Introduction de l'article...</p>
      <img 
        src="/images/blog/mon-image-article.jpg" 
        alt="Description de l'image" 
        className="w-full rounded-lg my-6" 
      />
      <p>Suite du contenu...</p>
    </>
  ),
  // Autres propriétés...
}
```

## Méthode 2: Télécharger via l'interface Lovable

Cette méthode est idéale pour les ajouts rapides pendant le développement du site.

### Étapes:

1. **Télécharger l'image**
   - Dans la conversation avec Lovable, cliquez sur l'icône d'image (📎)
   - Sélectionnez l'image à télécharger depuis votre ordinateur
   - L'image sera automatiquement téléchargée et disponible dans le dossier `/lovable-uploads/`

2. **Utiliser l'image**
   - Lovable vous fournira le chemin complet vers l'image (par ex. `/public/lovable-uploads/123abc-image.jpg`)
   - Utilisez ce chemin dans votre code pour référencer l'image

### Exemple d'utilisation:

```jsx
<img 
  src="/public/lovable-uploads/123abc-image.jpg" 
  alt="Description de l'image" 
  className="rounded-lg shadow-md"
/>
```

## Bonnes pratiques pour les images

1. **Optimisation**
   - Compressez vos images avant de les ajouter (utilisez des outils comme TinyPNG, ImageOptim)
   - Utilisez `.webp` quand possible pour un meilleur rapport qualité/taille

2. **Accessibilité**
   - Toujours inclure des attributs `alt` descriptifs pour chaque image
   - Utilisez des textes alternatifs qui décrivent la fonction ou le contenu de l'image

3. **Responsive**
   - Utilisez les classes Tailwind appropriées (ex: `w-full h-auto`)
   - Pour les images importantes, envisagez d'utiliser des versions différentes selon la taille d'écran

4. **Organisation**
   - Maintenez une structure de dossiers cohérente pour vos images
   - Nommez vos fichiers de manière descriptive et utilisez des tirets pour les espaces
   
5. **Copyright**
   - N'utilisez que des images dont vous possédez les droits ou qui sont libres de droits
   - Créditez les auteurs quand nécessaire

## Résolution de problèmes

- **Image non affichée**: Vérifiez le chemin d'accès et assurez-vous que l'image existe à l'emplacement spécifié
- **Image trop grande**: Assurez-vous d'avoir optimisé l'image avant de l'ajouter
- **Problèmes de performance**: Si le chargement des images ralentit le site, envisagez d'utiliser le lazy loading

En suivant ce guide, vous pourrez facilement ajouter et gérer des images personnalisées dans votre site portfolio.
