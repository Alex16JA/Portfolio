/**
 * Données statiques du portfolio
 * Compétences et Timeline (les projets viennent de l'API GitHub)
 */

import { Skill, TimelineEvent } from '../services/data.service';

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

    // Frameworks
    { nom: "Angular", categorie: "Frontend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
    { nom: "Flask", categorie: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { nom: "JUnit", categorie: "Backend", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg" },

    // Bases de données
    { nom: "PostgreSQL", categorie: "Base de données", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { nom: "MySQL", categorie: "Base de données", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { nom: "MongoDB", categorie: "Base de données", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

    // DevOps & Outils
    { nom: "Docker", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { nom: "Git/GitHub", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
    { nom: "Linux (Ubuntu)", categorie: "DevOps", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" },

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
        titre: "Baccalauréat Général - Mention Assez Bien",
        etablissement: "Lycée",
        description: "Baccalauréat avec spécialités Mathématiques et NSI."
    },
];

// ============================================================================
// DÉTAILS DES PROJETS (pour les pages dédiées)
// ============================================================================

export interface TechStack {
    name: string;
    icon?: string;
}

export interface ProjectDetail {
    description: string;
    screenshots?: string[];
    stack?: TechStack[];
    bilan?: string;
}

/**
 * Map des détails de projets, indexée par ID GitHub
 * Tu peux ajouter des détails pour chaque projet ici
 */
export const PROJECT_DETAILS: Record<number, ProjectDetail> = {
    // Exemple de structure - à remplir avec tes vrais projets
    // L'ID correspond à l'ID GitHub du repo
    /*
    123456789: {
        description: "Description détaillée du projet...",
        screenshots: [
            "/assets/screenshots/projet1-home.png",
            "/assets/screenshots/projet1-dashboard.png"
        ],
        stack: [
            { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        ],
        bilan: "Ce projet m'a permis d'apprendre..."
    }
    */
};

