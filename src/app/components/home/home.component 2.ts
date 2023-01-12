import { Component } from '@angular/core';
import data from '../../../data.json';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  library = data;
  trendingItems = data.filter((item) => item.isTrending);

  searchLibrary(event: InputEvent) {
    console.log('event', event);
  }
}
