/**
 * GitHub Service - Récupère les projets directement depuis l'API GitHub
 * Pas besoin de backend, appel direct à l'API publique !
 */

import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Project } from './data.service';

// Interface pour la réponse GitHub
interface GitHubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    language: string | null;
    topics: string[];
    stargazers_count: number;
    updated_at: string;
    fork: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class GitHubService {
    private readonly http = inject(HttpClient);

    // 🔧 CONFIGURE TON USERNAME ICI
    private readonly GITHUB_USERNAME = 'Alex16JA';
    private readonly API_URL = `https://api.github.com/users/${this.GITHUB_USERNAME}/repos`;

    // Signal pour le loading
    private readonly _isLoading = signal<boolean>(false);
    readonly isLoading = this._isLoading.asReadonly();

    /**
     * Récupère tous les repos publics depuis GitHub
     */
    fetchProjects(): Observable<Project[]> {
        this._isLoading.set(true);

        return this.http.get<GitHubRepo[]>(this.API_URL, {
            params: {
                sort: 'updated',
                direction: 'desc',
                per_page: '100'
            }
        }).pipe(
            map(repos => this.transformRepos(repos)),
            tap(() => this._isLoading.set(false)),
            catchError(error => {
                console.error('❌ Erreur GitHub API:', error);
                this._isLoading.set(false);
                return of([]);
            })
        );
    }

    /**
     * Transforme les repos GitHub en format Project
     */
    private transformRepos(repos: GitHubRepo[]): Project[] {
        return repos
            .filter(repo => !repo.fork) // Exclure les forks
            .map((repo, index) => {
                // Construire les tags
                const tags: string[] = [];
                if (repo.language) {
                    tags.push(repo.language);
                }
                if (repo.topics) {
                    tags.push(...repo.topics.slice(0, 4));
                }

                return {
                    id: index + 1,
                    titre: repo.name,
                    description: repo.description || 'Pas de description disponible.',
                    tags: tags.length > 0 ? tags : ['Code'],
                    lien_github: repo.html_url,
                    image_placeholder: '',
                    stars: repo.stargazers_count,
                    updated_at: repo.updated_at
                };
            });
    }
}
