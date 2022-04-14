import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "./user.model";

@Injectable()
export class ISchoolUserService {
    constructor(private http: HttpClient) {}
    
    // READ
    getUser() {
        return this.http.get('http://localhost:5000/data')
    }

    // CREATE
    postUser(user: User) {
        return this.http.post('http://localhost:5000/add', user);
    }

    // READ TO UPDATE
    getUserToEdit(userid:any) {
        return this.http.get('http://localhost:5000/edit/' + userid);
    }

    // UPDATE
    postUserToEdit(userid:any, user:User) {
        return this.http.post('http://localhost:5000/edit/' + userid, user);
    }

    // DELETE
    deleteUser(userid:any) {
        return this.http.delete('http://localhost:5000/delete/' + userid);
    }
}