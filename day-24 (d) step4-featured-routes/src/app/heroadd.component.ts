import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './herodetails.service';

@Component({
  selector: 'app-heroadd',
  template: `
    <br>
    <br>
    <h1>Add Hero</h1>
    <hr>
    <div class="container">
      <div class="mb-3">
      <label for="name" class="form-label">Hero Name</label><br>
      <input type="text" name="hname" id="name" [(ngModel)]="addHero.name" class="form-control">
      </div>
      <label class="form-label">Hero Power Status</label>
      <div class="mb-3">
      <label for="intelligence" class="form-label">Intelligence Level</label><br>
      <input type="range" min=0 max=100 id="intelligence" [(ngModel)]="addHero.powerstats.intelligence" class="form-range" ></div>
      <div class="mb-3">
      <label for="strength" class="form-label">Strength</label><br>
      <input type="range" min=0 max=100 id="strength" [(ngModel)]="addHero.powerstats.strength" class="form-range" >
      </div>
      <div class="mb-3">
      <label for="speed" class="form-label">Speed</label><br>
      <input type="range" min=0 max=100 id="speed" [(ngModel)]="addHero.powerstats.speed" class="form-range" >
      </div>
      <div class="mb-3">
      <label for="durability" class="form-label">Durability</label><br>
      <input type="range" min=0 max=100 id="durability" [(ngModel)]="addHero.powerstats.durability" class="form-range" >
      </div>
      <div class="mb-3">
      <label for="power" class="form-label">Power</label><br>
      <input type="range" min=0 max=100 id="power" [(ngModel)]="addHero.powerstats.power" class="form-range" >
      </div>
      <div class="mb-3">
      <label for="combat" class="form-label">Combat</label><br>
      <input type="range" min=0 max=100 id="combat" [(ngModel)]="addHero.powerstats.combat" class="form-range" >
      </div>
      <label class="form-label">Hero Biography</label>
      <div class="mb-3">
      <label for="fullname" class="form-label">Character Name</label><br>
      <input type="text" id="fullname" [(ngModel)]="addHero.biography['full-name']" class="form-control" ></div>
      <div class="mb-3">
      <label for="pob" class="form-label">Character Place of Birth</label><br>
      <input type="text" id="pob" [(ngModel)]="addHero.biography['place-of-birth']" class="form-control" >
      </div>
      <div class="mb-3">
      <label for="publisher" class="form-label">Publisher</label><br>
      <input type="text" id="publisher" [(ngModel)]="addHero.biography['publisher']" class="form-control" >
      </div>
      <div class="mb-3">
      <label for="release" class="form-label">Release Date</label><br>
      <input type="date" id="release" [(ngModel)]="addHero.biography['release-date']" class="form-control" >
      </div>
      <button><a [routerLink]="['/heroes']">Add Hero</a></button>
    </div>
  `,
  styles: []
})
export class HeroaddComponent implements OnInit {
  addHero: any;
  constructor(private hs: HeroService, private ar: ActivatedRoute) { }

  ngOnInit() {
    this.addHero = this.hs.getSelectedHero(this.ar.snapshot.queryParams['heroid']);
  }

}
