import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// importacion del http client module
import { HttpClientModule } from '@angular/common/http';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [RickAndMortyService] // módulo de Angular que permite definir qué servicios están disponibles para ser inyectados
})
export class SharedModule { }
