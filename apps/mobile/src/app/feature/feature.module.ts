import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonicModule,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuButton,
  IonNote,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPage } from './login/login.page';
import { ContactPage } from './contact/contact.page';
import { MapPage } from './map/map.page';
import { StockConsolPage } from './stock-consol/stock-consol.page';
import { StockEstablishmentPage } from './stock-establishment/stock-establishment.page';


import { AuthService } from '../services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { EstablishmentService } from '../services/establishment.service';

@NgModule({
  declarations: [
    HomeComponent,
    LoginPage,
    ContactPage,
    MapPage,
   // StockConsolPage,
   // StockEstablishmentPage,
  ],
  imports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),

  ],
  providers: [ 
  
    AuthService,
    EstablishmentService],


})
export class FeatureModule {}
