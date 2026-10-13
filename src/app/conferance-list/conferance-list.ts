import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConferenceService } from '../services/conference.service';

@Component({
  selector: 'app-conferance-list',
  imports: [RouterLink],
  templateUrl: './conferance-list.html',
  styleUrl: './conferance-list.css',
})
export class ConferanceList {
  private readonly confService = inject(ConferenceService);
  readonly conferances = this.confService.conferences;
}
