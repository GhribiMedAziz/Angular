import { Component, computed, inject, input } from '@angular/core';
import { Router } from '@angular/router';
import { ConferenceService } from '../services/conference.service';

@Component({
  selector: 'app-conferance-details',
  imports: [],
  templateUrl: './conferance-details.html',
  styleUrl: './conferance-details.css',
})
export class ConferanceDetails {
  /**
   * PROSIT 3 : Résolution moderne du routage avec les Signals et withComponentInputBinding()
   * Plutôt que d'injecter ActivatedRoute et de faire un subscribe() complexe sur les params,
   * Angular 21 lie directement le paramètre d'URL ':id' à cette propriété Signal `input` !
   */
  id = input.required<string>();

  private readonly router = inject(Router);
  private readonly confService = inject(ConferenceService);

  // Recherche réactive de la conférence liée à l'ID reçu
  readonly conference = computed(() => this.confService.getConferenceById(this.id()));

  /**
   * PROSIT 3 : Navigation programmée avec le service Router
   * Déclenche une transition d'URL depuis le code TypeScript (événement métier)
   */
  inscrire(): void {
    this.router.navigate(['/conferences', this.id(), 'register']);
  }

  retour(): void {
    this.router.navigate(['/conferences']);
  }
}
