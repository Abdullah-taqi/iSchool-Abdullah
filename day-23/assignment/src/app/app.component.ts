/* Assignment : 
ViewChild 
ViewChildren

contentChild
ContentChildren
 */


import { AfterContentInit,  AfterViewInit,  Component,  ContentChild,  ContentChildren,  OnInit,  QueryList,  ViewChild,  ViewChildren } from '@angular/core';
import { contentChildComp } from './contentchild.component';
import { viewChildrenComp } from './viewChildren.component';

class Assign {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor(setup: string, punchline: string) {
    this.setup = setup;
    this.punchline = punchline;
    this.hide = true;
  }

  toggle() {
    this.hide = !this.hide;
  }
}

@Component({
  selector: 'app-root',
  template: `
    <h1>Main Component: POWER : {{ appPower }}</h1>
    <button (click)="increaseChildPower()">Increase Power</button>
    <button (click)="decreaseChildPower()">Decrease Power</button>
    <button (click)="showHide()">Hide Child</button>
    <app-child #cComp *ngIf="show"></app-child>
    <hr />
    <h1>View Children</h1>
    <viewChildren></viewChildren>
    <viewChildren text="Connect"></viewChildren>
    <viewChildren text="Global"></viewChildren>
    <hr />
    <h1>Content Child</h1>
    <assign [assign]="assigns">
      <span class="setup">{{ assigns.setup }}?</span>
      <h1 class="punchline">{{ assigns.punchline }}</h1>
    </assign>
  `,
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
  title = 'assignment';
  appPower = 0;
  show = true;

  //viewChild
  @ViewChild('cComp') cc: any;

  //view Children
  @ViewChildren(viewChildrenComp) print!: QueryList<viewChildrenComp>;
  constructor() {
    console.log('appComponent contructor is called');
    console.log(this.print);
    this.appPower = 23;
  }
  ngOnInit(): void {
    console.log('appComponent ngOnInit is called');
  }
  increaseChildPower() {
    this.cc.increasePower();
  }
  decreaseChildPower() {
    this.cc.decreasePower();
  }
  showHide() {
    this.show = !this.show;
  }
  ngAfterViewInit(): void {
    this.print.forEach((printInstance) => console.log(printInstance));
  }

  assigns: Assign = new Assign(
    'Hello World',
    'How are you?'
  );

  //content Child
  @ContentChild(contentChildComp) assignContentChild!: contentChildComp;
  //content Children
  @ContentChildren(contentChildComp)
  assignContentChildren!: QueryList<contentChildComp>;
  ngAfterContentInit(): void {
    console.log(
      `ngAfterContentInit - assignContentChild is ${this.assignContentChild}`
    );
    this.assignContentChildren.forEach((assign) => console.log(assign));
  }
}

