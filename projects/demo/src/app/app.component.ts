import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>ForRoot / ForChild</h1>
    <main>
      <router-outlet></router-outlet>
      <button routerLink="/lazy">Load Lazy</button>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
}
