# Frontend

Ce projet a été généré à l'aide de [Angular CLI](https://github.com/angular/angular-cli) version 21.1.2.

## Description du Projet

Ce projet est un portfolio personnel développé avec Angular. Il présente mes compétences, mes projets et mon parcours. Le portfolio est structuré de manière à offrir une expérience utilisateur fluide et intuitive.

## Dépendances

Le projet utilise les technologies suivantes :
- **Angular**: Framework de développement web utilisé pour construire l'interface utilisateur.
- **TypeScript**: Langage de programmation utilisé pour le développement.
- **Angular CLI**: Outil de ligne de commande pour gérer le projet Angular.

## Structure du Projet

Le projet est organisé comme suit :
- **src/**: Contient le code source de l'application.
  - **app/**: Contient les composants, services et autres fichiers de l'application.
  - **assets/**: Contient les fichiers statiques tels que les images et les documents.
  - **environments/**: Contient les fichiers de configuration pour les différents environnements (développement, production).
- **public/**: Contient les fichiers statiques publics tels que les PDF et les images de couverture.
- **frontend/**: Contient les fichiers de configuration spécifiques à l'application Angular.

## Développement

### Lancement du Serveur de Développement

Pour démarrer un serveur de développement local, exécutez la commande suivante :

```bash
ng serve
```

Une fois le serveur lancé, ouvrez votre navigateur et accédez à `http://localhost:4200/`. L'application se rechargera automatiquement lorsque vous modifierez l'un des fichiers source.

### Génération de Composants

Pour générer un nouveau composant, utilisez la commande suivante :

```bash
ng generate component component-name
```

Pour obtenir une liste complète des schémas disponibles (comme `components`, `directives`, ou `pipes`), exécutez :

```bash
ng generate --help
```

## Construction

Pour construire le projet, exécutez la commande suivante :

```bash
ng build
```

Cette commande compilera votre projet et stockera les artefacts de construction dans le répertoire `dist/`. Par défaut, la construction de production optimise votre application pour la performance et la vitesse.

## Tests

### Tests Unitaires

Pour exécuter les tests unitaires avec le test runner [Vitest](https://vitest.dev/), utilisez la commande suivante :

```bash
ng test
```

### Tests End-to-End

Pour les tests end-to-end (e2e), exécutez la commande suivante :

```bash
ng e2e
```

Angular CLI ne fournit pas de framework de test end-to-end par défaut. Vous pouvez choisir un framework qui convient à vos besoins.

## Déploiement

Pour déployer l'application, vous pouvez utiliser [Vercel](https://vercel.com/). Assurez-vous de configurer correctement le fichier `vercel.json` pour le déploiement.

## Contributing

Si vous souhaitez contribuer à ce projet, veuillez suivre les étapes suivantes :
1. Forker le dépôt.
2. Créer une branche pour vos modifications (`git checkout -b feature/AmazingFeature`).
3. Commiter vos modifications (`git commit -m 'Add some AmazingFeature'`).
4. Pusher la branche (`git push origin feature/AmazingFeature`).
5. Ouvrir une Pull Request.

## License

Ce projet est sous licence MIT. Pour plus d'informations, consultez le fichier [LICENSE](LICENSE).

## Contact

Pour toute question ou suggestion, n'hésitez pas à contacter l'équipe de développement via [GitHub Issues](https://github.com/your-repo/issues) ou par email à [contact@example.com](mailto:contact@example.com).

## Auteurs

- **Alexandre PHAM** - Développeur Full-Stack
- **Contributeurs** - [Liste des contributeurs](https://github.com/your-repo/graphs/contributors)

## Remerciements

Nous tenons à remercier tous ceux qui ont contribué à ce projet, ainsi que les outils et bibliothèques utilisés pour sa réalisation.
