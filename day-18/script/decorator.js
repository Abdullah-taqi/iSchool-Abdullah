"use strict";
// alert("Good Morning Everyone")
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//  ------  Decorator  ------
let AddPower = function (config) {
    // configuration object config:any which means anything can be passed
    return function (targetClass) {
        return class {
            constructor() {
                this.title = new targetClass().title;
                this.power = config.power;
                this.city = config.city;
            }
        };
    };
};
let CommanMan = class CommanMan {
    constructor() {
        this.title = "Bruce Wayne";
    }
};
CommanMan = __decorate([
    AddPower({
        power: 9,
        city: "Roorkee"
    })
], CommanMan);
let batman = new CommanMan();
console.log(batman);
