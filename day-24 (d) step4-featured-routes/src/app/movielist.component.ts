import { Component, OnInit } from '@angular/core';
import { MovieService } from './moviedetails.service';


@Component({
  selector: 'app-movielist',
  template: `
  <div class="container">
  <br>
  <h1>Movie List</h1>
  <hr>
  <table class="table">
    <thead>
    <tr>
      <th>Sl #</th>
      <th>Title</th>
      <th>Year</th>
      <th>Details</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let movie of movielist">
        <td>{{ movie.id }}</td>
        <td>{{ movie.title}}</td>
        <td>{{ movie.year}}</td>
        <td>
        <a [routerLink] ="['/movie']" [queryParams]="{mid:movie.id}">Click for details</a>
        </td>
      </tr>
    </tbody>
  </table>
  `,
  styles: []
})
export class MovielistComponent implements OnInit {
  movielist:any
  constructor(private hs:MovieService) {}

  ngOnInit() {
    this.movielist = this.hs.getMovies();
  }

}