import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

const API_ROUTE = 'http://localhost:3000/establishments/';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(private userService: UserService, private http: HttpClient) { }

  getItems(params: any): Observable<any> {
    const { autoridadSanitaria, tipoProducto, unidadEjecutora } = params;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.userService.getToken()
      },)
    };

    return this.http.get(`${API_ROUTE}getItems/${autoridadSanitaria}/${tipoProducto}/${unidadEjecutora}`, httpOptions);
  }

  getItemsById(code: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.userService.getToken()
      },)
    };

    return this.http.get(`${API_ROUTE}getItemById/${code}`, httpOptions);
  }
}
