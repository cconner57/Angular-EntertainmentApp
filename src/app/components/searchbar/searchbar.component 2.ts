import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  public searchValue!: string;

  @Output() searchLibraryData = new EventEmitter();

  searchInput() {
    console.log('e', event);
  }
}
