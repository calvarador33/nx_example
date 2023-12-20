import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';

import { EffectsModule } from '@ngrx/effects';
import { AppLayoutModule } from './features/shared/layout/app.layout.module';
import { InjectorModule } from '../../../../libs/core/src/injector/injector.module';

import { RECAPTCHA_SETTINGS, RecaptchaSettings, RecaptchaModule } from "ng-recaptcha";
import { environment } from '../environments/environment';
import { TabReducer } from './features/reducers/tab.reducer';
import { ActiveTabReducer } from './features/reducers/activeTab.reducer';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        InjectorModule,
        AppRoutingModule,
        AppLayoutModule,
        StoreModule.forRoot({ tabs: TabReducer, activeTab: ActiveTabReducer }),
        EffectsModule.forRoot([]),
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        {
            provide: RECAPTCHA_SETTINGS,
            useValue: { siteKey: environment.recaptcha.siteKey } as RecaptchaSettings,
        },

    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
