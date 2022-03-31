import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <div class="box" [class.blueBox]="showColor" [class.roundBorder]="showBorder" >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestias accusantium aliquid necessitatibus repellendus quam ipsa dolorem deleniti, veniam exercitationem labore, earum sed quasi, aperiam cumque consequuntur. In, ullam dolorum!
    </div> -->

    <div class="box" [ngClass]="{blueBox : showColor, roundBorder : showBorder}">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestias accusantium aliquid necessitatibus repellendus quam ipsa dolorem deleniti, veniam exercitationem labore, earum sed quasi, aperiam cumque consequuntur. In, ullam dolorum!
    </div>
    <hr>
    <!-- <div style="border : 10px solid red;" [style.background-color]="bgcol">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestias accusantium aliquid necessitatibus repellendus quam ipsa dolorem deleniti, veniam exercitationem labore, earum sed quasi, aperiam cumque consequuntur. In, ullam dolorum!
    </div> -->
    <div [ngStyle]="{'background-color' : showColor ? 'pink' : 'blue', 'padding ': '10px', 'border' : '10px solid green' }">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam molestias accusantium aliquid necessitatibus repellendus quam ipsa dolorem deleniti, veniam exercitationem labore, earum sed quasi, aperiam cumque consequuntur. In, ullam dolorum!
    </div>
    <hr>
    Show Terms and Conditions
    <input type="checkbox" (input)="showTerms = !showTerms">
    <fieldset *ngIf="showTerms"> <!-- *ngIf is a structural directive that will either show or hide the DOM -->
      <legend>
      Terms & Conditions
      </legend>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime voluptas, quaerat ad eaque velit sequi temporibus iure repudiandae voluptate vel nisi qui, incidunt minus non! Laboriosam, aliquam consectetur? Iure voluptatem consectetur, laborum necessitatibus totam assumenda quam eos praesentium, ab, adipisci ut numquam quod vel ad officiis porro corrupti explicabo! Iusto.
      </p>
    </fieldset>
    <hr>
    <!-- <ol>
      <li>{{ avengers[0] }}</li>
      <li>{{ avengers[1] }}</li>
      <li>{{ avengers[2] }}</li>
      <li>{{ avengers[3] }}</li>
    </ol> -->
    <ol>
      <li *ngFor="let hero of avengers">{{ hero }}</li> <!-- takes for of loops -->
    </ol>
    <!-- ngNonBindable -->
    <h3 ngNonBindable> Hello {{ Harshita }}</h3>

    <input type="range" #pow (change)="power = pow.value" min="5" max="10" > <!-- #pow is a template reference -->
    <h2>Power is : {{ power }}</h2>
    <!-- ngSwitch -->
    <ul [ngSwitch]="power">
      <li *ngSwitchCase="6">You are Weak : {{ power }}</li>
      <li *ngSwitchCase="7">Booster Required : {{ power }}</li>
      <li *ngSwitchCase="8">You are Strong : {{ power }}</li>
      <li *ngSwitchCase="9">You are the Strongest : {{ power }}</li>
      <li *ngSwitchCase="10">You are Invincible : {{ power }}</li>
      <li *ngSwitchCase="">Default Power : {{ power }}</li>
    </ul>

    <hr>
    <!-- <p *ngIf="showTerms">{{ title }}</p> -->
    <ng-template [ngIf]="showTerms">{{ title }}</ng-template>
    <ng-template [ngIf]="showTerms">
      <app-second></app-second>
    </ng-template>
    
  `,
  styles : [`
  .box{
    width : 400px;
    height : 150px;
    padding : 10px;
    outline : 1px solid black;
    text-align : center;
  }
  .blueBox{
    background-color : lightblue;
  }
  .roundBorder{
    border : 10px solid grey;
    border-radius : 20px;
  }
  `]
})
export class AppComponent {
  title = 'Welcome to your life';
  showColor = true;
  // showColor = false;
  showBorder = true;
  bgcol = 'crimson';
  // showTerms = true;
  showTerms = false;
  // power:any;
  power = '5';
  avengers = ['Ironman', 'Batman', 'Wonder Woman', 'Antman', 'Spiderman']
  
}
