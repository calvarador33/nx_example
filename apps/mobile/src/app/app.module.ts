import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouterModule, PreloadAllModules, RouteReuseStrategy } from '@angular/router';
import { routes } from './app.routes';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),
    RouterModule.forRoot( routes, { preloadingStrategy: PreloadAllModules })
  ],
  providers: [ { provide: RouteReuseStrategy, useClass: IonicRouteStrategy}],
  bootstrap: [AppComponent],
})

export class AppModule {}
