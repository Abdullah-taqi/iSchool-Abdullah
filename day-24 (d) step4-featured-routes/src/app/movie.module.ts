import { NgModule } from "@angular/core";
import { MovieaddComponent } from "./movieadd.component";
import { MovieeditComponent } from "./movieedit.component";
import { MovielistComponent } from "./movielist.component";
import { RouterModule } from "@angular/router";
import { MovieComponent } from "./movie.component";
import { MovieService } from "./moviedetails.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[MovieComponent, MovieaddComponent, MovieeditComponent, MovielistComponent],
    imports:[RouterModule.forChild([
        { path : "movie" , component:MovieComponent },
        { path : "movies" , component:MovielistComponent },
        { path : "addmovie" , component:MovieaddComponent },
        { path : "editmovie" , component:MovieeditComponent },
    ]),FormsModule,CommonModule],
    providers:[MovieService],
    exports:[MovieComponent, MovieaddComponent, MovieeditComponent, MovielistComponent]
})
export class MovieModule{

}