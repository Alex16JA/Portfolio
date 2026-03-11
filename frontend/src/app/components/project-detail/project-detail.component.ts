import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DataService, Project } from '../../services/data.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private dataService = inject(DataService);
  private location = inject(Location);

  project = signal<Project | null>(null);
  zoomedImage = signal<string | null>(null);

  ngOnInit(): void {
    window.scrollTo(0, 0); // Reset scroll
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const p = this.dataService.getProjectById(id);
      if (p) {
        this.project.set(p);
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

  openLink(url?: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  openZoom(imageUrl: string): void {
    this.zoomedImage.set(imageUrl);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeZoom(): void {
    this.zoomedImage.set(null);
    document.body.style.overflow = '';
  }
}
