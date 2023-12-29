import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_ROUTE = 'http://api2.cenares.gob.pe/users/';

const API_ROUTE_1 = 'http://api2.cenares.gob.pe:3002/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(body: object): Observable<any> {
    return this.http.post(API_ROUTE + 'getAccess', body, httpOptions);
  }

}
