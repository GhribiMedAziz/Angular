import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = signal('');
  email = signal('');
  message = signal('');
  envoye = signal(false);

  envoyer(): void {
    if (this.name() && this.email() && this.message()) {
      this.envoye.set(true);
    } else {
      alert('Veuillez remplir tous les champs de contact.');
    }
  }
}
