import { Injectable, signal } from '@angular/core';
import { Conference } from '../models/conference.model';

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {
  private readonly conferencesList = signal<Conference[]>([
    {
      id: 1,
      name: 'Angular Modern Ecosystem',
      date: '2026-11-15',
      place: 'Tunis',
      description: 'Découvrez les nouveautés d\'Angular 21 : Signals, hydration, contrôle de flux natif et nouveaux routeurs.',
      price: 120,
      imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87'
    },
    {
      id: 2,
      name: 'React & Next.js Architecture',
      date: '2026-12-05',
      place: 'Sfax',
      description: 'Plongez au cœur des Server Components et du rendu hybride moderne pour applications web scalables.',
      price: 150,
      imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865'
    },
    {
      id: 3,
      name: 'Vue 3 & Vite Best Practices',
      date: '2027-01-20',
      place: 'Sousse',
      description: 'Maîtrisez la Composition API, Pinia et l\'écosystème réactif ultra-rapide de Vue 3.',
      price: 100,
      imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678'
    }
  ]);

  readonly conferences = this.conferencesList.asReadonly();

  getConferenceById(id: number | string): Conference | undefined {
    const numId = Number(id);
    return this.conferencesList().find(c => c.id === numId);
  }
}
