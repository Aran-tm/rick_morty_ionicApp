import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { RickAndMortyService } from '../../services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, SharedModule]
})
export class CharacterDetailPage implements OnInit {

  characterID: string = "";
  character = null as any;

  constructor(

    // esto es para obtener el parametro de lo que llegue en la ruta
    private actRoute: ActivatedRoute,
    private rickandmorty: RickAndMortyService,
  ) {
    this.characterID = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log(`Character => ${this.characterID}`);
  }

  ngOnInit() {
    console.log(`HEY`);
  }

  // ciclo de vida de angular para cuando el usuario entre en la pantalla
  ionViewWillEnter() {
    this.getCharacters();
  }

  getCharacters() {

    this.rickandmorty.getCharacterById(this.characterID).subscribe({

      next: (res: any) => {

        console.log(res);
        this.character = res;
      },
      error: (error: any) => {
      }
    });
  }

}
