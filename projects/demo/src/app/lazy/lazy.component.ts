import { Component } from '@angular/core';
import { PollingService } from '../../../../polling/src/lib/polling.service';

@Component({
  selector: 'app-lazy',
  template: `
    <p>Polling count times (lazy): {{ pollingService.polling$ | async }}</p>
  `,
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent {
  constructor(public pollingService: PollingService) {
  }
}
