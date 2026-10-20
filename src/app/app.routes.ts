import { Routes } from '@angular/router';

export const routes: Routes = [
  // PROSIT 2 : Redirection initiale vers la page d'accueil
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  // PROSIT 4 : Fonctionnalité simple (page unique) lazy-loadée avec loadComponent
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home)
  },

  // PROSIT 4 : Fonctionnalité complète (multi-pages) lazy-loadée avec loadChildren
  {
    path: 'conferences',
    loadChildren: () => import('./conferences/conferences.routes').then(m => m.CONFERENCES_ROUTES)
  },

  // Rétrocompatibilité avec les anciennes routes Prosit 1 & 2
  {
    path: 'list',
    redirectTo: 'conferences',
    pathMatch: 'full'
  },
  {
    path: 'details/:id',
    redirectTo: 'conferences/:id',
    pathMatch: 'full'
  },

  // PROSIT 2 & 3 : Inscription directe et confirmation
  {
    path: 'inscription',
    loadComponent: () => import('./inscription/inscription').then(m => m.Inscription)
  },
  {
    path: 'confirmation',
    loadComponent: () => import('./confirmation/confirmation').then(m => m.Confirmation)
  },

  // PROSIT 2 & 4 : Fonctionnalités simples (Contact & Profil) chargées via loadComponent
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then(m => m.Contact)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile').then(m => m.Profile)
  },

  // PROSIT 4 : Module d'administration avec Child Routes et loadChildren
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
  },

  {
    path: 'login',
    loadComponent: () => import('./user-form/user-form').then(m => m.UserForm)
  },

  // PROSIT 2 : Route wildcard pour gérer les URL inexistantes (Erreur 404)
  {
    path: '**',
    loadComponent: () => import('./not-found/not-found').then(m => m.NotFound)
  }
];
