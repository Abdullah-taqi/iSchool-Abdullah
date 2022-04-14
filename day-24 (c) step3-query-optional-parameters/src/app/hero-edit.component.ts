import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    template : `
    <h2>Hero to Update : {{ heroToEdit }}</h2>
    <h2>Update power to: {{ herosNewPower }}</h2>
    `
})
export class HeroEditComp{
    heroToEdit:any;
    herosNewPower:any;
    constructor( private ar:ActivatedRoute ){}
    ngOnInit(){
       this.heroToEdit = this.ar.snapshot.params['hname'];
       this.ar.params.subscribe( rparam => {
           // this.heroToEdit = rparam['hname']   
           this.herosNewPower = rparam['power']
        });
       // this.heroToEdit = this.ar.snapshot.params['hname'];
       // this.herosNewPower = this.ar.snapshot.params['power'];
    }
}