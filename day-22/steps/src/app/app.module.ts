import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ISchoolModule } from './ischool.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [ BrowserModule, ISchoolModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
