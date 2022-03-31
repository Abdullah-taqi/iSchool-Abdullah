import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Binding 101</h1>
    <hr>
    <h2>{{ title.length }}</h2>       <!-- interpolation -->
    <h2 innerHTML="{{ title }}"></h2>        <!-- //attribute binding -->
    <h2 innerText="{{ title }}"></h2>        <!-- //attribute binding -->
    <h2 [innerText]="title"></h2>            <!-- //attribute binding -->
    <h2 bind-innerText="title"></h2> 
    <h3 [class]="ischool">Can I be a red box</h3>
    <input type="text" [value]="title">
  `,
  styles : [`
    .redbox{
      width : 400px;
      height : 100px;
      border : 2px solid red;
      padding : 10px;
    }
  `]
})
export class AppComponent {
  title = 'This is my step2 project in Angular';
  ischool = "redbox";
}
