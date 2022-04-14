import { Component, OnInit } from '@angular/core';
import { HeroService } from './herodetails.service';

@Component({
  selector: 'app-herolist',
  template: `
  <div class="container">
    <br>
    <h1>Hero List</h1>
    <hr>
    <table class="table">
      <thead>
      <tr>
        <th>Sl #</th>
        <th>Title</th>
        <th>Full name</th>
        <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let hero of herolist">
          <td>{{ hero.id }}</td>
          <td>{{ hero.name}}</td>
          <td>{{ hero.biography['full-name']}}</td>
          <td>
          <a [routerLink] ="['/hero']" [queryParams]="{hid:hero.id}">Click for details</a>
          </td>
          <td>{{hero.city}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class HerolistComponent implements OnInit {
  herolist:any;
  constructor(private hs:HeroService) { }

  ngOnInit():void {
    this.herolist = this.hs.getHeroes();
  }

}