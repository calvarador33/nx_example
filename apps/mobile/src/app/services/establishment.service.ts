import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

const API_ROUTE = 'http://api2.cenares.gob.pe:3002/establishments/';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  constructor(private userService: UserService, private http: HttpClient) { }


  public getToken(): string {
    const user = window.sessionStorage.getItem("userData");
    if (user) {
        return JSON.parse(user).token;
    }
    return "";
  }

  getItems(params: any): Observable<any> {
    const { autoridadSanitaria, tipoProducto, unidadEjecutora } = params;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.getToken()
      },)
    };

    //return this.http.get(`${API_ROUTE}getItems/${autoridadSanitaria}/${tipoProducto}/${unidadEjecutora}`, httpOptions);
    return this.http.get(`${API_ROUTE}getItemsV2/${unidadEjecutora}`, httpOptions);
  }

  getItemById(code: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.getToken()
      },)
    };

    return this.http.get(`${API_ROUTE}getItemById/${code}`, httpOptions);
  }

  getItemMapById(code: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.getToken()
      },)
    };

    return this.http.get(`${API_ROUTE}getItemMapById/${code}`, httpOptions);
  }


  getExcelItems(params: any): Observable<any> {
    const { autoridadSanitaria, tipoProducto, unidadEjecutora } = params;
    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.getToken()
      },)
    };

    return this.http.get(`${API_ROUTE}excel/getItemsV2/${autoridadSanitaria}/${tipoProducto}/${unidadEjecutora}`, { headers: httpOptions.headers, responseType: 'blob' });
  }

}
