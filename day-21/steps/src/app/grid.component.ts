import { Component, Input } from "@angular/core";
import { HeroDataService } from "./hero.services";

@Component({
    selector : 'app-grid',
    template : `
    <h2>App Version : {{ compVersion }}</h2>
    <table class="table table-striped table-bordered">
    <thead>
      <tr> 
          <th>Sl #</th> 
          <th>Title</th> 
          <th>Full Name</th> 
          <th>Poster</th> 
          <th>City</th> 
          <th>Ticket Price</th> 
          <th>Release Date</th> 
          <th>Movies List</th> 
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let hero of compdata"> 
        <td>{{ hero.sl }}</td> 
        <td>{{ hero.title | uppercase }}</td> 
        <td>{{ hero.firstname+" "+hero.lastname | gen : hero.gender }}</td> 
        <td>
          <img class="img-thumbnail" [src]="hero.poster" [alt]="hero.title" width="50">
        </td> 
        <td>{{ hero.city }}</td> 
        <td>{{ hero.ticketprice | currency : 'INR' : 'symbol' : '3.2-4' }}</td> 
        <td>{{ hero.releasedate | date : 'dd / MMMM / yyyy' }}</td> 
        <td>
          <div *ngIf="hero.movieslist.length > 0" class="card">
            <ul class="list-group list-group-flush">
              <li *ngFor="let movie of hero.movieslist" class="list-group-item">
              <img [src]="movie.poster" width="30"/> 
              {{ movie.title }}
              </li>
            </ul>
          </div>
        </td> 
      </tr>
    </tbody>
  </table>
    `
})
export class GridComp{
   // @Input() compdata:any;
    compdata:any;
    compVersion:any;

    // ---------- Without using dependency injection ---------
    /* hds:HeroDataService = new HeroDataService();
    constructor(){
        this.compdata = this.hds.getHeroData();
        this.compVersion = this.hds.getAppVersion();
    } */
    // controlled way of creating an instance

    
    // ---------- Using dependency injection ---------
    constructor(private hds:HeroDataService){
       // this.compdata = this.hds.getHeroData();
        this.compVersion = this.hds.getAppVersion();  
        this.hds.getHeroData().subscribe(res => this.compdata = res)  
    }
    // Here we are putting the control on framework to create an instance
}