import { Component, Input, computed, signal } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { Skill } from '../../services/data.service';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [KeyValuePipe],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css'
})
export class SkillsComponent {
    /** Liste des compétences */
    @Input() set skills(value: Skill[]) {
        this._skills.set(value);
    }

    private readonly _skills = signal<Skill[]>([]);

    /** Catégorie actuellement filtrée (null = toutes) */
    activeCategory = signal<string | null>(null);

    /** Liste des catégories uniques */
    readonly categories = computed(() => {
        const skills = this._skills();
        const cats = new Set(skills.map(s => s.categorie));
        return ['Toutes', ...Array.from(cats)];
    });

    /** Compétences filtrées par catégorie */
    readonly filteredSkills = computed(() => {
        const skills = this._skills();
        const category = this.activeCategory();

        if (!category || category === 'Toutes') {
            return skills;
        }

        return skills.filter(s => s.categorie === category);
    });

    /** Compétences groupées par catégorie */
    readonly skillsByCategory = computed(() => {
        const skills = this.filteredSkills();
        const grouped = new Map<string, Skill[]>();

        for (const skill of skills) {
            if (!grouped.has(skill.categorie)) {
                grouped.set(skill.categorie, []);
            }
            grouped.get(skill.categorie)!.push(skill);
        }

        return grouped;
    });

    /** Définit la catégorie active */
    setCategory(category: string): void {
        this.activeCategory.set(category === 'Toutes' ? null : category);
    }
}
