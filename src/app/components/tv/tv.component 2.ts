import { Component } from '@angular/core';
import data from '../../../data.json';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent {
  library = data.filter((item) => item.category === 'TV Series');
}
