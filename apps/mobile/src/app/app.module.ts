import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import {
  RouterModule,
  PreloadAllModules,
  RouteReuseStrategy,
} from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureModule } from './feature/feature.module';
import { AuthService } from './services/auth.service';
import { InfoMedWorkspaceIonicCoreModule } from '../../../../xplat/ionic/core/core.module';

import { HTTP } from '@ionic-native/http/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [
    InfoMedWorkspaceIonicCoreModule,
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  providers: [ 
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HTTP,
    AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
