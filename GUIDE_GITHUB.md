# Guide pour synchroniser votre projet avec GitHub

## État actuel de votre projet

Votre projet est déjà initialisé avec Git (un dépôt Git local existe) et un dépôt distant est configuré sous le nom `dev` pointant vers `https://github.com/iagsart/ia-boosted-creative-dev.git`.

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

## Configuration d'un nouveau dépôt distant (si nécessaire)

Si vous souhaitez changer le dépôt distant ou en ajouter un nouveau :

1. Créez un nouveau dépôt sur GitHub
2. Ajoutez-le comme dépôt distant :

```bash
git remote add origin https://github.com/votre-nom-utilisateur/votre-nouveau-depot.git
```

3. Poussez votre code vers ce nouveau dépôt :

```bash
git push -u origin master
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