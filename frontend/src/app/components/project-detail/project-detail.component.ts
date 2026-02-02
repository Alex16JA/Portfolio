import { Component, inject, signal, computed, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DataService, Project } from '../../services/data.service';
import { PROJECT_DETAILS, ProjectDetail } from '../../data/portfolio-data';

@Component({
    selector: 'app-project-detail',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './project-detail.component.html',
    styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
    private readonly route = inject(ActivatedRoute);
    private readonly router = inject(Router);
    private readonly dataService = inject(DataService);

    readonly projectId = signal<number | null>(null);

    readonly project = computed<Project | null>(() => {
        const id = this.projectId();
        if (id === null) return null;
        return this.dataService.projects().find(p => p.id === id) || null;
    });

    readonly projectDetail = computed<ProjectDetail | null>(() => {
        const id = this.projectId();
        if (id === null) return null;
        return PROJECT_DETAILS[id] || null;
    });

    readonly isLoading = this.dataService.isLoading;

    ngOnInit(): void {
        // Charger les projets si pas encore fait
        if (this.dataService.projects().length === 0) {
            this.dataService.fetchProjects();
        }

        // Récupérer l'ID du projet depuis l'URL
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            if (id) {
                this.projectId.set(parseInt(id, 10));
            }
        });
    }

    goBack(): void {
        this.router.navigate(['/']);
    }

    openLink(url: string): void {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}
