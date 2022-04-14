import { Component, Input } from "@angular/core";
import { HeroDataService } from "./hero.services";

@Component({
    selector : 'app-header',
    template : `
    <h2>App Version : {{ compVersion }}</h2>
    <ul class="nav justify-content-center">
        <li class="nav-item" *ngFor="let hero of compdata">
          <a class="nav-link" href="#">{{ hero.title }}</a>
        </li>
    </ul>
    `
})
export class HeaderComp{
    // @Input() compdata:any;
    compdata:any;
    compVersion:any;
    
    // ---------- Without using dependency injection ---------
   /*  hds:HeroDataService = new HeroDataService();
    constructor(){
        this.compdata = this.hds.getHeroData();
        this.compVersion = this.hds.getAppVersion();
    } */
    

    // ---------- Using dependency injection ---------
    // Angular's dependency injections ensures that there is only one instance of the data running throughout the application.
    constructor( private hds:HeroDataService ){
        // this.compdata = this.hds.getHeroData();
        this.hds.getHeroData().subscribe((res)=>{
            this.compdata = res;
            // console.log(res);
        })
        this.compVersion = this.hds.getAppVersion();
    }
}