/**
 * Données statiques du portfolio
 * Compétences et Timeline
 */

import { Skill, TimelineEvent, Project } from '../services/data.service';

// ============================================================================
// COMPÉTENCES
// ============================================================================

export const SKILLS: Skill[] = [
    // Langages de programmation
    { nom: "Java", categorie: "Langages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { nom: "Python", categorie: "Langages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { nom: "C", categorie: "Langages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { nom: "TypeScript", categorie: "Langages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { nom: "PHP", categorie: "Langages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
    { nom: "Shell", categorie: "Langages", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },

    // Mobile & Cross-platform
    { nom: "Flutter", categorie: "Mobile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },

    // Frameworks
    { nom: "Angular", categorie: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
    { nom: "Flask", categorie: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { nom: "JUnit", categorie: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },
    { nom: "Spring Boot", categorie: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    { nom: "REST API", categorie: "API", icon: "https://img.icons8.com/ios-filled/50/000000/api-settings.png" },

    // Bases de données
    { nom: "PostgreSQL", categorie: "Base de données", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { nom: "MySQL", categorie: "Base de données", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { nom: "MongoDB", categorie: "Base de données", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

    // DevOps & Outils
    { nom: "Docker", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { nom: "Git", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { nom: "GitHub", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { nom: "Linux (Ubuntu)", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
    { nom: "Jenkins", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { nom: "Kubernetes", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },

    // Outils de conception
    { nom: "VSCode", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { nom: "Figma", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { nom: "Canva", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { nom: "Trello", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" },
    { nom: "Jira", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },

    // Méthodologies
    { nom: "Agile/Scrum", categorie: "Méthodologies", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
];

// ============================================================================
// TIMELINE (Parcours)
// ============================================================================

export const TIMELINE: TimelineEvent[] = [
    {
        annee: "Juillet 2025 - Décembre 2025",
        titre: "Équipier Polyvalent",
        etablissement: "McDonald's",
        description: "Travail en équipe dans un environnement à rythme soutenu. Compétences développées : polyvalence, ponctualité."
    },
    {
        annee: "Avril 2025 - Juin 2025",
        titre: "Stage Développeur Web (Angular)",
        etablissement: "Césarée",
        description: "Développement Front-End avec Angular. Conception d'interfaces utilisateurs dynamiques et réactives."
    },
    {
        annee: "2023 - Présent",
        titre: "BUT Informatique 3ème année",
        etablissement: "IUT de Montreuil",
        description: "Formation complète en informatique : développement web, bases de données, réseaux et gestion de projets."
    },
    {
        annee: "2023",
        titre: "Baccalauréat Général",
        etablissement: "Lycée",
        description: "Baccalauréat avec spécialités Mathématiques et NSI."
    },
];

// ============================================================================
// PROJETS
// ============================================================================

export const PROJECTS: Project[] = [
    {
        id: "portfolio",
        titre: "Portfolio",
        description: "Ce portfolio est une application web responsive développée pour présenter mes projets, compétences et parcours. Il met en avant une navigation fluide, un design moderne et une intégration dynamique.",
        descriptionLong: "Ce projet m'a permis de perfectionner mes compétences en Angular, en responsive design, et en développement front-end moderne. J'ai également travaillé sur l'accessibilité et l'optimisation des performances. Le portfolio est pensé pour être facilement évolutif et maintenable. Les données sont désormais entièrement statiques pour des performances optimales.",
        tags: ["Angular", "TypeScript", "HTML/CSS"],
        lien_github: "https://github.com/Alex16JA/Portfolio",
        cover: "/assets/covers/Portfolio/PortfolioCover.png",
        gallery: [
            {
                image: "/assets/screenshots/Portfolio/PortfolioHome.png",
                title: "Page d'accueil",
                description: "Présentation de l'accueil et des projets récents."
            },
            {
                image: "/assets/screenshots/Portfolio/PortfolioSkill.png",
                title: "Compétences",
                description: "Mise en avant des différentes technologies maîtrisées."
            },
            {
                image: "/assets/screenshots/Portfolio/PortfolioParcours.png",
                title: "Parcours et Expériences",
                description: "Affichage chronologique du parcours professionnel et scolaire."
            },
            {
                image: "/assets/screenshots/Portfolio/PortfolioMobile.png",
                title: "Mobile Design",
                description: "Adaptation parfaite sur tous les supports mobiles."
            }
        ],
        stack: [
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
        ],
        bilan: [
            "Architecture basée sur des composants Angular isolés",
            "Responsive design complet avec CSS natif",
            "Données statiques pour une performance maximale et aucun délai de chargement",
            "Effets visuels modernes inspirés du style glassmorphism"
        ]
    },
    {
        id: "league-of-clicker",
        titre: "League Of Clicker",
        description: "Projet de 2ème année de BUT Informatique visant à apprendre le développement mobile.",
        descriptionLong: "League Of Clicker est une application mobile développée en Flutter et Dart, avec un backend en PHP. Ce projet d'étude m'a permis de me familiariser avec le développement mobile cross-platform, la gestion des états en Flutter, et la communication avec une API web.",
        tags: ["Flutter", "Dart", "PHP", "Mobile"],
        lien_github: "https://github.com/edetommaso/LOL_Clicker",
        cover: "/assets/covers/LoC/LoCCover.png",
        gallery: [
            {
                image: "/assets/screenshots/LoC/LoCHome.png",
                title: "Accueil de l'application",
                description: "Vue principale avec les informations globales de League Of Clicker."
            },
            {
                image: "/assets/screenshots/LoC/LoCMonster.png",
                title: "Combat de monstres",
                description: "Vue du jeu en plein combat contre les monstres."
            },
            {
                image: "/assets/screenshots/LoC/LoCStat.png",
                title: "Statistiques du joueur",
                description: "Écran détaillant les statistiques actuelles du joueur."
            },
            {
                image: "/assets/screenshots/LoC/LoCShop.png",
                title: "Boutique du jeu",
                description: "Boutique pour acheter des améliorations."
            }
        ],
        stack: [
            { name: "Flutter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
            { name: "Dart", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
            { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" }
        ],
        bilan: [
            "Apprentissage du framework Flutter pour le mobile",
            "Création d'interfaces mobiles interactives et réactives",
            "Communication asynchrone avec une API web en PHP"
        ]
    },
    {
        id: "cognicard",
        titre: "CogniCard",
        description: "Application web de flashcards intelligente permettant de créer, organiser et réviser des cartes de mémorisation par catégories et cours.",
        descriptionLong: "CogniCard (Flash Notes) est une application de révision par flashcards développée dans le cadre d'un projet de 3ème année de BUT Informatique. Elle permet aux utilisateurs de créer un compte, d'organiser leurs cartes en catégories et cours, puis de réviser via un système de questions/réponses. L'application propose des fonctionnalités de filtrage avancé, de gestion de compte et de personnalisation des contenus pédagogiques.",
        tags: ["Angular", "TypeScript", "Python", "Flask", "PostgreSQL"],
        cover: "/assets/covers/CC/CCCover.png",
        gallery: [
            {
                image: "/assets/screenshots/CC/CCCreeCompte.png",
                title: "Création de compte",
                description: "Formulaire d'inscription pour accéder à l'application."
            },
            {
                image: "/assets/screenshots/CC/CCGestionCompte.png",
                title: "Gestion du compte",
                description: "Interface de gestion et personnalisation du profil utilisateur."
            },
            {
                image: "/assets/screenshots/CC/CCCreeCategorie.png",
                title: "Création de catégorie",
                description: "Ajout d'une nouvelle catégorie pour organiser les flashcards."
            },
            {
                image: "/assets/screenshots/CC/CCAddCategorie.png",
                title: "Ajout de catégories",
                description: "Vue d'ensemble des catégories disponibles et ajout rapide."
            },
            {
                image: "/assets/screenshots/CC/CCAffichage.png",
                title: "Affichage des cours",
                description: "Liste des cours et flashcards disponibles dans une catégorie."
            },
            {
                image: "/assets/screenshots/CC/CCModifCours.png",
                title: "Modification de cours",
                description: "Édition du contenu d'un cours et de ses flashcards associées."
            },
            {
                image: "/assets/screenshots/CC/CCFiltre.png",
                title: "Filtrage Possible",
                description: "Système de filtres pour retrouver rapidement les cartes souhaitées."
            },
            {
                image: "/assets/screenshots/CC/CCVueQuestion.png",
                title: "Mode révision - Vue Question",
                description: "Affichage de la face question d'une flashcard lors de la révision."
            },
            {
                image: "/assets/screenshots/CC/CCVueReponse.png",
                title: "Mode révision - Vue Réponse",
                description: "Affichage de la réponse après avoir tenté de répondre à la question."
            }
        ],
        stack: [
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
        ],
        bilan: [
            "Conception et développement full-stack avec Angular et Flask",
            "Système d'authentification et gestion de comptes utilisateurs",
            "Organisation hiérarchique des contenus par catégories et cours",
            "Interface de révision interactive avec système question/réponse",
            "Filtrage avancé et recherche de flashcards"
        ]
    },
    {
        id: "reprise-appli",
        titre: "Reprise d'Application - Buvette",
        description: "Reprise et modernisation d'une application PHP de gestion de buvettes associatives vers une architecture Angular / Python Flask / PostgreSQL.",
        descriptionLong: "Ce projet de SAE de 3ème année consistait à reprendre une application existante en PHP dédiée à la gestion de buvettes associatives, et à la moderniser entièrement avec une stack moderne : Angular pour le front-end, Flask (Python) pour l'API back-end, et PostgreSQL pour la base de données. L'application permet de gérer les buvettes, les produits, le staff, les commandes et l'historique, avec un système d'authentification et de rôles.",
        tags: ["Angular", "TypeScript", "Python", "Flask", "PostgreSQL"],
        cover: "/assets/covers/Buv/BuvCover.png",
        gallery: [
            {
                image: "/assets/screenshots/Buv/BuvLogin.png",
                title: "Connexion",
                description: "Page de connexion sécurisée pour accéder à l'application."
            },
            {
                image: "/assets/screenshots/Buv/BuvRegister.png",
                title: "Inscription",
                description: "Formulaire d'inscription pour créer un nouveau compte."
            },
            {
                image: "/assets/screenshots/Buv/BuvHome.png",
                title: "Accueil",
                description: "Page d'accueil avec vue d'ensemble de l'application."
            },
            {
                image: "/assets/screenshots/Buv/BuvListBuv.png",
                title: "Liste des buvettes",
                description: "Affichage de toutes les buvettes associatives disponibles."
            },
            {
                image: "/assets/screenshots/Buv/BuvGestionBuv.png",
                title: "Gestion d'une buvette",
                description: "Interface d'administration et de gestion d'une buvette."
            },
            {
                image: "/assets/screenshots/Buv/BuvGestionStaff.png",
                title: "Gestion du staff",
                description: "Gestion des membres du staff affectés à une buvette."
            },
            {
                image: "/assets/screenshots/Buv/BuvProductList.png",
                title: "Liste des produits",
                description: "Catalogue des produits disponibles à la vente."
            },
            {
                image: "/assets/screenshots/Buv/BuvModifProduct.png",
                title: "Modification de produit",
                description: "Édition des informations d'un produit existant."
            },
            {
                image: "/assets/screenshots/Buv/BuvCart.png",
                title: "Panier",
                description: "Panier de commande avec récapitulatif des articles sélectionnés."
            },
            {
                image: "/assets/screenshots/Buv/BuvHistory.png",
                title: "Historique",
                description: "Historique global des activités et transactions."
            },
            {
                image: "/assets/screenshots/Buv/BuvHistoryCommand.png",
                title: "Historique des commandes",
                description: "Détail de l'historique des commandes passées."
            },
            {
                image: "/assets/screenshots/Buv/BuvRequestAddBuv.png",
                title: "Demande d'ajout de buvette",
                description: "Formulaire de demande pour créer une nouvelle buvette."
            },
            {
                image: "/assets/screenshots/Buv/BuvRequestAddBuvDemande.png",
                title: "Suivi des demandes",
                description: "Suivi et validation des demandes d'ajout de buvettes."
            }
        ],
        stack: [
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
        ],
        bilan: [
            "Migration complète d'une application PHP legacy vers une architecture moderne",
            "Développement full-stack avec Angular et Flask",
            "Gestion de buvettes avec système de rôles et permissions",
            "Système de commandes avec panier et historique",
            "Workflow de demandes d'ajout de buvettes avec validation"
        ]
    },
    {
        id: "iut-coffee",
        titre: "IUT-Coffee",
        description: "Application web de Click & Collect pour simplifier les commandes à la cafétéria de l'IUT. Permet aux étudiants de passer commande en ligne et de retirer leurs produits à l'heure convenue.",
        descriptionLong: "IUT-Coffee est un projet de gestion de commandes Click & Collect développé pour la cafétéria de l'IUT de Montreuil. L'application permet aux étudiants de consulter le menu, de passer commande en ligne, de suivre l'avancement de leur commande et de retirer leurs produits à un horaire prédit. Le projet utilise une architecture moderne avec Angular pour le front-end, Flask (Python) pour l'API et PostgreSQL pour la base de données.",
        tags: ["Angular", "TypeScript", "Python", "Flask", "PostgreSQL"],
        cover: "/assets/covers/Caf/CafCover.jpg",
        gallery: [
            {
                image: "/assets/screenshots/Caf/CafLogin.png",
                title: "Connexion",
                description: "Page de connexion pour accéder à l'application."
            },
            {
                image: "/assets/screenshots/Caf/CafProductList.png",
                title: "Liste des produits",
                description: "Catalogue des produits disponibles à la cafétéria."
            },
            {
                image: "/assets/screenshots/Caf/CafAddProduct.png",
                title: "Ajout de produits au panier",
                description: "Interface d'ajout de produits au panier de commande."
            },
            {
                image: "/assets/screenshots/Caf/CafCart.png",
                title: "Panier de commande",
                description: "Récapitulatif du panier avec totals et options de validation."
            },
            {
                image: "/assets/screenshots/Caf/CafCommandStatus.png",
                title: "Suivi de commande",
                description: "Affichage du statut et de l'heure estimée de retrait de la commande."
            },
            {
                image: "/assets/screenshots/Caf/CafGestionCommand.png",
                title: "Gestion des commandes (Admin)",
                description: "Interface d'administration pour gérer les commandes en cours."
            },
            {
                image: "/assets/screenshots/Caf/CafGestionProduct.png",
                title: "Gestion des produits (Admin)",
                description: "Interface pour ajouter, modifier ou supprimer les produits du menu."
            }
        ],
        stack: [
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" }
        ],
        bilan: [
            "Développement d'un système de Click & Collect complet",
            "Gestion des commandes avec suivi de statut en temps réel",
            "Interface utilisateur pour clients et section d'administration",
            "Système d'authentification et gestion des rôles",
            "Optimisation du processus de commande pour réduire les files d'attente"
        ]
    }
];

