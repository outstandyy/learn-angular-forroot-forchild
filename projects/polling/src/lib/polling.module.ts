import { ModuleWithProviders, NgModule } from '@angular/core';
import { PollingComponent } from './polling.component';
import { PollingService } from './polling.service';



@NgModule({
  declarations: [
    PollingComponent
  ],
  imports: [
  ],
  exports: [
    PollingComponent,
  ],
  // Removed because of `forRoot()`
  // providers: [
  //   PollingService,
  // ]
})
export class PollingModule {
  static forRoot(): ModuleWithProviders<PollingModule> {

    return {
      ngModule: PollingModule,
      providers: [PollingService],
    };
  }
}
