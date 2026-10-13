import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-admin-users',
  imports: [],
  template: `
    <div class="users-box">
      <h3>Gestion des Utilisateurs</h3>
      <table class="user-table">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Statut</th>
          </tr>
        </thead>
        <tbody>
          @for (u of users(); track u.id) {
            <tr>
              <td><strong>{{ u.name }}</strong></td>
              <td>{{ u.email }}</td>
              <td>{{ u.role }}</td>
              <td><span class="badge">{{ u.status }}</span></td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: [`
    .users-box { background: white; padding: 25px; border-radius: 12px; }
    h3 { margin-top: 0; color: #1e293b; margin-bottom: 20px; }
    .user-table { width: 100%; border-collapse: collapse; }
    th, td { padding: 12px 16px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { background: #f8fafc; color: #475569; font-size: 14px; }
    td { font-size: 14px; color: #334155; }
    .badge { background: #dcfce7; color: #15803d; padding: 4px 10px; border-radius: 12px; font-weight: bold; font-size: 12px; }
  `]
})
export class AdminUsers {
  users = signal([
    { id: 1, name: 'Sarra Ben Ali', email: 'sarra@esprit.tn', role: 'Participant', status: 'Actif' },
    { id: 2, name: 'Karim Trabelsi', email: 'karim@esprit.tn', role: 'Intervenant', status: 'Actif' },
    { id: 3, name: 'Nadia Mansour', email: 'nadia@esprit.tn', role: 'Organisateur', status: 'Actif' }
  ]);
}
