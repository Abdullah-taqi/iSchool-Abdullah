import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  template: `
    <a [routerLink]="['']" queryParamsHandling="preserve">Back to Master Page</a>
    <h2>{{ selectedHero.name }} : Power {{ selectedHero.powerstats.power }}</h2>
    <img [src]="'assets/'+selectedHero.image.url" [alt]="selectedHero.name"  width="150" >
    <p>
      {{ selectedHero | json }}
    </p>
    <a [routerLink]="['edit',selectedHero.powerstats.power,selectedHero.name]">Edit {{ selectedHero.name }}</a>
     <br>
     <input min="0" max="100" type="range" [(ngModel)]="selectedHero.powerstats.power">
    <a [routerLink]="['edit',selectedHero.powerstats.power,selectedHero.name]">Set Power of {{ selectedHero.name }}</a>
    <hr>
    <h3>User Name is : {{ username }}</h3>
    <h3>User City is : {{ usercity }}</h3>
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class DetailComponent implements OnInit {
  selectedHero:any;
  username = 'guest';
  usercity = 'default city';
  constructor(private hs:HeroesService, private ar:ActivatedRoute ) { }

  ngOnInit(): void {
    this.selectedHero = this.hs.getSelectedHero(this.ar.snapshot.queryParams['hid']);
    this.username = this.ar.snapshot.params['username'];
    this.usercity = this.ar.snapshot.params['city'];
  }

}
