import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { AppLayoutModule } from './features/shared/layout/app.layout.module';
import { InjectorModule } from '../../../../libs/core/src/injector/injector.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        InjectorModule,
        AppRoutingModule,
        AppLayoutModule,
        StoreModule.forRoot(),
        EffectsModule.forRoot([]),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
