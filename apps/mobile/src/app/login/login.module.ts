import { NgModule } from '@angular/core';


import {IonGrid,IonCol,IonRow,IonButton,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonCard,IonHeader,IonToolbar,IonTitle,IonMenu,IonContent,IonNote,IonList,IonItem,IonLabel,IonButtons,IonMenuButton} from '@ionic/angular/standalone';


import { CommonModule } from '@angular/common';
import { LoginPage } from './login.page';
import { IonicModule } from '@ionic/angular';
import { LoginComponentRoutingModule } from './login-routing.module';

@NgModule({
  imports: [CommonModule, IonicModule, LoginComponentRoutingModule, IonGrid,IonCol,IonRow,IonButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonHeader,IonToolbar,IonTitle,IonMenu,IonContent,IonNote,IonList,IonItem,IonLabel,IonButtons,IonMenuButton],
  declarations: [LoginPage],
  exports: [LoginPage]
})

export class LoginPagetModule {}
