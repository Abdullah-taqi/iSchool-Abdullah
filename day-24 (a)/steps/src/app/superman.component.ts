import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-superman',
  template: `
    <h1> Superman Says Hi! </h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laborum nam quis laboriosam rem accusantium, esse distinctio natus excepturi maxime quibusdam cumque facere voluptatibus maiores laudantium necessitatibus commodi voluptas? Maxime.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laborum nam quis laboriosam rem accusantium, esse distinctio natus excepturi maxime quibusdam cumque facere voluptatibus maiores laudantium necessitatibus commodi voluptas? Maxime.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat laborum nam quis laboriosam rem accusantium, esse distinctio natus excepturi maxime quibusdam cumque facere voluptatibus maiores laudantium necessitatibus commodi voluptas? Maxime.
    </p>
  `,
  styles: [
  ]
})
export class SupermanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
