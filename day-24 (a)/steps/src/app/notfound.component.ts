import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  template: `
    <p>
      ERROR 404 : Requested page notfound !
    </p>
  `,
  styles: [
  ]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
