import { Component } from '@angular/core';

const sections = [
  {
    title: 'title1',
    description: 'description1'
  },
  {
    title: 'title2',
    description: 'description2'
  },
  {
    title: 'title3',
    description: 'description3'
  },
  {
    title: 'title4',
    description: 'description4'
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cl-accordion';

  sections = sections;
}
