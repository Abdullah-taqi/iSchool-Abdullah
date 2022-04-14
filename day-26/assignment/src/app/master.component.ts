import { Component } from "@angular/core";
import { User } from "./user.model";
import { ISchoolUserService } from "./user.service";

@Component({
    template: `
        <div class="container">
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
                <button class="btn btn-warning"><a [routerLink]="['/edit', user._id]">Edit</a></button>
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
export class MasterComponent {
    userdata: any = [{
        username: 'Batman',
        useremail: 'bruce@wayne.com',
        usercity: 'Gotham'
    }];
      
    constructor( private us:ISchoolUserService ){}
    
    reload(){
        this.us.getUser().subscribe((res:any) => this.userdata = res.users);
    }
    
    ngOnInit(){
        this.reload();
    }
      
    deleteUser(user:any){
        this.us.deleteUser(user._id).subscribe((res:any) => {
          console.log(res);
          this.reload();
        })
    }
}