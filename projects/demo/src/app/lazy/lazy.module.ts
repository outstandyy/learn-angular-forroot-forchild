import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyComponent } from './lazy.component';
import { PollingModule } from '../../../../polling/src/lib/polling.module';
import { LazyRoutingModule } from './lazy-routing.module';


@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule,
    PollingModule.forChild({
      interval: 3000,
    }),
  ]
})
export class LazyModule { }
