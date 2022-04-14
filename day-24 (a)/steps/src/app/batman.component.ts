import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-batman',
  template: `
    <h1> Batman Says Hi! </h1>
    <h2>Quantity : {{ quantity || "0" }}</h2>
    <h2>Version : {{ version || "0" }}</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laborum nam quis laboriosam rem accusantium, esse distinctio natus excepturi maxime quibusdam cumque facere voluptatibus maiores laudantium necessitatibus commodi voluptas? Maxime.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laborum nam quis laboriosam rem accusantium, esse distinctio natus excepturi maxime quibusdam cumque facere voluptatibus maiores laudantium necessitatibus commodi voluptas? Maxime.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laborum nam quis laboriosam rem accusantium, esse distinctio natus excepturi maxime quibusdam cumque facere voluptatibus maiores laudantium necessitatibus commodi voluptas? Maxime.
    </p>
  `,
  styles: [
  ]
})
export class BatmanComponent implements OnInit {
  quantity:any;
  version:any;
  constructor(private ar:ActivatedRoute){}

  ngOnInit(): void {
    this.quantity = this.ar.snapshot.params['qty']; // ar is activated route, snapshot takes the snapshot of the parameter when the content is loaded
    this.version = this.ar.snapshot.params['ver'];
  }

}
