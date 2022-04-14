import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template : `
    <nav class="navbar navbar-expand-lg">
      <li class="nav-item"><a [routerLink]="['']">Home</a></li>
      <li class="nav-item"><a [routerLink]="['add']">Add User</a></li>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'assignment';
  
}