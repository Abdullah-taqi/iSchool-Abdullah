import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { childComp } from './child.component';
import { contentChildComp } from './contentchild.component';
import { viewChildrenComp } from './viewChildren.component';

@NgModule({
  declarations: [AppComponent, childComp, viewChildrenComp, contentChildComp],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
