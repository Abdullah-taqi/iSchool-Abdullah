import { NgModule } from "@angular/core";
import { ISchoolComp } from "./ischool.component";
import { ISchoolRegion } from "./ischoolregion.pipe";
import { ISchoolDirective } from "./ischool_col.directive";

@NgModule({
    declarations : [ ISchoolComp, ISchoolRegion, ISchoolDirective ],
    exports : [ ISchoolComp, ISchoolRegion, ISchoolDirective ]
})
export class ISchoolModule{

}