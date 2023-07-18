import { Injectable } from '@angular/core';
import { Observable, shareReplay, timer } from 'rxjs';

@Injectable()
export class PollingService {
  public polling$: Observable<number> = timer(0, 1000).pipe(shareReplay());
}
