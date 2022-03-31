import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <!--The content below is only a placeholder and can be replaced.-->
    <h1>Angular Pipes</h1>
    <hr>
    <!-- adding pipes : pipes are formatters -->
    <h2>{{ title.toUpperCase() }}</h2>
    <!-- <h2>{{ title | uppercase }}</h2>  -->
    <!-- Here | is a pipe that we used to do the same job-->
    <!-- this is a kind of literal pipe. We have an input and an output. This input title goes through this pipe (|) and what we see is an output. -->
    
    <!-- <h2>{{ title | uppercase | lowercase }}</h2>   -->
    <!--  creating pipe inside a pipe. now it gets converted to lowercase.  -->
    
    <!-- These pipes are chainable. We can pass from one pipe to another pipe and modify/format them.  -->
    <!-- These pipes are all functions.  -->

    <h2>{{ title | uppercase | lowercase | titlecase }}</h2>  <!-- now we pass it to another pipe called titlecase -->
    <ol>
      <li *ngFor="let hero of herodata">{{ hero.title }}</li>
    </ol>

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
      <tr *ngFor="let hero of herodata"> 
        <td>{{ hero.sl }}</td> 
        <td>{{ hero.title }}</td> 
        <td>{{ hero.firstname+" "+hero.lastname }}</td> 
        <!-- <td>{{ hero.poster }}</td>  -->
        <td>
          <img class="img-thumbnail" [src]="hero.poster" [alt]="hero.title" width="50">
        </td> 
        <td>{{ hero.city }}</td> 
        <td>{{ hero.ticketprice | currency : 'INR' : 'symbol' : '3.2-4' }}</td> <!-- Here '3.2-4' means  <number of value/>digits to display before decimal>.<minimum number of digits to display after decimal>-<maximum number of digits to display after decimal> -->
        <td>{{ hero.releasedate | date : 'dd / MMMM / yyyy' }}</td> 
        <td>{{ hero.movieslist.length }}</td> 
      </tr>
    </tbody>
  </table>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'step2-pipes';
//   herodata = {    // This herodata is an object that has a property called hl that has an array here.
//     "hl": 
// }

// We removed the object outside i.e. hl. Now herodata is an array here.

herodata = [{
              "sl": 1,
              "title": "Batman",
              "gender": "male",
              "firstname": "Bruce",
              "lastname": "Wayne",
              "city": "Gotham",
              "ticketprice": 123.4567,
              "releasedate": "1/26/2018",
              "poster": "assets/images/batman.jpg",
              "movieslist": [
                  {
                      "title": "Batman Begins",
                      "poster": "assets/images/bat1_tn.jpg"
                  }, {
                      "title": "Dark Knight",
                      "poster": "assets/images/bat2_tn.jpg"
                  }, {
                      "title": "Dark Knight Raises",
                      "poster": "assets/images/bat3_tn.jpg"
                  }
              ]
            
            },
            {
              "sl": 2,
              "title": "Superman",
              "gender": "male",
              "firstname": "Clark",
              "lastname": "Kent",
              "city": "Metropolis",
              "ticketprice": 178.6789,
              "releasedate": "1/27/2018",
              "poster": "assets/images/superman.jpg",
              "movieslist": [
                  {
                      "title": "Superman The Movie",
                      "poster": "assets/images/super1_tn.jpg"
                  }, {
                      "title": "Superman Returns",
                      "poster": "assets/images/super2_tn.jpg"
                  }, {
                      "title": "Superman Man of Steel",
                      "poster": "assets/images/super3_tn.jpg"
                  }
              ]
            
            },
            {
              "sl": 3,
              "title": "Ironman",
              "gender": "male",
              "firstname": "Tony",
              "lastname": "Stark",
              "city": "New York",
              "ticketprice": 122,
              "releasedate": "1/27/2018",
              "poster": "assets/images/ironman.jpg",
              "movieslist": [
                  {
                      "title": "Ironman",
                      "poster": "assets/images/iron1_tn.jpg"
                  }, {
                      "title": "Ironman 2",
                      "poster": "assets/images/iron2_tn.jpg"
                  }, {
                      "title": "Ironman 3",
                      "poster": "assets/images/iron3_tn.jpg"
                  }
              ]
            
            }, {
              "sl": 4,
              "title": "Phantom",
              "gender": "male",
              "firstname": "Kit",
              "lastname": "Walker",
              "city": "Bhangala",
              "ticketprice": 98.6456,
              "releasedate": "1/27/2018",
              "poster": "assets/images/phantom.jpg",
              "movieslist": [
                  {
                      "title": "The Phantom Slam Evilz",
                      "poster": "assets/images/phantom1_tn.jpg"
                  }
              ]
            
            }, {
              "sl": 5,
              "title": "Spiderman",
              "gender": "male",
              "firstname": "Peter",
              "lastname": "Parker",
              "city": "New York",
              "ticketprice": 1.3456,
              "releasedate": "9/26/2018",
              "poster": "assets/images/spiderman.jpg",
              "movieslist": [
                  {
                      "title": "Spiderman",
                      "poster": "assets/images/spider1_tn.jpg"
                  }, {
                      "title": "Spiderman 2",
                      "poster": "assets/images/spider2_tn.jpg"
                  }, {
                      "title": "Spiderman 3",
                      "poster": "assets/images/spider3_tn.jpg"
                  }
              ]
            },
            {
              "sl": 6,
              "title": "Wonder Women",
              "gender": "female",
              "firstname": "Princess",
              "lastname": "Diana",
              "city": "Amazon",
              "ticketprice": 341.3456978978,
              "releasedate": "11/26/2018",
              "poster": "assets/images/wonderwoman.jpg",
              "movieslist" : []
            }]
}
