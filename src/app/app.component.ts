import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'typing';
  randomText = faker.lorem.sentence();

  onInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
  }
}
