import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonAvatar, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, IonAvatar, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule]
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

  // funcion para obtener los personajes
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

}
