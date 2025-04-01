
# Guide pour ajouter vos propres images d'illustrations

## Option 1: Utiliser l'éditeur Lovable

L'éditeur Lovable vous permet d'uploader des images directement:

1. Cliquez sur le bouton "+" dans l'interface de chat
2. Sélectionnez votre image à uploader
3. L'image sera ensuite disponible à l'URL: `public/lovable-uploads/[nom-du-fichier].png`
4. Vous pouvez ensuite utiliser cette URL dans votre code

## Option 2: Stocker des images dans `public/images`

Pour une organisation plus structurée de vos images:

1. Créez un dossier `images` dans le répertoire `public`
2. Structurez-le avec des sous-dossiers, par exemple:
   - `public/images/portfolio/`
   - `public/images/blog/`
   - `public/images/logos/`
3. Référencez vos images par leur chemin relatif: `/images/portfolio/mon-projet.jpg`

## Comment ajouter des images à votre Portfolio

Pour ajouter un nouveau projet à votre portfolio:

1. Ouvrez le fichier `src/pages/Portfolio.tsx`
2. Localisez la section `webProjects` ou `desktopProjects`
3. Ajoutez un nouvel objet projet avec vos informations:

```jsx
{
  title: "Mon Nouveau Projet",
  category: "Catégorie du Projet",
  subcategory: "Web", // ou PC, ATARI, etc.
  description: "Description détaillée du projet...",
  image: "/images/portfolio/mon-nouveau-projet.jpg", // Votre image ici
  technologies: ["React", "Node.js", "MongoDB"],
  client: "Nom du client ou Projet personnel",
  year: "2023",
  link: "/portfolio/mon-nouveau-projet",
  featured: true // optionnel, pour mettre en avant
}
```

## Comment ajouter des images à votre Blog

Pour ajouter une nouvelle image à un article de blog:

1. Ouvrez le fichier `src/data/blogPosts.tsx`
2. Localisez l'article que vous souhaitez modifier
3. Mettez à jour le champ `image` avec le chemin de votre nouvelle image
4. Pour ajouter des images dans le contenu d'un article, utilisez la syntaxe markdown:

```markdown
![Description de l'image](/images/blog/mon-image.jpg)
```

## Recommandations pour les images

- **Formats**: Utilisez des formats optimisés pour le web comme JPG, PNG ou WebP
- **Dimensions**: 
  - Pour les images d'en-tête: environ 1200×800px
  - Pour les miniatures: environ 600×400px
- **Taille des fichiers**: Essayez de garder les images sous 200Ko pour de meilleures performances
- **Nommage**: Utilisez des noms descriptifs avec des tirets pour séparer les mots (ex: mon-nouveau-projet.jpg)

## Outils de compression d'images recommandés

- [TinyPNG](https://tinypng.com/) - Compression PNG et JPG
- [Squoosh](https://squoosh.app/) - Outil de compression avancé
- [Convertio](https://convertio.co/fr/) - Conversion entre formats d'image

N'hésitez pas à modifier la structure des dossiers selon vos besoins d'organisation.
