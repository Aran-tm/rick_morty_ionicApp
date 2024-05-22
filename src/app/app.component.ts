import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CharacterDetailPage } from './pages/character-detail/character-detail.page';
import { HomePage } from './pages/home/home.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, HomePage, CharacterDetailPage],
})
export class AppComponent {
  constructor() {}
}
