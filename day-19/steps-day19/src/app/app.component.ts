import { Component } from '@angular/core';
import { timeStamp } from 'console';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Heroes Application</h2>
      <img src="assets/images/wonderwoman.jpg">
      <img #hero src="assets/images/rajani.jpg">
      <br>
      <!--  --------  Binding Interpolation  --------  -->
      <!-- <button disabled="{{agree}}">Click Me</button> -->
      <button [disabled]="agree">Click Me</button>
      <br>
      <button (click)="clickHandler()">Click Me</button>
      <button on-click="clickHandler($event)">Button 1</button>
      <button on-click="clickHandler($event)">Button 2</button>
      <button on-click="clickHandler($event)">Button 3</button>
      <button on-click="clickHandler($event)">Button 4</button>
      <br>
      <button on-click="setAgreeDisagree()">Agree/Disagree</button>
      <hr>
      <button (click)="hero.src='assets/images/antman.jpg'">Wonderwoman</button> <!-- Template Referencing -->
      <button (click)="hero.src='assets/images/batnan.jpg'">Rajni</button>
      <button (click)="hero.src='assets/images/rajni.jpg'">Deadpool</button>
      <button (click)="hero.src='assets/images/antman.jpg'">Antman</button>
      <hr>
      <h3>{{ title }}</h3>
      <!-- Two way data binding -->
      <input [value]="title" #textip (input)="changeTitle(textip.value)">
      <button (click)="changeTitle(textip.value)">Change Title</button>  
      <input [value]="title" #textip1 (input)="title = textip1.value">
      <br>
      <h3>Two Way Binding</h3>
      <input [(ngModel)]="title"> <!-- Both attribute binding and event binding in one go -->
      <!-- safe navigation operator / elvis operator "?" -->
      <!-- <h3>{{ user?.title }}</h3>  -->

      <!-- created a fallback -->
      <h3>Title is {{ user?.title || "yet to come." }}</h3>

      <!-- <input type="text" (keydown)="keypressHandler()"> -->
      <input type="text" (keydown.space)="keypressHandler()">


      <!--
      [] denotes attribute binding
      () denotes event binding
      -->

      <div [class]="selectedCalss">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis cumque rem dolore distinctio nulla quas voluptas enim. Ad odio temporibus sint tempora, nam veniam a inventore amet? Recusandae, enim.
      </div>
      <hr>
      <!-- <div [class.box]="agree"> -->
        <!-- Any class that we apply to the angular will append to the existing list of classes -->
      <div class="box" [class.brownBox]="agree"> <!-- accepts both the box class and the brownBox class -->
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis facilis cumque rem dolore distinctio nulla quas voluptas enim. Ad odio temporibus sint tempora, nam veniam a inventore amet? Recusandae, enim.
      </div>
    </div>
  `,
  styles : [`
    .box{
      width : 400px;
      /* height : 200px; */
      /* background-color : brown;
      color : beige; */
      padding : 10px;
      outline : 1px solid black;
    }
    .brownBox{
      background-color : brown;
      color : beige;
    }
    .borderBox{
      border : 5px dashed orange;
    }
  `]
})
export class AppComponent {
  title = 'steps-day19';
  agree = true;
  selectedCalss = 'box';
  // agree = false;
  user = {
    firstname : "Tony",
    title : ''
  };
  clickHandler(evt?:any){
    if(evt){
      alert("You clicked"+evt.target.innerHTML)
    }
    else{
      alert("You clicked a button")
    }
  }
  setAgreeDisagree(){
    this.agree = !this.agree;
  }
  changeTitle(ntitle:string){
    this.title = ntitle;
    this.user.title = "Ironman"
  }
  keypressHandler(){
    console.log("Key was pressed.");
  }
}
