import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
// name
// age
// mail
@Component({
    selector : "app-template-form",
    template : `
        <h2>Template Driven Form</h2>
        <form #myForm="ngForm"  (submit)="formSubmitHandler(myForm, $event)" action="#" name="myform" method="get">
            <div class="mb-3"> 
                <label for="username"  class="form-label">User Name</label>
                <input #uname="ngModel" name="uname" id="username" [(ngModel)]="user.name" class="form-control" required type="text">
                <span *ngIf="uname.invalid && uname.touched" class="form-text">Please enter your name</span>
            </div>
            <div class="mb-3"> 
                <label for="userage"  class="form-label">User Age</label>
                <input #uage="ngModel" name="uage" id="userage" min="18" max="90" [(ngModel)]="user.age" class="form-control" required type="number">
                <span *ngIf="uage.invalid && uage.touched" class="form-text">Please enter your age, age must be between 18 - 90 years </span>
            </div>
            <div class="mb-3"> 
                <label for="usermail"  class="form-label">User eMail</label>
                <input #umail="ngModel" pattern=".+@.+" name="umail" id="usermail" [(ngModel)]="user.mail" class="form-control" required type="text">
                <span *ngIf="umail.invalid && umail.touched" class="form-text">Please enter a valid email id</span>
            </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
        <ul>
            <li>User Name : {{ user.name }}</li>
            <li>User Age : {{ user.age }}</li>
            <li>User eMail : {{ user.mail }}</li>
        </ul>
        <ul>
            <li *ngIf="uname.touched">User Name is Touched</li>
            <li *ngIf="uname.untouched">User Name is Untouched</li>
            <li *ngIf="uname.pristine">User Name is Pristine</li>
            <li *ngIf="uname.dirty">User Name is Dirty</li>
            <li *ngIf="uname.valid">User Name is Valid</li>
            <li *ngIf="uname.invalid">User Name is Invalid</li>
        </ul>
        <ul>
            <li *ngIf="uage.touched">User Age is Touched</li>
            <li *ngIf="uage.untouched">User Age is Untouched</li>
            <li *ngIf="uage.pristine">User Age is Pristine</li>
            <li *ngIf="uage.dirty">User Age is Dirty</li>
            <li *ngIf="uage.valid">User Age is Valid</li>
            <li *ngIf="uage.invalid">User Age is Invalid</li>
        </ul>
        <ul>
            <li *ngIf="umail.touched">User eMail is Touched</li>
            <li *ngIf="umail.untouched">User eMail is Untouched</li>
            <li *ngIf="umail.pristine">User eMail is Pristine</li>
            <li *ngIf="umail.dirty">User eMail is Dirty</li>
            <li *ngIf="umail.valid">User eMail is Valid</li>
            <li *ngIf="umail.invalid">User eMail is Invalid</li>
        </ul>
        <ul>
            <li *ngIf="myForm.touched">User Form is Touched</li>
            <li *ngIf="myForm.untouched">User Form is Untouched</li>
            <li *ngIf="myForm.pristine">User Form is Pristine</li>
            <li *ngIf="myForm.dirty">User Form is Dirty</li>
            <li *ngIf="myForm.valid">User Form is Valid</li>
            <li *ngIf="myForm.invalid">User Form is Invalid</li>
        </ul>
        
    `,
    styles : [`
        input.ng-valid.ng-touched{
            border : 2px solid greenyellow
        }
        input.ng-invalid.ng-touched{
            border : 2px solid crimson
        }
    `]
})
export class TemplateForm{
    user = {
        name : '',
        mail : '',
        age : ''
    }

    formSubmitHandler(userform:NgForm, evt:any){
       evt.preventDefault();
       console.log(userform);
       let info = userform.form.value;
       if(info.uname && info.uage && info.umail){
            if(info.uage < 18){
                alert("you are too young to join us")
             }else if(info.uage > 90){
                alert("you are too old to join us")
            }else{
                 evt.target.submit();
            }
       }else{
           alert("you must complete the form")
       }
    }
}