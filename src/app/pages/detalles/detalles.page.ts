import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonAvatar, IonLabel, IonItem, IonIcon, IonGrid, IonCol, IonRow, IonCardContent, IonCard, IonSpinner } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonCard, IonCardContent, IonRow, IonCol, IonGrid, IonIcon, IonItem, IonLabel, IonAvatar, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, SharedModule]
})
export class DetallesPage implements OnInit {

  characterId: string = '';
  character = null as any;
  episodes: any[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private rickandmortySvc: RickAndMortyService
  ) {
    this.characterId = this.activeRoute.snapshot.paramMap.get('id') as string;
  }

  ngOnInit() {
    console.log(this.characterId);
  }

  // llama a la funcion cada vez que se entra a cada pagina
  ionViewWillEnter(){
    this.getCharacter();
  }

  getCharacter() {

    this.rickandmortySvc.getCharacterById(this.characterId).subscribe({

      next: (res: any) => {

        this.character = res;
        this.getEpisodes();
      },
      error: (error: any) => {

      }
    });
  }

  getEpisodes() {

    for (const url of this.character.episode) {

      this.rickandmortySvc.getByURL(url).subscribe({

      next: (res: any) => {

          console.log(res);
          this.episodes.push(res);
      },
      error: (error: any) => {

      }
    });
    }


  }
}
