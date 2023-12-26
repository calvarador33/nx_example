import {  Routes } from '@angular/router';
import { HomeComponentModule } from './home/home.module';
import { LoginPagetModule } from './login/login.module';

export const routes: Routes = [
  /* {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomeComponent),
  },
  {
    path: '',
    redirectTo: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomeComponent),
  }, */
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then(
        (mod) => mod.LoginPagetModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(
        (mod) => mod.HomeComponentModule
      ),
  },
/*   {
    path: 'stock-consol',
    loadComponent: () => import('./stock-consol/stock-consol.page').then( m => m.StockConsolPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact.page').then( m => m.ContactPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./map/map.page').then( m => m.MapPage)
  },
  {
    path: 'stock-establishment',
    loadComponent: () => import('./stock-establishment/stock-establishment.page').then( m => m.StockEstablishmentPage)
  }, */
];
