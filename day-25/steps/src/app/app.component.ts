import { Component } from '@angular/core';
import { User } from './user.model';
import { ISchoolUserService } from './user.service';
 
//JSONP, XMLP, whitelist, crossdomain.xml

@Component({
  selector: 'app-root',
  template : `
    <div class="container">
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
        <button (click)="addNewUser()" type="submit" class="btn btn-primary">Add User</button>
      </form>
      </div>
    <div *ngIf="showEditBox">
        <h2>Update User</h2>
        <form name="updateUserForm" #updateUserForm="ngForm">
        <div class="mb-3">
          <label for="edit_username" class="form-label">Update User Name</label>
          <input name="uname" #edit_uname="ngModel" [(ngModel)]="userToUpdate.username" class="form-control" id="edit_username">
        </div>
        <div class="mb-3">
          <label for="edit_usermail" class="form-label">Update User Mail</label>
          <input name="umail" #edit_umail="ngModel" [(ngModel)]="userToUpdate.useremail" class="form-control" id="edit_usermail">
        </div>
        <div class="mb-3">
          <label for="edit_usercity" class="form-label">Update User City</label>
          <input name="ucity" #edit_ucity="ngModel" [(ngModel)]="userToUpdate.usercity" class="form-control" id="edit_usercity">
        </div>
        <button (click)="updateUserInfo(userToUpdate._id)" type="submit" class="btn btn-primary">Update User</button>
      </form>
      </div>
      <ul>
        <li>User Name : {{ newuserdata.username }}</li>
        <li>User Mail : {{ newuserdata.useremail }}</li>
        <li>User City : {{ newuserdata.usercity }}</li>
      </ul>
      <hr>
      <div> 
        <h2>Users List</h2>
        <table class="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
              <th> Sl # </th>
              <th> User Name </th>
              <th> User Mail </th>
              <th> User City </th>
              <th> Edit User Info </th>
              <th> Delete User </th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let user of userdata; index as idx; first as fst; last as lst; odd as od; even as ev">
            <td>{{ idx + 1 }}</td>
            <td>{{ user.username }} <!-- 
              <span *ngIf="fst">First User</span> 
              <span *ngIf="lst">Last User</span> 
              <span *ngIf="od">Odd User</span> 
              <span *ngIf="ev">Even User</span>  -->
            </td>
            <td>{{ user.useremail }}</td>
            <td>{{ user.usercity }}</td>
            <td>
              <button (click)="editUser(user)" class="btn btn-warning">Edit</button>
            </td>
            <td>
              <button (click)="deleteUser(user)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  `
})
export class AppComponent {
  title = 'steps';
  showEditBox = false;
  userdata:Array<User> = [
    { 
      username : 'Batman',
      useremail : 'bruce@wayne.com',
      usercity : 'Gotham' 
    }
  ];
  newuserdata:User = { 
    username : '',
    useremail : '',
    usercity : '' 
  };
  userToUpdate = { 
    username : '',
    useremail : '',
    usercity : '',
    _id : '',
  };
  constructor( private us:ISchoolUserService ){}
  reload(){
    this.us.getUser().subscribe((res:any) => this.userdata = res.users);
  }
  ngOnInit(){
    this.reload();
  }
  addNewUser(){
    this.us.postUser(this.newuserdata).subscribe(res => {
      this.reload();
      console.log(res);
      this.newuserdata = { 
        username : '',
        useremail : '',
        usercity : '' 
      };
    })
  }
  editUser(user:any){
    this.us.getUserToEdit(user._id).subscribe((res:any) => {
        this.userToUpdate = res;
        this.showEditBox = true;
    })
  }
  updateUserInfo(userid:any){
    this.us.postUserToEdit(userid,this.userToUpdate).subscribe(res=>{
      console.log(res);
      this.reload();
      this.userToUpdate = { 
        username : '',
        useremail : '',
        usercity : '',
        _id : '',
      };
      this.showEditBox = false;
    })
  }
  deleteUser(user:any){
    this.us.deleteUser(user._id).subscribe((res:any) => {
      console.log(res);
      this.reload();
    })
  }
}