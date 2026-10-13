import { Routes } from '@angular/router';

/**
 * PROSIT 4 : Organisation modulaire des routes de fonctionnalités.
 * Ce fichier regroupe les routes du module Conférences, chargées à la demande via loadChildren.
 */
export const CONFERENCES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../conferance-list/conferance-list').then(m => m.ConferanceList)
  },
  {
    path: ':id',
    loadComponent: () => import('../conferance-details/conferance-details').then(m => m.ConferanceDetails)
  },
  {
    path: ':id/register',
    loadComponent: () => import('../inscription/inscription').then(m => m.Inscription)
  }
];
