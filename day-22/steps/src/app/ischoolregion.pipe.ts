import { Pipe } from "@angular/core";

@Pipe({
    name : 'region'
})
export class ISchoolRegion{
    transform(...args:any){
        if(args[1] === 'central'){
            return args[0]+" is from "+args[1]+" part of INDIA";
        }else{
            return args[0]+" is from "+args[1]+"ern part of INDIA";
        }
    }
}