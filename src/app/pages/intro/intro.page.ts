import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IntroPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    // despues de un segundo y medio cuando termine la animacion:
    setTimeout(() => {

      // nos envia a la pagina home
      this.router.navigateByUrl('/home');
    }, 1500)
  }

}
