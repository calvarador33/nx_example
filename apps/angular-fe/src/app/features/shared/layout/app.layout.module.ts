import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';

import { RouterModule } from '@angular/router';

import { AppLayoutComponent } from "./app.layout.component";

import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';

import { MessagesModule } from 'primeng/messages';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';

import { CalendarModule } from 'primeng/calendar';

import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';

import { DialogModule } from 'primeng/dialog';
import { SkeletonModule } from 'primeng/skeleton';
import { AppConfigModule } from '../config/config.module';
import { LoginComponent } from '../../../presentation/pages/auth/login/login.component';
import { AppMenuitemComponent } from '../app.menuitem.component';
import { AppTopBarComponent } from '../topbar/app.topbar.component';
import { AppFooterComponent } from '../footer/app.footer.component';
import { AppMenuComponent } from '../menu/app.menu.component';
import { AppSidebarComponent } from '../sidebar/app.sidebar.component';
import { HomeComponent } from '../../../presentation/pages/home/home.component';
import { RecaptchaModule } from 'ng-recaptcha';


@NgModule({
    declarations: [

      AppMenuitemComponent,
      AppTopBarComponent,
      AppFooterComponent,
      AppMenuComponent,
      AppSidebarComponent,
      AppLayoutComponent,
      LoginComponent,
      HomeComponent


    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule,
        PasswordModule,
        CheckboxModule,
        ButtonModule,
        MessagesModule,
        MenuModule,
        TabMenuModule,
        TabViewModule,
        CalendarModule,
        DropdownModule,
        DividerModule,
        TableModule,
        SplitterModule,
        RecaptchaModule,
        DialogModule,
        SkeletonModule,
    ],
    exports: [AppLayoutComponent]
})
export class AppLayoutModule { }
