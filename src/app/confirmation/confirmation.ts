import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  imports: [RouterLink],
  templateUrl: './confirmation.html',
  styleUrl: './confirmation.css',
})
export class Confirmation {
  /**
   * PROSIT 3 : Query parameters automatiquement liés via withComponentInputBinding()
   */
  nom = input<string>('Participant');
  email = input<string>('');
  conference = input<string>('Conférence');

  private readonly router = inject(Router);

  retourAccueil(): void {
    // Navigation programmée vers la liste des conférences
    this.router.navigate(['/conferences']);
  }
}
