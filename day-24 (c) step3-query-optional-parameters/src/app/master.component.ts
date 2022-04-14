import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './heroes.service';

@Component({
  template: `
   <input [(ngModel)]="filterby" type="search">
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
         <tr *ngFor="let hero of heroeslist | heroFilter : filterby">
           <td>{{ hero?.id }}</td>
           <td>{{ hero?.name }}</td>
           <td>{{ hero?.biography['full-name'] }}</td>
           <td>
             <a 
             [routerLink]="['hero',{username:'Abdullah', city : 'Roorkee'}]" 
             [queryParams]="{ hid: hero.id, filterOn : filterby }">Click For Detail</a>
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
  filterby:any = '';
  constructor( private hs:HeroesService, private ar:ActivatedRoute ) { }

  ngOnInit(): void {
    this.heroeslist = this.hs.getHeroes();
    this.filterby = this.ar.snapshot.queryParams['filterOn'];
  }

}
