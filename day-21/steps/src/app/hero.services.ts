import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroDataService{
    appversion = 0;
    constructor( private http:HttpClient ){
        this.appversion = Math.round( Math.random() * 10000 );
    }
    getHeroData(){
        // return this.herodata;
        return this.http.get("http://localhost:5050"); //We will make a get request only when someone is making request to load the data
    }
    getAppVersion(){
        return this.appversion;
    }
}

// services is nothing but a class file
// Because it is a service class so it doesn't need any decorator as of now