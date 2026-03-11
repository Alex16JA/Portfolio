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
    { nom: "Git/GitHub", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { nom: "Linux (Ubuntu)", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },
    { nom: "Jenkins", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { nom: "Kubernetes", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },

    // Outils de conception
    { nom: "VSCode", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { nom: "Figma", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
    { nom: "Canva", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    { nom: "Trello", categorie: "Outils", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg" },

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
    }
];

