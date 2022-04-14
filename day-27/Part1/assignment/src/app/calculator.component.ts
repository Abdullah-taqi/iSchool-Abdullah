import { Component } from "@angular/core";

@Component({
    selector: 'app-calculator',
    template: `
        <h2>Calculator</h2>
    `
})
export class CalculatorComponent {
    add(x: number, y: number) {
        return x + y;
    }

    subtraction(x: number, y: number) {
        return x - y;
    }
    multiply(x: number, y: number) {
        return x * y;
    }
    div(x: number, y: number) {
        return x / y;
    }
}