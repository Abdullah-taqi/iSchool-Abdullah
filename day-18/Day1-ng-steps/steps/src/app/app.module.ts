import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComp } from './header.component';
import { MainComp } from './main.component';
import { ProductComp } from './product.component';
import { FooterComp } from './footer.component';

/*
@NgModule({
  declarations: [ AppComponent, FirstComp ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ AppComponent, FirstComp  ]
})
export class AppModule { }
*/


/*
@NgModule({
  declarations: [ AppComponent, FirstComp ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
*/

@NgModule({
  declarations: [ AppComponent, HeaderComp, MainComp, ProductComp, FooterComp ],
  imports: [ BrowserModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }