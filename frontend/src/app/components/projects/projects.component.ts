import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../services/data.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    /** Liste des projets à afficher */
    @Input() projects: Project[] = [];

    /** Projet actuellement survolé (pour effet) */
    hoveredProjectId: number | null = null;

    /** Définit le projet survolé */
    setHovered(id: number | null): void {
        this.hoveredProjectId = id;
    }

    /** Ouvre le lien GitHub dans un nouvel onglet */
    openGithub(url: string): void {
        window.open(url, '_blank', 'noopener,noreferrer');
    }
}
