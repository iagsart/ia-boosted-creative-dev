# Guide pour synchroniser votre projet avec GitHub

## État actuel de votre projet

Votre projet est déjà initialisé avec Git (un dépôt Git local existe), mais il semble qu'aucun dépôt distant n'est actuellement configuré.

## Étapes pour synchroniser votre projet avec GitHub

### 1. Vérifier l'état actuel

```bash
git status
```

Cette commande vous montre les fichiers modifiés, ajoutés ou supprimés.

### 2. Ajouter les fichiers à l'index

Pour ajouter tous les fichiers modifiés :

```bash
git add .
```

Ou pour ajouter des fichiers spécifiques :

```bash
git add chemin/vers/fichier
```

### 3. Créer un commit

```bash
git commit -m "Description des modifications apportées"
```

### 4. Pousser les modifications vers GitHub

Pour pousser vers le dépôt distant déjà configuré (nommé 'dev') :

```bash
git push dev master
```

Si vous souhaitez pousser vers une branche différente :

```bash
git push dev nom-de-votre-branche
```

## Configuration d'un dépôt distant

Pour configurer un dépôt distant nommé 'dev' :

```bash
git remote add dev https://github.com/iagsart/hylst-digital-solutions.git
```

Pour vérifier que le dépôt distant a bien été ajouté :

```bash
git remote -v
```

Si vous souhaitez changer l'URL d'un dépôt distant existant :

```bash
git remote set-url nom-du-remote nouvelle-url
```

Pour ajouter un autre dépôt distant (par exemple 'origin') :

```bash
git remote add origin https://github.com/votre-nom-utilisateur/votre-nouveau-depot.git
```

Pour pousser votre code vers ce dépôt distant :

```bash
git push -u nom-du-remote master
```

## Conseils supplémentaires

- Utilisez `git pull dev master` pour récupérer les dernières modifications du dépôt distant avant de pousser vos propres modifications
- Créez des branches pour travailler sur des fonctionnalités spécifiques : `git checkout -b nom-de-la-branche`
- Utilisez `.gitignore` pour exclure les fichiers que vous ne souhaitez pas synchroniser

## Authentification

Lors de votre premier push, GitHub vous demandera de vous authentifier. Vous pouvez utiliser :

- Votre nom d'utilisateur et mot de passe GitHub
- Un token d'accès personnel (recommandé)
- Une clé SSH (pour une utilisation avancée)

Pour plus d'informations, consultez la [documentation officielle de GitHub](https://docs.github.com/fr).