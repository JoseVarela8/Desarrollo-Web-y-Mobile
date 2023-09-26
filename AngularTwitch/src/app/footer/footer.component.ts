import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  activePage: number = 1; // Página activa inicial

  changePage(pageNumber: number) {
    this.activePage = pageNumber;
  }
  
  nextPage() {
    if (this.activePage < 3) {
      this.activePage++;
    }
  }
  prevPage() {
    if (this.activePage > 1) {
      this.activePage--;
    }
  }

}
