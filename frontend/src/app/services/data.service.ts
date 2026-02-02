/**
 * DataService - Service de données pour le Portfolio
 * Version STATIQUE - Pas besoin de backend !
 */

import { Injectable, signal, computed } from '@angular/core';
import { PROJECTS, SKILLS, TIMELINE } from '../data/portfolio-data';

// ============================================================================
// Interfaces TypeScript
// ============================================================================

export interface Project {
    id: number;
    titre: string;
    description: string;
    tags: string[];
    lien_github: string;
    image_placeholder: string;
}

export interface Skill {
    nom: string;
    niveau: number;
    categorie: string;
}

export interface TimelineEvent {
    annee: string;
    titre: string;
    etablissement: string;
    description: string;
}

// ============================================================================
// DataService avec Signals (données statiques)
// ============================================================================

@Injectable({
    providedIn: 'root'
})
export class DataService {
    // -------------------------------------------------------------------------
    // Signals avec données statiques directement
    // -------------------------------------------------------------------------

    private readonly _projects = signal<Project[]>(PROJECTS);
    private readonly _skills = signal<Skill[]>(SKILLS);
    private readonly _timeline = signal<TimelineEvent[]>(TIMELINE);
    private readonly _isLoading = signal<boolean>(false);
    private readonly _error = signal<string | null>(null);

    // -------------------------------------------------------------------------
    // Signaux publics en lecture seule
    // -------------------------------------------------------------------------

    readonly projects = this._projects.asReadonly();
    readonly skills = this._skills.asReadonly();
    readonly timeline = this._timeline.asReadonly();
    readonly isLoading = this._isLoading.asReadonly();
    readonly error = this._error.asReadonly();

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

    readonly projectCount = computed(() => this._projects().length);

    readonly timelineSorted = computed(() => {
        return [...this._timeline()].sort((a, b) => {
            const yearA = parseInt(a.annee.split(' ')[0], 10);
            const yearB = parseInt(b.annee.split(' ')[0], 10);
            return yearB - yearA;
        });
    });

    readonly hasData = computed(() =>
        this._projects().length > 0 ||
        this._skills().length > 0 ||
        this._timeline().length > 0
    );

    // -------------------------------------------------------------------------
    // Méthodes publiques (gardées pour compatibilité)
    // -------------------------------------------------------------------------

    /** Plus besoin de fetch - les données sont déjà là ! */
    loadData(): void {
        // Les données sont déjà chargées via les signaux
        console.log('✅ Portfolio data loaded (static)');
    }

    resetData(): void {
        this._projects.set([]);
        this._skills.set([]);
        this._timeline.set([]);
        this._error.set(null);
    }
}
