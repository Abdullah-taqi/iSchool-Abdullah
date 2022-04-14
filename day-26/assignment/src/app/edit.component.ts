import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ISchoolUserService } from "./user.service";

@Component({
    template: `
        <div>
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
        <button (click)="updateUserInfo(userToUpdate._id)" type="submit" class="btn btn-primary" [routerLink]="['']">Update User</button>
      </form>
      </div>
      
    `
})
export class EditUserComponent {
    userToUpdate = { 
        username : '',
        useremail : '',
        usercity : '',
        _id : '',
      };
    
      userid:any;

      constructor(private us: ISchoolUserService, private ar: ActivatedRoute) {}

      ngOnInit(){
        this.userid = this.ar.snapshot.params['user']
        this.us.getUserToEdit(this.userid).subscribe((res:any) => {
            this.userToUpdate = res;
        })
      }
      updateUserInfo(userid:any){
        this.us.postUserToEdit(userid,this.userToUpdate).subscribe(res=>{
          console.log(res);
          this.userToUpdate = { 
            username : '',
            useremail : '',
            usercity : '',
            _id : '',
          };
        })
      }
}