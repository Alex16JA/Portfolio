/**
 * DataService - Service de données pour le Portfolio
 * Utilise HttpClient et Signals (Angular 20)
 */

import { Injectable, inject, signal, computed } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';

// ============================================================================
// Interfaces TypeScript (correspond aux TypedDict du backend)
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
    niveau: number; // sur 10
    categorie: string;
}

export interface TimelineEvent {
    annee: string;
    titre: string;
    etablissement: string;
    description: string;
}

export interface PortfolioData {
    projects: Project[];
    skills: Skill[];
    timeline: TimelineEvent[];
}

// ============================================================================
// DataService avec Signals
// ============================================================================

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private readonly http = inject(HttpClient);
    private readonly API_URL = 'http://localhost:5000/api/data';

    // -------------------------------------------------------------------------
    // Writable Signals pour stocker les données
    // -------------------------------------------------------------------------

    /** Signal pour les projets */
    private readonly _projects = signal<Project[]>([]);

    /** Signal pour les compétences */
    private readonly _skills = signal<Skill[]>([]);

    /** Signal pour la timeline */
    private readonly _timeline = signal<TimelineEvent[]>([]);

    /** Signal pour l'état de chargement */
    private readonly _isLoading = signal<boolean>(false);

    /** Signal pour les erreurs */
    private readonly _error = signal<string | null>(null);

    // -------------------------------------------------------------------------
    // Signaux publics en lecture seule (exposés proprement)
    // -------------------------------------------------------------------------

    /** Projets (readonly) */
    readonly projects = this._projects.asReadonly();

    /** Compétences (readonly) */
    readonly skills = this._skills.asReadonly();

    /** Timeline (readonly) */
    readonly timeline = this._timeline.asReadonly();

    /** État de chargement (readonly) */
    readonly isLoading = this._isLoading.asReadonly();

    /** Erreur (readonly) */
    readonly error = this._error.asReadonly();

    // -------------------------------------------------------------------------
    // Computed Signals (données dérivées)
    // -------------------------------------------------------------------------

    /** Compétences groupées par catégorie */
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

    /** Nombre total de projets */
    readonly projectCount = computed(() => this._projects().length);

    /** Timeline triée par année (la plus récente en premier) */
    readonly timelineSorted = computed(() => {
        return [...this._timeline()].sort((a, b) => {
            // Extraire la première année de chaque entrée
            const yearA = parseInt(a.annee.split(' ')[0], 10);
            const yearB = parseInt(b.annee.split(' ')[0], 10);
            return yearB - yearA;
        });
    });

    /** Indique si les données ont été chargées au moins une fois */
    readonly hasData = computed(() =>
        this._projects().length > 0 ||
        this._skills().length > 0 ||
        this._timeline().length > 0
    );

    // -------------------------------------------------------------------------
    // Méthodes publiques
    // -------------------------------------------------------------------------

    /**
     * Récupère toutes les données du portfolio depuis l'API
     * Utilise catchError pour gérer les erreurs de fetch
     */
    fetchPortfolioData(): Observable<PortfolioData> {
        // Reset de l'état
        this._isLoading.set(true);
        this._error.set(null);

        return this.http.get<PortfolioData>(this.API_URL).pipe(
            tap((data) => {
                // Mise à jour des signals avec les données reçues
                this._projects.set(data.projects);
                this._skills.set(data.skills);
                this._timeline.set(data.timeline);
                this._isLoading.set(false);

                console.log('✅ Portfolio data loaded successfully:', {
                    projects: data.projects.length,
                    skills: data.skills.length,
                    timeline: data.timeline.length
                });
            }),
            catchError((error: HttpErrorResponse) => {
                // Gestion des erreurs
                const errorMessage = this.handleError(error);
                this._error.set(errorMessage);
                this._isLoading.set(false);

                console.error('❌ Error fetching portfolio data:', errorMessage);

                // Retourne une erreur observable
                return throwError(() => new Error(errorMessage));
            })
        );
    }

    /**
     * Réinitialise toutes les données
     */
    resetData(): void {
        this._projects.set([]);
        this._skills.set([]);
        this._timeline.set([]);
        this._error.set(null);
    }

    // -------------------------------------------------------------------------
    // Méthodes privées
    // -------------------------------------------------------------------------

    /**
     * Gère les erreurs HTTP et retourne un message utilisateur
     */
    private handleError(error: HttpErrorResponse): string {
        let errorMessage: string;

        if (error.status === 0) {
            // Erreur réseau (serveur non accessible)
            errorMessage = 'Impossible de contacter le serveur. Vérifiez que le backend est lancé sur le port 5000.';
        } else if (error.status === 404) {
            // Route non trouvée
            errorMessage = 'L\'API n\'a pas été trouvée. Vérifiez l\'URL du backend.';
        } else if (error.status >= 500) {
            // Erreur serveur
            errorMessage = 'Erreur serveur. Veuillez réessayer plus tard.';
        } else {
            // Autres erreurs
            errorMessage = error.error?.message || `Erreur ${error.status}: ${error.statusText}`;
        }

        return errorMessage;
    }
}
