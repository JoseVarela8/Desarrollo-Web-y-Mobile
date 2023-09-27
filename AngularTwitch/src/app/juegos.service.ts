import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http: HttpClient,) { }


 
  private apiUrl = 'https://api.rawg.io/api/games'; // URL base de la API
  private apiKey = '?key=f20f34929c5746d4b333de24d5c66f36';  // URL to web api} ACA PONER EL URL DE LA API DE JUEGOS

  obtenerDatosDesdeAPI(url: string): Observable<any> {
    return this.http.get(url+this.apiKey, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

      })
    });
  }

}
