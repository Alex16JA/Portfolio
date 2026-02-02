import { Component, inject } from '@angular/core';

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
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    TimelineComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private readonly dataService = inject(DataService);

  // Expose les signals du service (données statiques)
  readonly projects = this.dataService.projects;
  readonly skills = this.dataService.skills;
  readonly timeline = this.dataService.timelineSorted;
}
