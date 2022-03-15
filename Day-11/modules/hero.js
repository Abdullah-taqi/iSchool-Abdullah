import Pson from "./person.js";

class Hero extends Pson {
    firstname = "Default firstname";
    lastname = "Default lastname";
    _secret = "my secret mission";  //private property
    static version = 1001; // only classes can access it
    constructor(fname, lname, ncity) { //constructor is always kept between properties and methods
        super(ncity);   
        this.firstname = fname;
        this.lastname = lname;
    
    }
    fullname() {
        return this.firstname + " " + this.lastname;
    }
    get secret() {
        return this._secret;
    }
    set secret(nsecret) {
        this._secret = nsecret;
    }
};

export {Hero}