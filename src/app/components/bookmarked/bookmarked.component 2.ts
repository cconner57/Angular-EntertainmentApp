import { Component } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-bookmarked',
  templateUrl: './bookmarked.component.html',
  styleUrls: ['./bookmarked.component.scss'],
})
export class BookmarkedComponent {
  movieLibrary = data.filter(
    (item) => item.isBookmarked && item.category === 'Movie'
  );
  tvLibrary = data.filter(
    (item) => item.isBookmarked && item.category === 'TV Series'
  );
}
