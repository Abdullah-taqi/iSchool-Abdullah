// import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
// import { Component, Input, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    <div class="box">
      <h2>Second Component</h2>
      <!-- <ng-content></ng-content> -->
      <!-- <ng-content select="ul"></ng-content> -->
      <!-- <ng-content select="p.box"></ng-content> -->
      <!-- <ng-content select="button"></ng-content> 
      <ng-content select="p"></ng-content>
      <ng-content select="ul"></ng-content> -->
      <!-- only root components can be filtered out and not the nested elements -->
      <!-- child selections won't work, only direct selection works -->

      <!-- to pass short value/one value use attributes. to pass long values/messages use inline templates -->
      <h2>Power is {{ compPower }}</h2>
      <input #ti>
      <button (click)="emitCompEvent(ti.value)">Send Message</button>
  
    </div>
  `,
  styles: [`
    .box{
    border : 2px solid getQueryPredicate;
    padding : 10px;
    }
  `]
})
export class SecondComponent  {

  // constructor() { }

  // ngOnInit(): void {
  // }

  @Input('cp') compPower : number = 0;
  @Output() compEvent:EventEmitter<any> = new EventEmitter();

  emitCompEvent(msg:string){
    this.compEvent.emit(msg);
  }

}
