import { Component } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  library = data.filter((item) => item.category === 'Movie');
}
