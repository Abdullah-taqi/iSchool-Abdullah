import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './herodetails.service';

@Component({
  selector: 'app-heroadd',
  template: `
    <!-- <p>
      hero works!
    </p> -->
  <h2>Information about {{ selectedHero.name }}</h2>
  <img [src]="'assets/' + selectedHero.image.url" alt="selectedHero.name" width="200px" >
  <ul>
    <li class="bold">Power Status: </li>
    <ul>
        <li>Intelligence: {{ selectedHero.powerstats['intelligence'] }}</li>
        <li>Strength: {{ selectedHero.powerstats['strength'] }}</li>
        <li>Speed: {{ selectedHero.powerstats['speed'] }}</li>
        <li>Durability: {{ selectedHero.powerstats['durability'] }} </li>
        <li>Power: {{ selectedHero.powerstats['power'] }} </li>
        <li>Combat: {{ selectedHero.powerstats['combat'] }} </li>
    </ul>
    <li class="bold">Biography</li>
      <ul>
        <li>Full Name: {{ selectedHero.biography['full-name'] }}</li>
        <li>Birth Place: {{ selectedHero.biography['place-of-birth'] }}</li>
        <li>Publisher: {{ selectedHero.biography['publisher']  }}</li>
        <li>Release Date: {{ selectedHero.biography['release-date'] }}</li>
      </ul>
  </ul>
  <button><a [routerLink]="['/edithero']" [queryParams]="{heroid:selectedHero.id}">Edit {{selectedHero.name}}</a></button>
  `,
  styles: [ `
  ul{
    list-style-type:none;
  }
  .bold{
    font-weight:bold;
  }
  `]
})
export class HeroComponent implements OnInit {
  selectedHero:any;

  constructor(private hs:HeroService, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.selectedHero = this.hs.getSelectedHero(this.ar.snapshot.queryParams['hid']);
  }

}
