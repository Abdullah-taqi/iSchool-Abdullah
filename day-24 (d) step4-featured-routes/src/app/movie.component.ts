import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from './moviedetails.service';

@Component({
  selector: 'app-heroadd',
  template: `
  <div class="container">
  <h2>Information about {{ sMovie.title }}</h2>
  <img [src]="sMovie.posterUrl" [alt]="sMovie.title" width="200px" >
  <h5>Movie Name: {{sMovie.title}}</h5>
  <h5>Release Year: {{sMovie.year}} </h5>
  <h5>Genres: {{sMovie.genres}}</h5>
  <h5>Movie Director: {{sMovie.director}}</h5>
  <h5>Movie Actors: {{sMovie.actors}}</h5>
  <h5>About Movie:</h5>{{sMovie.plot}}
  <br>
  <button><a [routerLink]="['/editmovie']" [queryParams]="{mid:sMovie.id}">Edit {{sMovie.title}}</a></button>
  </div>
  `,
  styles: []
})
export class MovieComponent implements OnInit {
  sMovie:any;
  constructor(private hr:MovieService, private ar:ActivatedRoute) { }

  ngOnInit() {
    this.sMovie = this.hr.getSelectedMovie(this.ar.snapshot.queryParams['mid']);
  }

}