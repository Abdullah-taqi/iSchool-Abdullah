import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector : '[ischool]'
})
export class ISchoolDirective{
    @Input() ischool:any;
    constructor(private elm:ElementRef){}
    ngOnInit(){
       if(this.ischool == "#000000"){
           console.log("found "+this.ischool)
            this.elm.nativeElement.style.backgroundColor= this.ischool;
            this.elm.nativeElement.style.color= 'white';
            this.elm.nativeElement.style.padding= '10px';
            this.elm.nativeElement.style.margin= '0px';
            this.elm.nativeElement.style.marginBottom= '5px';
        }else{
            this.elm.nativeElement.style.backgroundColor= this.ischool;
            this.elm.nativeElement.style.padding= '10px';
            this.elm.nativeElement.style.margin= '0px';
            this.elm.nativeElement.style.marginBottom= '5px';
       }
    }
}