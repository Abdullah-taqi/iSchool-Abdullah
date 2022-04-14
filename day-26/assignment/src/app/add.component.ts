import { Component } from "@angular/core";
import { User } from "./user.model";
import { ISchoolUserService } from "./user.service";

@Component({
  template: `
    <div>
        <h2>Add New User</h2>
        <form name="userForm" #userForm="ngForm">
            <div class="mb-3">
                <label for="username" class="form-label">User Name</label>
                <input name="uname" #uname="ngModel" [(ngModel)]="newuserdata.username" class="form-control" id="username">
            </div>
            <div class="mb-3">
                <label for="usermail" class="form-label">User Mail</label>
                <input name="umail" #umail="ngModel" [(ngModel)]="newuserdata.useremail" class="form-control" id="usermail">
            </div>
            <div class="mb-3">
                <label for="usercity" class="form-label">User City</label>
                <input name="ucity" #ucity="ngModel" [(ngModel)]="newuserdata.usercity" class="form-control" id="usercity">
            </div>
            <button (click)="addNewUser()" type="submit" class="btn btn-primary" [routerLink]="['']">Add User</button>
        </form>
    </div>
    `
})
export class AddUserComponent {
  newuserdata: User = {
    username: '',
    useremail: '',
    usercity: ''
  };

  constructor(private us: ISchoolUserService) {}

  addNewUser() {
    this.us.postUser(this.newuserdata).subscribe(res => {
      console.log(res);
      this.newuserdata = {
        username: '',
        useremail: '',
        usercity: ''
      };
    })
  }
}
