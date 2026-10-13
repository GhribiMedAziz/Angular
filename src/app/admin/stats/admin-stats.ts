import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-stats',
  imports: [],
  template: `
    <div class="stats-box">
      <h3>Statistiques & Fréquentation</h3>
      <p>Analyse des inscriptions par ville et par conférence :</p>
      <div class="stat-bars">
        <div class="bar-group">
          <span>Tunis (Angular Modern Ecosystem)</span>
          <div class="progress-bar"><div class="progress" style="width: 85%;">85 places</div></div>
        </div>
        <div class="bar-group">
          <span>Sfax (React & Next.js Architecture)</span>
          <div class="progress-bar"><div class="progress" style="width: 60%;">60 places</div></div>
        </div>
        <div class="bar-group">
          <span>Sousse (Vue 3 & Vite Best Practices)</span>
          <div class="progress-bar"><div class="progress" style="width: 45%;">45 places</div></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .stats-box { background: white; padding: 25px; border-radius: 12px; }
    h3 { margin-top: 0; color: #1e293b; }
    p { color: #64748b; margin-bottom: 25px; }
    .bar-group { margin-bottom: 20px; }
    .bar-group span { display: block; font-size: 14px; font-weight: 600; color: #334155; margin-bottom: 6px; }
    .progress-bar { background: #f1f5f9; border-radius: 8px; height: 26px; overflow: hidden; }
    .progress { background: #6366f1; height: 100%; color: white; display: flex; align-items: center; justify-content: flex-end; padding-right: 12px; font-size: 12px; font-weight: bold; border-radius: 8px; }
  `]
})
export class AdminStats {}
