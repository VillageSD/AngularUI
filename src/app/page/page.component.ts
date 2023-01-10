import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent {
  title = 'The ngpage Welcomes You!';
  today = new Date();
  name: string = '';
}
