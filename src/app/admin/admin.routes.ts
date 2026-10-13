import { Routes } from '@angular/router';
import { Admin } from './admin';

/**
 * PROSIT 4 : Configuration des Child Routes pour le module Administration.
 * Utilisé avec loadChildren pour lazy-loader tout le sous-arbre de l'administration.
 */
export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: Admin,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/admin-dashboard').then(m => m.AdminDashboard)
      },
      {
        path: 'users',
        loadComponent: () => import('./users/admin-users').then(m => m.AdminUsers)
      },
      {
        path: 'stats',
        loadComponent: () => import('./stats/admin-stats').then(m => m.AdminStats)
      }
    ]
  }
];
