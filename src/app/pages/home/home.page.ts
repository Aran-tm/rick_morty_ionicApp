import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent, IonSearchbar, IonSpinner } from '@ionic/angular/standalone';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonSearchbar, IonInfiniteScrollContent, IonInfiniteScroll, IonAvatar, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule, RouterModule]
})
export class HomePage implements OnInit {

  // arreglo de caracteres
  characters: any[] = [];
  params = {} as any;

  constructor(

    // hago una importacion del servicio de obtener la API
    private rickandmortySvc: RickAndMortyService
  ) { }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  // Obtener los personajes
  getCharacters(event?: any) {

    this.params.page += 1;

    this.rickandmortySvc.getCharacter(this.params).subscribe({

      next: (res: any) => {

        this.characters.push(...res.results)
        console.log(`Characters: `, this.characters);

        // pregunta si existe algun evento
        // de existir, pues entonces lo completo
        if (event) event.target.complete();
      },
      error: (error: any) => {
        if (event) event.target.complete();
      }
    });
  }

  // Buscar Personaje por Nombre
  searchCharacters() {

    this.params.page = 1;

    this.rickandmortySvc.getCharacter(this.params).subscribe({

      next: (res: any) => {

        this.characters = res.results;
      },
      error: (error: any) => {

      }
    });
  }

}
