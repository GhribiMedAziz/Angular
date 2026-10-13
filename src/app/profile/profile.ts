import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  user = signal({
    nom: 'Aziz Ghrib',
    email: 'aziz.ghrib@esprit.tn',
    role: 'Étudiant & Développeur Full-Stack',
    conferancesInscrites: [
      { id: 1, name: 'Angular Modern Ecosystem', date: '2026-11-15' },
      { id: 2, name: 'React & Next.js Architecture', date: '2026-12-05' }
    ]
  });
}
