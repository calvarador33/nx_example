import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

const API_ROUTE = 'http://localhost:3000/stoks/';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private userService: UserService, private http: HttpClient) { }

  getStock(params: any): Observable<any> {
    const { accion, product, date, productType, estrategy, healthAuthority } = params;

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.userService.getToken()
      },)
    };

    switch (accion) {
      case '4':
        return this.http.get(`${API_ROUTE}getByProductDescription/${product}/${date}/${productType}/${estrategy}/${healthAuthority}`, httpOptions);
      case '20':
        return this.http.get(`${API_ROUTE}getByProductCode/${product}/${date}/${productType}/${estrategy}/${healthAuthority}`, httpOptions);
      default:
        return null;
    }
  }

  getByEstablishment(codigoEstablishment: string, unidadEjecutora: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.userService.getToken()
      },)
    };

    return this.http.get(`${API_ROUTE}getByEstablishment/${codigoEstablishment}/${unidadEjecutora}`, httpOptions);
  }
}
