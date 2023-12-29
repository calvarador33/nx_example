import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

const API_ROUTE = 'http://localhost:3000/filters/';

@Injectable({
  providedIn: 'root'
})
export class GeneralFiltersService {

  constructor(private userService: UserService, private http: HttpClient) { }

  getData(accion: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.userService.getToken()
      },)
    };

    return this.http.get(`${API_ROUTE}getItems/${accion}`, httpOptions);
  }
}