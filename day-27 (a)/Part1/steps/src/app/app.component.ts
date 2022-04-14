import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li>Title is: {{ title }}</li>
      <li>User Name is: {{ username }}</li>
      <li>User Age is: {{ userage }}</li>
    </ul>
  `
})
export class AppComponent {
  title = 'steps';
  username = 'Batman';
  userage = 18;

  increaseAge() {
    return this.userage += 1;
  }
}
