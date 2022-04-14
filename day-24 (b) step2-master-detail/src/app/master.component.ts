import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  template: `
     <table>
       <thead>
         <tr>
           <th>Sl #</th>
           <th>Title</th>
           <th>Full Name</th>
           <th>More Detail</th>
         </tr>
       </thead>
       <tbody>
         <tr *ngFor="let hero of heroeslist">
           <td>{{ hero?.id }}</td>
           <td>{{ hero?.name }}</td>
           <td>{{ hero?.biography['full-name'] }}</td>
           <td>
             <a [routerLink]="['hero',hero.id]">Click For Detail</a>
           </td>
         </tr>
       </tbody>
     </table>
  `,
  styles: [
  ]
})
export class MasterComponent implements OnInit {
  heroeslist:any;
  constructor( private hs:HeroesService ) { }

  ngOnInit(): void {
    this.heroeslist = this.hs.getHeroes();
  }

}
