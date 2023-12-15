import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { appRoutes } from './app.routes';



@NgModule({
    imports: [
        RouterModule.forRoot(
          appRoutes,
            { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
