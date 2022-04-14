import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master.component';
import { DetailComponent } from './detail.component';
import { HeroesService } from './heroes.service';
import { RouterModule } from '@angular/router';
import { HeroEditComp } from './hero-edit.component';
import { FormsModule } from '@angular/forms';
import { HeroFilterPipe } from './hero.filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    DetailComponent,
    HeroFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot([
      { path:"", component : MasterComponent},
      { path:"hero", component : DetailComponent, children : [
        { path : 'edit/:power/:hname', component : HeroEditComp }
      ]},
    ])
  ],
  providers: [ HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
