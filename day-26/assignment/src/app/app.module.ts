import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ISchoolUserService } from './user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditUserComponent } from './edit.component';
import { RouterModule } from '@angular/router';
import { MasterComponent } from './master.component';
import { AddUserComponent } from './add.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    EditUserComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MasterComponent },
      { path: 'edit/:user', component: EditUserComponent },
      { path: 'add', component: AddUserComponent }
    ])
  ],
  providers: [ISchoolUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
