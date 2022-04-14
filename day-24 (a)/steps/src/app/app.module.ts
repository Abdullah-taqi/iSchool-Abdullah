import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatmanComponent } from './batman.component';
import { SupermanComponent } from './superman.component';
import { AquamanComponent } from './aquaman.component';
import { FlashComponent } from './flash.component';
import { WonderwomenComponent } from './wonderwomen.component';
import { CyborgComponent } from './cyborg.component';
import { NotfoundComponent } from './notfound.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    AppComponent,
    BatmanComponent,
    SupermanComponent,
    AquamanComponent,
    FlashComponent,
    WonderwomenComponent,
    CyborgComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path:"", component: HomeComponent },
      { path:"batman", component: BatmanComponent },
      { path:"batman/:qty/:ver", component: BatmanComponent },
      { path:"aquaman", component: AquamanComponent },
      { path:"superman", component: SupermanComponent },
      { path:"flash", component: FlashComponent },
      { path:"wonderwomen", component: WonderwomenComponent },
      { path:"cyborg", component: CyborgComponent },
      { path:"ironman", redirectTo:"flash", pathMatch:"full"},
      // { path: "ironmanman", redirectTo: "flash", pathMatch:"prefix" },
      { path:"**", component: NotfoundComponent }  // Here ** is the default route. Keep this always in the end, never in-between as it is used to catch the error if any component is not found.
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//{ useHash : true }
