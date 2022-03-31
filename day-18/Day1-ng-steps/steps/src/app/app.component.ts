import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-main></app-main>
  <app-footer></app-footer>
  `
})
export class AppComponent {
  title = 'steps';
}
