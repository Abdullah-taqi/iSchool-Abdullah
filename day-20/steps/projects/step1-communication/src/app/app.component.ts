import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
      <h1>
        {{title}}
      </h1>
      <hr>
      <!-- <app-second>{{ message }}</app-second> -->
      <!-- <app-second>
        <ul>
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
          <li>List Item 4</li>
          <li>List Item 5</li>
        </ul>
        <p>
        First Paragraph : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe fugiat obcaecati porro sunt laborum laudantium doloremque non quam, architecto velit dolorum quisquam nobis similique iste vero nemo blanditiis necessitatibus.
        </p>
        <p>
        Second Paragraph : Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe fugiat obcaecati porro sunt laborum laudantium doloremque non quam, architecto velit dolorum quisquam nobis similique iste vero nemo blanditiis necessitatibus.
        </p>
        <button>Click Me</button>
      </app-second> -->

      <app-second (compEvent)="compEventHandler($event)" [cp]="power"></app-second>
      <button (click)="power = power+1">Increase Power</button>
  `,
  styles: []
})
export class AppComponent {
  title = 'step1-communication';
  message = "Hello iSchool Connect India";
  power = 5;

  compEventHandler(msg:string){
    // alert("comp event happend");
    // alert(msg);
    this.title = msg;
  }
}
