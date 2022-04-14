import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-child',
  template : `
      <h1>Child Component</h1>
      <h2>Power : {{ power }}</h2>
  `
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  title = 'steps';
  power = 0;
 
  constructor(){
    console.log("ChildComponent's constructor was called");
  }
  increasePower(){
    this.power += 1
  }
  decreasePower(){
    this.power -= 1
  }
  ngOnInit(): void {
    console.log("ChildComponent's ngOnInit was called");
  }
  ngOnChanges(pow:any): void {
    if(pow.power.currentValue >= 10){
        this.power = 0
    };
    console.log("ChildComponent's ngOnChanges was called");
  }
  ngDoCheck(){
      console.log("ChildComponent's DoCheck was called");
  }
  ngAfterContentInit(){
      console.log("ChildComponent's AfterContentInit was called");
  }
  ngAfterContentChecked(){
      console.log("ChildComponent's AfterContentChecked was called");
  }
  ngAfterViewInit(){
      console.log("ChildComponent's AfterViewInit was called");
  }
  ngAfterViewChecked(){
      console.log("ChildComponent's AfterViewChecked was called");
  }
  ngOnDestroy(){
      console.log("ChildComponent's OnDestroy was called");
  }
}