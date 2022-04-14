import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-ischool',
    template : `
         <h2 [ischool]="participant.favcol">{{ participant.title | region : participant.region }}</h2>
    `
})
export class ISchoolComp{
    @Input() participant = {
        title : '',
        region : '',
        favcol : ''
    };
}