import { Component, OnInit } from '@angular/core';
import { JuegosService } from './juegos.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class MiComponente implements OnInit {
  datos: any;
  datosFiltrados: any;

  constructor(private servicio: JuegosService) { }

  ngOnInit(): void {
    const apiUrl = 'https://api.rawg.io/api/games'; // Reemplaza con la URL de tu API
    this.servicio.obtenerDatosDesdeAPI(apiUrl).subscribe((data) => {
      this.datos = data.results;
      this.datosFiltrados = data.results;
    });
  }

  handleSearch(text: string) {
    if (text === "") {
      this.datosFiltrados = this.datos
    }
    else {
      this.datosFiltrados = this.datos.filter((game: { name: string | string[]; }) => game.name.includes(text))
    }
  }

  selectedGame: any; // Esta es la propiedad que guarda el juego seleccionado
  showModal = false;
  // ...

  openModal(game: any) {
    this.selectedGame = game;
    this.showModal = true;
  }
  
}
