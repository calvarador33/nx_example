import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './features/shared/layout/app.layout.component';
import { LoginComponent } from './presentation/pages/auth/login/login.component';

export const appRoutes: Route[] = [
  {
    path: '', component: AppLayoutComponent,
    children: [
        { path: '', loadChildren: () => import('../app/presentation/pages/home/home.module').then(m => m.HomeModule) },

    ]
},
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
