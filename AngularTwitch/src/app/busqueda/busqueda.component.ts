import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class SearchComponent {
  searchResults: any[] = [];
  textToSearch: string = "";
  @Output() search = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

  setTextToSearch(event: any) {
    this.textToSearch = event.target.value;
    
  }

  searchGames() {
    this.search.emit(this.textToSearch);
  }
}
