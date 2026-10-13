import { Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ConferenceService } from '../services/conference.service';

@Component({
  selector: 'app-inscription',
  imports: [FormsModule, RouterLink],
  templateUrl: './inscription.html',
  styleUrl: './inscription.css',
})
export class Inscription {
  /**
   * PROSIT 3 : Route paramétrée avec input binding
   * Récupère automatiquement l'ID si passé dans l'URL (/conferences/:id/register)
   */
  id = input<string>();

  private readonly router = inject(Router);
  private readonly confService = inject(ConferenceService);

  readonly allConferences = this.confService.conferences;

  // Données du formulaire
  participantName = signal('');
  participantEmail = signal('');
  selectedConfId = signal<number | null>(null);

  constructor() {
    // Si un ID est fourni dans l'URL, on le pré-sélectionne
    if (this.id()) {
      this.selectedConfId.set(Number(this.id()));
    }
  }

  readonly currentConference = computed(() => {
    const idVal = this.id() ? Number(this.id()) : this.selectedConfId();
    if (!idVal) return null;
    return this.confService.getConferenceById(idVal);
  });

  /**
   * PROSIT 3 : Navigation programmée
   * Après une inscription réussie, redirection automatique sans intervention de l'utilisateur
   */
  validerInscription(): void {
    if (!this.participantName() || !this.participantEmail()) {
      alert('Veuillez remplir tous les champs du formulaire.');
      return;
    }

    const confId = this.id() ? this.id() : this.selectedConfId()?.toString();
    const conf = confId ? this.confService.getConferenceById(confId) : undefined;
    const confTitle = conf ? conf.name : 'Conférence Générale';

    // NAVIGATION PROGRAMMÉE avec le service Router (Prosit 3)
    this.router.navigate(['/confirmation'], {
      queryParams: {
        nom: this.participantName(),
        email: this.participantEmail(),
        conference: confTitle
      }
    });
  }
}
