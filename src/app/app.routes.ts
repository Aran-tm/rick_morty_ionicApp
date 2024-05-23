import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'intro',
    loadComponent: () => import('./pages/intro/intro.page').then( m => m.IntroPage)
  },
  {
    path: 'detalles',
    loadComponent: () => import('./pages/detalles/detalles.page').then( m => m.DetallesPage)
  },
  {
    path: '**',
    loadComponent: () => import('./pages/intro/intro.page').then(m => m.IntroPage)
  }
];
