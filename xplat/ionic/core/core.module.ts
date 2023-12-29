import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { NativeHttpInterceptor } from './http.interceptor';

@NgModule({
  imports: [ IonicModule.forRoot()],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NativeHttpInterceptor,
      multi: true,
    },
  ],
})
export class InfoMedWorkspaceIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: InfoMedWorkspaceIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'InfoMedWorkspaceIonicCoreModule');
  }
}



function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(
      `${moduleName} has already been loaded. Import ${moduleName} in the AppModule only.`
    );
  }
}
