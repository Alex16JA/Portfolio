/**
 * DataService - Service de données pour le Portfolio
 * Utilise des données complètement statiques
 */

import { Injectable, inject, signal, computed } from '@angular/core';
import { SKILLS, TIMELINE, PROJECTS } from '../data/portfolio-data';

// ============================================================================
// Interfaces TypeScript
// ============================================================================


export interface TechStack {
    name: string;
    icon?: string;
}

export interface GalleryItem {
    image: string;
    title: string;
    description: string;
}

export interface Project {
    id: string;
    titre: string;
    description: string;
    descriptionLong?: string;
    tags: string[];
    lien_github?: string;
    lien_demo?: string;
    cover: string;
    gallery?: GalleryItem[];
    stack?: TechStack[];
    bilan?: string[];
}

export interface Skill {
    nom: string;
    niveau?: number;
    categorie: string;
    icon?: string;
}

export interface TimelineEvent {
    annee: string;
    titre: string;
    etablissement: string;
    description: string;
}

// ============================================================================
// DataService avec GitHub API
// ============================================================================

@Injectable({
    providedIn: 'root'
})
export class DataService {


    // -------------------------------------------------------------------------
    // Signals
    // -------------------------------------------------------------------------


    private readonly _projects = signal<Project[]>(PROJECTS);
    private readonly _skills = signal<Skill[]>(SKILLS);
    private readonly _timeline = signal<TimelineEvent[]>(TIMELINE);


    // -------------------------------------------------------------------------
    // Signaux publics
    // -------------------------------------------------------------------------


    readonly projects = this._projects.asReadonly();
    readonly skills = this._skills.asReadonly();
    readonly timeline = this._timeline.asReadonly();


    // -------------------------------------------------------------------------
    // Computed Signals
    // -------------------------------------------------------------------------

    readonly skillsByCategory = computed(() => {
        const skills = this._skills();
        const grouped = new Map<string, Skill[]>();

        for (const skill of skills) {
            const category = skill.categorie;
            if (!grouped.has(category)) {
                grouped.set(category, []);
            }
            grouped.get(category)!.push(skill);
        }

        return grouped;
    });



    readonly timelineSorted = computed(() => {
        return [...this._timeline()].sort((a, b) => {
            const yearA = parseInt(a.annee.split(' ')[0], 10);
            const yearB = parseInt(b.annee.split(' ')[0], 10);
            return yearB - yearA;
        });
    });
    readonly projectCount = computed(() => this._projects().length);
    readonly hasData = computed(() => this._projects().length > 0);

    getProjectById(id: string): Project | undefined {
        return this._projects().find(p => p.id === id);
    }
}