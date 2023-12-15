import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
export interface UserRepository {
  getAuthors: () => Observable<any>;

  login:(email: string, password: string) => Observable<any>;

  getItems:()=> Observable<any>;
  getEstablishments:()=> Observable<any>;
  getEstablishmentsById:()=> Observable<any>;
  getEstablishmentsByGeo:()=> Observable<any>;

  getStockByDescription:()=> Observable<any>;
  getStockByCode:()=> Observable<any>;
  getStockByEstablishments:()=> Observable<any>;

}

export const USER_REPOSITORY = new InjectionToken('UserRepository');
