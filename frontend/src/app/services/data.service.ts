/**
 * DataService - Service de données pour le Portfolio
 * Utilise l'API GitHub pour les projets en temps réel !
 */

import { Injectable, inject, signal, computed } from '@angular/core';
import { GitHubService } from './github.service';
import { SKILLS, TIMELINE } from '../data/portfolio-data';

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
    stars?: number;
    updated_at?: string;
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
// DataService avec GitHub API
// ============================================================================

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly githubService = inject(GitHubService);

    // -------------------------------------------------------------------------
    // Signals
    // -------------------------------------------------------------------------

    private readonly _projects = signal<Project[]>([]);
    private readonly _skills = signal<Skill[]>(SKILLS);
    private readonly _timeline = signal<TimelineEvent[]>(TIMELINE);
    private readonly _isLoading = signal<boolean>(false);
    private readonly _error = signal<string | null>(null);

    // -------------------------------------------------------------------------
    // Signaux publics
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

    readonly hasData = computed(() => this._projects().length > 0);

    // -------------------------------------------------------------------------
    // Méthodes publiques
    // -------------------------------------------------------------------------

    /**
     * Charge les projets depuis l'API GitHub
     */
    fetchProjects(): void {
        this._isLoading.set(true);
        this._error.set(null);

        this.githubService.fetchProjects().subscribe({
            next: (projects) => {
                this._projects.set(projects);
                this._isLoading.set(false);
                console.log(`✅ ${projects.length} projets GitHub chargés !`);
            },
            error: (err) => {
                this._error.set('Impossible de charger les projets GitHub.');
                this._isLoading.set(false);
                console.error('❌ Erreur:', err);
            }
        });
    }

    resetData(): void {
        this._projects.set([]);
        this._error.set(null);
    }
}
