// alert("Good Morning Everyone")

//  ------  Decorator  ------
let AddPower = function(config:any){  //This function will return a function, which will take a class, and returns an updated class.
    // configuration object config:any which means anything can be passed
    return function(targetClass:any){
        return class{
            title = new targetClass().title;
            power = config.power;
            city = config.city;
        }
    }
}

@AddPower({
    power : 9,
    city : "Roorkee"
}) 
class CommanMan{
    title = "Bruce Wayne"
}

let batman = new CommanMan();

console.log(batman);