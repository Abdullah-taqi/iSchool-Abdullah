import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
   <div class="container">
     <h1>Forms in Angular</h1>   
     <hr> 
     <app-template-form></app-template-form>
   </div>

  `,
  styles: []
})
export class AppComponent {
  title = 'step1-forms';
}
