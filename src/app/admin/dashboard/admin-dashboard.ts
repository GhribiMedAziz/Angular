import { Component, inject } from '@angular/core';
import { ConferenceService } from '../../services/conference.service';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  template: `
    <div class="dashboard-box">
      <h3>Tableau de bord Administrateur</h3>
      <p>Bienvenue dans l'espace de gestion de la plateforme de conférences.</p>
      <div class="stats-grid">
        <div class="stat-card">
          <h4>{{ conferences().length }}</h4>
          <p>Conférences actives</p>
        </div>
        <div class="stat-card">
          <h4>142</h4>
          <p>Inscriptions totales</p>
        </div>
        <div class="stat-card">
          <h4>18,500 TND</h4>
          <p>Revenus générés</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-box { background: white; padding: 25px; border-radius: 12px; }
    h3 { margin-top: 0; color: #1e293b; }
    p { color: #64748b; }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 25px; }
    .stat-card { background: #f8fafc; border: 1px solid #e2e8f0; padding: 20px; border-radius: 10px; text-align: center; }
    .stat-card h4 { font-size: 26px; color: #6366f1; margin: 0 0 8px; }
    .stat-card p { margin: 0; font-size: 14px; color: #475569; font-weight: 500; }
  `]
})
export class AdminDashboard {
  private readonly confService = inject(ConferenceService);
  readonly conferences = this.confService.conferences;
}
