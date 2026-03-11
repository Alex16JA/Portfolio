import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Project } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  @Input() projects: Project[] = [];
  hoveredProjectId: string | null = null;

  setHovered(id: string | null): void {
      this.hoveredProjectId = id;
  }

  openGithub(url?: string): void {
      if (url) {
          window.open(url, '_blank');
      }
  }
}
