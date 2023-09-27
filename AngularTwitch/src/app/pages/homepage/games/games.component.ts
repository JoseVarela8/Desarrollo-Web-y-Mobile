import { Component, OnInit } from '@angular/core'; 
import { JuegosService } from 'src/app/juegos.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
}) 

export class GamesComponent implements OnInit {
  datos: any;
  datosFiltrados: any;
    selectedGame: any; // Debes declarar la propiedad aquí


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





  modalOpen = false; // Bandera para controlar la ventana modal
  openModal(game: any) {
    this.selectedGame = game;
    this.modalOpen = true;
  }
  closeModal() {
    this.modalOpen = false;
  }
  
  
}

