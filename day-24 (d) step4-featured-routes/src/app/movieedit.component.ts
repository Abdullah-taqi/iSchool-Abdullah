import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './moviedetails.service';

@Component({
  selector: 'app-movieedit',
  template: `
    <br>
    <br>
    <h1>Edit Movie</h1>
    <hr>
    <div class="container">
    <div class="mb-3">
    <label for="mtitle" class="form-label">Edit Movie Name</label><br>
    <input type="text" id="mtitle" [(ngModel)]="editMovie.title" class="form-control" ></div>
   <div class="mb-3">
    <label for="year" class="form-label">Edit Release Year</label><br>
    <input type="text" id="year" [(ngModel)]="editMovie.year" class="form-control" >
    </div>
    <div class="mb-3">
    <label for="director" class="form-label">Edit Director</label><br>
    <input type="text" id="director" [(ngModel)]="editMovie.director" class="form-control" >
    </div>
    <div class="mb-3">
    <label for="Genres" class="form-label">Edit Genres</label><br>
    <input type="text" id="Genres" [(ngModel)]="editMovie.genres" class="form-control" >
    </div>
    <div class="mb-3">
    <label for="actors" class="form-label">Edit Movie Actors</label><br>
    <input type="text" id="actors" [(ngModel)]="editMovie.actors" class="form-control" >
    </div>
    <button><a [routerLink]="['/movies']">Done</a></button>
    </div>
  `,
  styles: []
})
export class MovieeditComponent implements OnInit {

  editMovie:any;
  constructor(private hr:MovieService, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.editMovie= this.hr.getSelectedMovie(this.ar.snapshot.queryParams['mid']);
  }

}
