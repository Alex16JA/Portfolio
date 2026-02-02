import { Component, OnInit, inject } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

// Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { TimelineComponent } from './components/timeline/timeline.component';

// Services
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    KeyValuePipe,
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    TimelineComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly dataService = inject(DataService);

  // Expose les signals du service
  readonly projects = this.dataService.projects;
  readonly skills = this.dataService.skills;
  readonly timeline = this.dataService.timelineSorted;
  readonly isLoading = this.dataService.isLoading;
  readonly error = this.dataService.error;

  ngOnInit(): void {
    this.loadData();
  }

  /** Charge les données depuis l'API */
  loadData(): void {
    this.dataService.fetchPortfolioData().subscribe({
      error: () => {
        // L'erreur est déjà gérée dans le service
        console.warn('Utilisation des données en mode hors ligne');
      }
    });
  }

  /** Réessayer le chargement */
  retryLoad(): void {
    this.loadData();
  }
}
