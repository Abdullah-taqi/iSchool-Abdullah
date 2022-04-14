import { NgModule } from "@angular/core";
import { HeroaddComponent } from "./heroadd.component";
import { HeroeditComponent } from "./heroedit.component";
import { HerolistComponent } from "./herolist.component";
import { RouterModule } from "@angular/router";
import { HeroComponent } from "./hero.component";
import { HeroService } from "./herodetails.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[HeroaddComponent, HeroeditComponent, HerolistComponent , HeroComponent ],
    imports:[RouterModule.forChild([
        { path : "hero" , component:HeroComponent },
        { path : "heroes" , component:HerolistComponent },
        { path : "addhero" , component:HeroaddComponent },
        { path : "edithero" , component:HeroeditComponent }
    ]), CommonModule,FormsModule],
    providers:[HeroService],

    exports:[HeroComponent, HeroaddComponent, HeroeditComponent, HerolistComponent]
})
export class HeroModule{

}