import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todoApp';
  items = [
    { description: 'Camping', action: 'No' },
    { description: 'Hiking', action: 'No' },
    { description: 'Kayaking', action: 'No' },
  ];
}
