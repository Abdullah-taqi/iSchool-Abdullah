import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  template : `
  <div class="container">
  <h1>Angular Data Handling</h1>
    <!-- <app-header [compdata]="appdata"></app-header> -->
    <app-header></app-header>
    <hr>
    <!-- <app-grid [compdata]="appdata"></app-grid> -->
    <app-grid></app-grid>
    <hr>
    <!-- 
    <ischool> <p>Some Content</p> </ischool>
    <ischool> <p>Some Content</p> </ischool>
    <ischool> <p>Some Content</p> </ischool> 
    -->
   <!--  
    <p class="ischool">Some Content</p>
    <p class="ischool">Some Content</p>
    <p class="ischool">Some Content</p>
   -->

    <p ischool='{"txtcol" : "red", "bgcol":"orange", "tagtype":"h1"}'>Some Content</p>
    
    
  </div>
  `
})
export class AppComponent {
  title = 'steps';
  appdata:any;
/*   hds:HeroDataService = new HeroDataService();
  constructor(){
    this.appdata = this.hds.getHeroData();
  } */

// This is not the right approach because we will have to create a new instance whenever we want. 
// Here AppComponent is creating an instance of HeroDataService() and then providing it to appdata
}
