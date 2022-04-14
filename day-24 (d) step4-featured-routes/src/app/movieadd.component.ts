import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './moviedetails.service';

@Component({
  selector: 'app-movieedit',
  template: `
    <br>
    <br>
    <h1>Add Movie</h1>
    <hr>
    <div class="container">
    <div class="mb-3">
    <label for="mtitle" class="form-label">Movie Name</label><br>
    <input type="text" id="mtitle" [(ngModel)]="addMovie.title" class="form-control" ></div>
   <div class="mb-3">
    <label for="year" class="form-label">Release Year</label><br>
    <input type="text" id="year" [(ngModel)]="addMovie.year" class="form-control" >
    </div>
    <div class="mb-3">
    <label for="director" class="form-label">Director</label><br>
    <input type="text" id="director" [(ngModel)]="addMovie.director" class="form-control" >
    </div>
    <div class="mb-3">
    <label for="Genres" class="form-label">Genres</label><br>
    <input type="text" id="Genres" [(ngModel)]="addMovie.genres" class="form-control" >
    </div>
    <div class="mb-3">
    <label for="actors" class="form-label">Movie Actors</label><br>
    <input type="text" id="actors" [(ngModel)]="addMovie.actors" class="form-control" >
    </div>
    <button><a [routerLink]="['/movies']">Add Movie</a></button>
    </div>
  `,
  styles: []
})
export class MovieaddComponent implements OnInit {

  addMovie:any;
  constructor(private hr:MovieService, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.addMovie= this.hr.getSelectedMovie(this.ar.snapshot.queryParams['mid']);
  }

}
