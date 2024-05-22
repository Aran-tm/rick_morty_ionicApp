import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  constructor(
    private http: HttpClient
  ) { }

  // obtiene un character
  getCharacter(params: any) {

    // obtengo los datos publicos de la API de rick and morty
    return this.http.get(environment.baseURL + environment.character, {params});
  }

  // obtiene un character por id
  getCharacterById(id: string) {

    // obtengo los datos publicos de la API de rick and morty
    return this.http.get(environment.baseURL + environment.character + id);
  }
}
