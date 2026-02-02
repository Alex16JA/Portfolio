/**
 * Données statiques du portfolio
 * Plus besoin de backend - tout est en local !
 */

import { Project, Skill, TimelineEvent } from '../services/data.service';

// ============================================================================
// PROJETS - Récupérés depuis GitHub (données statiques)
// ============================================================================

export const PROJECTS: Project[] = [
    {
        id: 1,
        titre: "Portfolio",
        description: "Mon portfolio personnel développé avec Angular 20 et un design violet élégant.",
        tags: ["TypeScript", "Angular", "CSS"],
        lien_github: "https://github.com/Alex16JA/Portfolio",
        image_placeholder: ""
    },
    {
        id: 2,
        titre: "GameOn",
        description: "Application web de gestion d'inscriptions pour des tournois de jeux vidéo.",
        tags: ["JavaScript", "HTML", "CSS"],
        lien_github: "https://github.com/Alex16JA/GameOn",
        image_placeholder: ""
    },
    {
        id: 3,
        titre: "FishEye",
        description: "Site de photographes avec galerie dynamique et accessibilité.",
        tags: ["JavaScript", "HTML", "CSS"],
        lien_github: "https://github.com/Alex16JA/FishEye",
        image_placeholder: ""
    }
];

// ============================================================================
// COMPÉTENCES
// ============================================================================

export const SKILLS: Skill[] = [
    // Langages de programmation
    { nom: "Java", niveau: 8, categorie: "Langages" },
    { nom: "Python", niveau: 8, categorie: "Langages" },
    { nom: "C", niveau: 7, categorie: "Langages" },
    { nom: "TypeScript", niveau: 8, categorie: "Langages" },
    { nom: "PHP", niveau: 6, categorie: "Langages" },
    { nom: "Shell", niveau: 7, categorie: "Langages" },

    // Frameworks
    { nom: "Angular", niveau: 9, categorie: "Frontend" },
    { nom: "Flask", niveau: 8, categorie: "Backend" },
    { nom: "JUnit", niveau: 7, categorie: "Backend" },

    // Bases de données
    { nom: "PostgreSQL", niveau: 8, categorie: "Base de données" },
    { nom: "MySQL", niveau: 8, categorie: "Base de données" },
    { nom: "MongoDB", niveau: 7, categorie: "Base de données" },

    // DevOps & Outils
    { nom: "Docker", niveau: 8, categorie: "DevOps" },
    { nom: "Git/GitHub", niveau: 9, categorie: "DevOps" },
    { nom: "Linux (Ubuntu)", niveau: 8, categorie: "DevOps" },

    // Outils de conception
    { nom: "VSCode", niveau: 9, categorie: "Outils" },
    { nom: "Figma", niveau: 7, categorie: "Outils" },
    { nom: "Canva", niveau: 7, categorie: "Outils" },
    { nom: "Trello", niveau: 8, categorie: "Outils" },

    // Méthodologies
    { nom: "Agile/Scrum", niveau: 8, categorie: "Méthodologies" },
];

// ============================================================================
// TIMELINE (Parcours)
// ============================================================================

export const TIMELINE: TimelineEvent[] = [
    // Expériences professionnelles
    {
        annee: "Juillet 2025 - Décembre 2025",
        titre: "Équipier Polyvalent",
        etablissement: "McDonald's",
        description: "Travail en équipe dans un environnement à rythme soutenu (gestion des rushs). Application stricte des normes d'hygiène et de sécurité. Compétences développées : polyvalence, ponctualité."
    },
    {
        annee: "Avril 2025 - Juin 2025",
        titre: "Stage Développeur Web (Angular)",
        etablissement: "Césarée",
        description: "Développement Front-End avec Angular. Conception et implémentation d'interfaces utilisateurs dynamiques et réactives. Optimisation de l'expérience utilisateur (UX/UI) et debugging."
    },
    // Formations
    {
        annee: "2023 - Présent",
        titre: "BUT Informatique 3ème année",
        etablissement: "IUT de Montreuil",
        description: "Formation complète en informatique : développement web, bases de données, réseaux et gestion de projets. Spécialisation en développement full-stack avec Angular et Flask."
    },
    {
        annee: "2023",
        titre: "Baccalauréat Général - Mention Assez Bien",
        etablissement: "Lycée",
        description: "Baccalauréat avec spécialités Mathématiques et NSI (Numérique et Sciences Informatiques)."
    },
];
