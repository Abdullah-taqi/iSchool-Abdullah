// alert("Welcome to your life !!!!");
let message:string = "";


/* --------- Generics ---------
let heroes:Array<string> = ['Superman', 'Batman', Jocker];
let heroes:string[] = ['Hulk', 'Captain Marvel'];
*/


// ----------- Class -----------

// class Hero{
//     title:string = "default";
//    //   public title:string = "default";
//     constructor(ntitle:string){
//         this.title = ntitle;

//     };
//     sayTitle(){
//         console.log("this.title");
//     }
// };


// ----------- Interface-----------

interface IHero{
    title:string;
    fname:string;
    lname:string;
    city:string;
    sayTitle():void;
    sayFullName():void;
    sayCity():string;
}


class Hero implements IHero{
    city: string = "default city";
    constructor(public title:string, public fname:string, public lname:string){
        // empty
    };
    sayTitle(){
        console.log(this.title);
    }
    sayFullName(){
        console.log(this.fname+" "+this.lname);
    }
    sayCity(){
        return "City is "+this.city;
    }
};

let hero = new Hero("Batman", "Bruce", "Wayne");

hero.sayTitle();
hero.sayFullName();




// ---------- Functional advantages in typescript ----------
function saymessage(part1:string, part2:string, part3?:string){ // ? is an elvis operator. Here part3 is made optional.
    // return part1+" "+part2+" "+part3;
    return part1+" "+part2;
};
function logmessage(part1:string, part2:string, part3?:string):void{ // ? is an elvis operator. Here part3 is made optional.
    console.log(part1+" "+part2);
};

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector(".log")?.innerHTML = saymessage("Hello", "World", "again");
})


