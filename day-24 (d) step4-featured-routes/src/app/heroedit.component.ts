import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from './herodetails.service';

@Component({
  selector: 'app-heroedit',
  template: `
  <br>
  <br>
  <h1>Edit Hero</h1>
  <hr>
  <div class="container">
  <div class="mb-3">
    <label for="name" class="form-label">Enter Hero Name</label><br>
    <input type="text" name="hname" id="name" [(ngModel)]="editHero.name" class="form-control">
    </div>
    <label class="form-label">Edit Hero Power Status</label>
    <div class="mb-3">
    <label for="intelligence" class="form-label">Edit Intelligence Level</label><br>
    <input type="range" min=0 max=100 id="intelligence" [(ngModel)]="editHero.powerstats.intelligence" class="form-range" ></div>
   <div class="mb-3">
    <label for="strength" class="form-label">Edit Strength</label><br>
    <input type="range" min=0 max=100 id="strength" [(ngModel)]="editHero.powerstats.strength" class="form-range" >
    </div>
    <div class="mb-3">
    <label for="speed" class="form-label">Edit Speed</label><br>
    <input type="range" min=0 max=100 id="speed" [(ngModel)]="editHero.powerstats.speed" class="form-range" >
    </div>
    <div class="mb-3">
    <label for="durability" class="form-label">Edit Durability</label><br>
    <input type="range" min=0 max=100 id="durability" [(ngModel)]="editHero.powerstats.durability" class="form-range" >
    </div>
    <div class="mb-3">
    <label for="power" class="form-label">Edit Power</label><br>
    <input type="range" min=0 max=100 id="power" [(ngModel)]="editHero.powerstats.power" class="form-range" >
    </div>
    <div class="mb-3">
    <label for="combat" class="form-label">Edit Combat</label><br>
    <input type="range" min=0 max=100 id="combat" [(ngModel)]="editHero.powerstats.combat" class="form-range" >
    </div>
    <label class="form-label">Edit Hero Biography</label>
    <div class="mb-3">
    <label for="fullname" class="form-label">Edit Character Name</label><br>
    <input type="text" id="fullname" [(ngModel)]="editHero.biography['full-name']" class="form-control" ></div>
   <div class="mb-3">
    <label for="pob" class="form-label">Edit Character Place of Birth</label><br>
    <input type="text" id="pob" [(ngModel)]="editHero.biography['place-of-birth']" class="form-control" >
    </div>
    <div class="mb-3">
    <label for="publisher" class="form-label">Edit Publisher</label><br>
    <input type="text" id="publisher" [(ngModel)]="editHero.biography['publisher']" class="form-control" >
    </div>
    <div class="mb-3">
    <label for="release" class="form-label">Edit Release Date</label><br>
    <input type="date" id="release" [(ngModel)]="editHero.biography['release-date']" class="form-control" >
    </div>
    <button><a [routerLink]="['/heroes']">Done</a></button>
    </div>
  `,
  styles: []
})
export class HeroeditComponent implements OnInit {
  editHero:any;
  constructor(private hs:HeroService, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.editHero = this.hs.getSelectedHero(this.ar.snapshot.queryParams['heroid']);
  }

}