
# Guide Complet pour Gérer Votre Site Web

Ce guide vous explique en détail comment gérer les aspects importants de votre site web, depuis la modification des images jusqu'à la mise en ligne et la gestion de votre base de données Supabase.

## 1. Gestion des Images

Les images sont organisées dans trois dossiers distincts :
- `/public/images/blog/` - Pour les articles du blog
- `/public/images/portfolio/` - Pour les projets du portfolio
- `/public/images/services/` - Pour les services

### Comment modifier les images des différentes sections

#### Pour le Blog

1. **Préparez vos images** : Format recommandé 800x450px, JPG ou WebP optimisé
2. **Placez-les** dans le dossier `/public/images/blog/`
3. **Modifiez la configuration** dans le fichier `src/data/constants.ts` :

```typescript
export const BLOG_IMAGES = {
  'nom-de-votre-article': '/images/blog/votre-image.jpg',
  // Autres articles...
};
```

4. **Vérifiez l'utilisation** : Ces images sont utilisées dans `src/components/blog/BlogList.tsx` et `src/pages/BlogPost.tsx`

#### Pour les Services

1. **Préparez vos images** : Format recommandé 800x600px
2. **Placez-les** dans le dossier `/public/images/services/`
3. **Modifiez la configuration** dans le fichier `src/data/constants.ts` :

```typescript
export const SERVICE_IMAGES = {
  development: '/images/services/votre-nouvelle-image.jpg',
  // Autres services...
};
```

4. **Vérifiez l'utilisation** : Ces images sont utilisées dans `src/components/services/ServicesGrid.tsx`

#### Pour le Portfolio

1. **Préparez vos images** : Format recommandé 1200x800px
2. **Placez-les** dans le dossier `/public/images/portfolio/`
3. **Modifiez la configuration** dans les fichiers :
   - `src/data/portfolioProjects.ts` pour les projets complets
   - `src/components/home/PortfolioSection.tsx` pour les projets mis en avant sur la page d'accueil

Exemple dans `portfolioProjects.ts` :
```typescript
{
  id: "votre-projet",
  title: "Votre Projet",
  // ...
  image: "/images/portfolio/votre-image.jpg",
  // ...
}
```

## 2. Reprise du Projet dans un Éditeur de Code et Mise en Ligne

### Préparation de l'environnement de développement

1. **Cloner le projet** depuis GitHub (si applicable) ou télécharger les fichiers
2. **Installer les dépendances** :
```bash
npm install
# ou
yarn install
# ou
bun install
```

3. **Démarrer le serveur de développement** :
```bash
npm run dev
# ou
yarn dev
# ou
bun dev
```

### Build et déploiement

1. **Créer une version optimisée** :
```bash
npm run build
# ou
yarn build
# ou
bun build
```

2. **Tester la version de production localement** :
```bash
npm run preview
# ou
yarn preview
# ou
bun preview
```

3. **Options de déploiement** :

- **Vercel** (recommandé) :
  - Créez un compte sur [Vercel](https://vercel.com/)
  - Importez votre projet depuis GitHub ou téléchargez le dossier
  - Vercel détectera automatiquement qu'il s'agit d'un projet Vite/React
  - Ajoutez les variables d'environnement nécessaires (clés Supabase, etc.)
  - Cliquez sur "Deploy"

- **Netlify** :
  - Créez un compte sur [Netlify](https://netlify.com/)
  - Importez votre projet ou glissez-déposez le dossier `dist` après le build
  - Configurez les paramètres de build : commande `npm run build`, dossier de publication `dist`
  - Ajoutez les variables d'environnement

- **GitHub Pages** :
  - Modifiez `vite.config.ts` pour ajouter votre base URL :
    ```typescript
    export default defineConfig({
      base: '/nom-de-votre-repo/', // Si hébergé sur GitHub Pages
      // ...
    })
    ```
  - Utilisez un workflow GitHub Actions pour automatiser le déploiement

### Variables d'environnement importantes

Créez un fichier `.env` à la racine du projet (pour le développement) :
```
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_clé_anonyme_supabase
```

Pour la production, configurez ces mêmes variables dans l'interface de votre hébergeur.

## 3. Gestion de Supabase (pour débutants)

### Éviter la mise en pause automatique

Supabase met en pause les projets gratuits après 1 semaine d'inactivité. Pour éviter cela :

1. **Option automatique : Utiliser un service de ping** :
   - Créez un compte sur [UptimeRobot](https://uptimerobot.com/) (gratuit)
   - Ajoutez un nouveau moniteur de type HTTP(s)
   - Entrez l'URL de votre API Supabase : `https://[votre-projet-id].supabase.co/rest/v1/`
   - Configurez une vérification toutes les 6-12 heures
   - Ajoutez un en-tête personnalisé : `apikey: [votre-clé-anon]`

2. **Option manuelle** : Visitez régulièrement votre dashboard Supabase

### Importation / Exportation de la base de données

#### Exportation de la base de données

1. **Depuis l'interface Supabase** :
   - Connectez-vous à votre [Dashboard Supabase](https://supabase.com/dashboard)
   - Sélectionnez votre projet
   - Allez dans "Database" > "Backups" 
   - Cliquez sur "Create a new backup"
   - Téléchargez le fichier SQL généré

2. **Avec la CLI Supabase** (pour utilisateurs plus avancés) :
   - Installez la CLI : `npm install -g supabase`
   - Connectez-vous : `supabase login`
   - Liez votre projet : `supabase link --project-ref votre-id-projet`
   - Exportez la base : `supabase db dump -f nom_de_fichier.sql`

#### Importation de la base de données

1. **Dans un nouveau projet Supabase** :
   - Créez un nouveau projet dans le Dashboard Supabase
   - Allez dans "SQL Editor"
   - Copiez-collez ou importez votre fichier SQL
   - Exécutez le script

2. **Avec la CLI** (avancé) :
   - Créez un nouveau projet
   - Liez-le : `supabase link --project-ref nouveau-id-projet`
   - Importez la base : `supabase db push nom_de_fichier.sql`

### Conseil important pour les débutants

Si vous modifiez la structure de votre base de données (ajout de tables, colonnes, etc.), gardez toujours une copie du script SQL correspondant. Cela vous permettra de recréer facilement votre structure en cas de problème.

## Astuces Supplémentaires

### Pour optimiser les images avant de les télécharger

- Utilisez [Squoosh](https://squoosh.app/) (en ligne, gratuit)
- Ou [ImageOptim](https://imageoptim.com/) (Mac)
- Ou [TinyPNG](https://tinypng.com/) (en ligne, gratuit)

### Pour éditer facilement le code

Éditeurs recommandés :
- [Visual Studio Code](https://code.visualstudio.com/) (gratuit, recommandé)
- Extensions utiles : ES7 React Snippets, Tailwind CSS IntelliSense, Prettier

### Pour sauvegarder régulièrement votre travail

- Utilisez Git et GitHub
- Ou téléchargez régulièrement une copie complète de votre projet

N'hésitez pas à me contacter si vous avez des questions supplémentaires !
