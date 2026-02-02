import { Routes } from '@angular/router';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: 'project/:id',
        component: ProjectDetailComponent,
        title: 'Détail du projet'
    },
    {
        path: '',
        component: HomeComponent,
        title: 'Alexandre PHAM - Portfolio'
    }
];
