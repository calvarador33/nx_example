import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRepository } from '../domain/repository/UserRepository';
import { ApiService } from './net/ApiService';

@Injectable()
export class UserRepositoryImpl implements UserRepository {
  constructor(
    private apiService: ApiService,
    private httpClient: HttpClient,
  ) {}
  getAuthors(): Observable<any> {
    return this.httpClient.get<any>(
      this.apiService._REMOTE_END_POINTS.URL_GET_ACCOUNT_PARAMS
    );
  }

  login(email: string, password: string): Observable<any> {
    const params = {
      email: email,
      password: password
    };

    return this.httpClient.post<any>(
      this.apiService._REMOTE_END_POINTS.URL_POST_AUTH,
      params
    );
  }

  getItems(): Observable<any> {
    return this.httpClient.get<any>(
      this.apiService._REMOTE_END_POINTS.URL_GET_ACCOUNT_PARAMS
    );
  }

  getEstablishments(): Observable<any> {
    return this.httpClient.get<any>(
      this.apiService._REMOTE_END_POINTS.URL_GET_ESTABLISHMENTS
    );
  }


  getEstablishmentsById(): Observable<any> {
    return this.httpClient.get<any>(
      this.apiService._REMOTE_END_POINTS.URL_GET_ESTABLISHMENTS_ID
    );
  }


  getEstablishmentsByGeo(): Observable<any> {
    return this.httpClient.get<any>(
      this.apiService._REMOTE_END_POINTS.URL_GET_ESTABLISHMENTS_GEO
    );
  }


  getStockByDescription(): Observable<any> {
    const params = {

    };

    return this.httpClient.post<any>(
      this.apiService._REMOTE_END_POINTS.URL_POST_STOCK_DESCRIPTION,
      params
    );
  }


  getStockByCode(): Observable<any> {
    const params = {

    };
    return this.httpClient.get<any>(
      this.apiService._REMOTE_END_POINTS.URL_POST_STOCK_CODE,
      params
    );
  }


  getStockByEstablishments(): Observable<any> {
    const params = {

    };
    return this.httpClient.get<any>(
      this.apiService._REMOTE_END_POINTS.URL_POST_STOCK_ESTABLISHMENTS,
      params
    );
  }


}
