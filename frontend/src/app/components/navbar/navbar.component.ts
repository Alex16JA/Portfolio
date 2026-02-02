import { Component, signal, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    /** Liens de navigation */
    readonly navLinks = [
        { label: 'Accueil', href: '#hero' },
        { label: 'Projets', href: '#projects' },
        { label: 'Compétences', href: '#skills' },
        { label: 'Parcours', href: '#timeline' },
        { label: 'Contact', href: '#contact' }
    ];

    /** Lien vers le CV (téléchargement direct) */
    readonly cvLink = '/CV_Alexandre_PHAM_2025.pdf';

    /** État du scroll pour l'effet de fond */
    isScrolled = signal(false);

    /** État du menu mobile */
    isMobileMenuOpen = signal(false);

    @HostListener('window:scroll')
    onScroll(): void {
        this.isScrolled.set(window.scrollY > 50);
    }

    toggleMobileMenu(): void {
        this.isMobileMenuOpen.update(open => !open);
    }

    closeMobileMenu(): void {
        this.isMobileMenuOpen.set(false);
    }
}
