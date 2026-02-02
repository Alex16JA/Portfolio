import { Component, Input } from '@angular/core';
import { TimelineEvent } from '../../services/data.service';

@Component({
    selector: 'app-timeline',
    standalone: true,
    templateUrl: './timeline.component.html',
    styleUrl: './timeline.component.css'
})
export class TimelineComponent {
    /** Liste des événements de la timeline */
    @Input() events: TimelineEvent[] = [];

    /** Index de l'événement actif (survolé) */
    activeIndex: number | null = null;

    /** Définit l'événement actif */
    setActive(index: number | null): void {
        this.activeIndex = index;
    }
}
