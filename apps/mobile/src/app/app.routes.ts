import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: 'login',
    loadComponent: () => import('./feature/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./feature/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'stock-consol',
    loadComponent: () => import('./feature/stock-consol/stock-consol.page').then(m => m.StockConsolPage)
  },
  {
    path: 'contact',
    loadComponent: () => import('./feature/contact/contact.page').then(m => m.ContactPage)
  },
  {
    path: 'map',
    loadComponent: () => import('./feature/map/map.page').then(m => m.MapPage)
  },
  {
    path: 'stock-establishment',
    loadComponent: () => import('./feature/stock-establishment/stock-establishment.page').then(m => m.StockEstablishmentPage)
  },
];
