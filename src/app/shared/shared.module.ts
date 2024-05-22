import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importacion del http client module
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyService } from '../services/rick-and-morty.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  exports: [RouterModule],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [RickAndMortyService] // módulo de Angular que permite definir qué servicios están disponibles para ser inyectados
})
export class SharedModule { }
