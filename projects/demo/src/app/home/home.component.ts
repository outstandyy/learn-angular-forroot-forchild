import { Component } from '@angular/core';
import { PollingService } from '../../../../polling/src/lib/polling.service';

@Component({
  selector: 'app-home',
  template: `
    <p>Polling count times: {{ pollingService.polling$ | async }}</p>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public pollingService: PollingService) {
  }
}
