import { NgModule } from '@angular/core';


import {IonGrid,IonCol,IonRow,IonButton,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonCard,IonHeader,IonToolbar,IonTitle,IonMenu,IonContent,IonNote,IonList,IonItem,IonLabel,IonButtons,IonMenuButton} from '@ionic/angular/standalone';


import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';
import { HomeComponentRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, HomeComponentRoutingModule, IonGrid,IonCol,IonRow,IonButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonHeader,IonToolbar,IonTitle,IonMenu,IonContent,IonNote,IonList,IonItem,IonLabel,IonButtons,IonMenuButton],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})

export class HomeComponentModule {}
