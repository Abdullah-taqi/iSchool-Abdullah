import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { GridComp } from './grid.component';
import { HeaderComp } from './header.component';
import { HeroDataService } from './hero.services';
import { GenPipe } from './gen.pipe';
import { ISchoolDirective } from './ischool.directive';

@NgModule({
  declarations: [ AppComponent, GridComp, HeaderComp, GenPipe, ISchoolDirective ],
  imports: [ BrowserModule, HttpClientModule ],
  providers: [ HeroDataService ], // Provider provides the data. Here we've created this provider in the module so all the components under the module can access the data. 
                                  // Similarly each component has ability to create providers and this provider will take services and that services will then be only accessible to the particular component. 
                                  // Since this HeroDataService is added in this module, all the components will get it. 
                                  // Optionally, if we want to acces it from a particular component then we can delete this provider from here and add hte provider to that particular component, so that no other component gets the data.But since GridComp and HeaderComp are the children of AppComponent, the AppComponent can provide the data.
  bootstrap: [AppComponent]
})
export class AppModule { }


