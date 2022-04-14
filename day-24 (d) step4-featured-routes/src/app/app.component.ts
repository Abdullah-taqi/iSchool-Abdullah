import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>Movies and Heroes Application</h1>
  <hr>
  <button [routerLink]="['']">Home</button> | 
  <!-- <button [routerLink]="['hero']"> Hero</button> |  -->
  <button [routerLink]="['heroes']">Hero List</button> | 
  <button [routerLink]="['addhero']">Add Hero</button> | 
  <button [routerLink]="['edithero']">Edit Hero</button> | 
  <!-- <button [routerLink]="['movie']">Movie</button> |  -->
  <button [routerLink]="['movies']">Movie List</button> | 
  <button [routerLink]="['addmovie']">Add Movie</button> | 
  <button [routerLink]="['editmovie']">Edit Movie</button>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'step12-routing-featured';
}
