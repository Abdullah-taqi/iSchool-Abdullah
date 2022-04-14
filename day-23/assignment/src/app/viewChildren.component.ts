import { Component, Input } from '@angular/core';

@Component({
  selector: 'viewChildren',
  template: ` <h3 (click)="print()">{{ text }}</h3> `,
})
export class viewChildrenComp {
  @Input() text: string = 'iSchool';
  print() {
    console.log('print');
  }
}
