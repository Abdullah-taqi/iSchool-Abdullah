import { Pipe } from "@angular/core";

@Pipe({
    name: 'ischool'
})
export class ISchoolPipe {
    transform(...args:any) {
        return args[1] + ' ' + args[0];
    }
}