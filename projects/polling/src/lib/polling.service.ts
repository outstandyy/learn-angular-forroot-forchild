import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Observable, shareReplay, timer } from 'rxjs';

export interface PollingConfig {
  interval: number;
}

export const INTERVAL = new InjectionToken<number>('interval');

@Injectable()
export class PollingService {
  public polling$: Observable<number> = timer(0, this.interval || 1000).pipe(shareReplay());

  constructor(@Optional() @Inject(INTERVAL) private interval: number) {

  }
}
