import { Component, OnInit, inject } from '@angular/core';

// Components
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { TimelineComponent } from '../timeline/timeline.component';

// Services
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NavbarComponent,
        HeroComponent,
        ProjectsComponent,
        SkillsComponent,
        TimelineComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    private readonly dataService = inject(DataService);

    // Signals
    readonly projects = this.dataService.projects;
    readonly skills = this.dataService.skills;
    readonly timeline = this.dataService.timelineSorted;
    readonly isLoading = this.dataService.isLoading;
    readonly error = this.dataService.error;

    ngOnInit(): void {
        // Charge les projets depuis GitHub au démarrage
        this.dataService.fetchProjects();
    }

    retryLoad(): void {
        this.dataService.fetchProjects();
    }
}
