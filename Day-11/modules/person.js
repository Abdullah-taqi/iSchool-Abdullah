// export class Person {
//     city = "My City";
//     constructor(ncity) {
//         this.city = ncity;
//     }
// }

class Person{
    city = "My City";
    constructor(ncity){
        this.city = ncity.toUpperCase();
    }
}
class Human{
    version = 1001;
}

// export { Person as Pson }
// export { Person }

export default Person;