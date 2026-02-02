import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.css'
})
export class HeroComponent {
    /** Nom à afficher */
    @Input() name = 'Alex Music';

    /** Titre/Rôle */
    @Input() title = 'Développeur Full-Stack';

    /** Description courte */
    @Input() description = 'Étudiant en BUT 3 Informatique passionné par le développement web, les architectures cloud et l\'intelligence artificielle.';

    /** Scroll vers la section projets */
    scrollToProjects(): void {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    /** Scroll vers la section contact */
    scrollToContact(): void {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}
