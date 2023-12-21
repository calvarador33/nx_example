import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

const API_ROUTE = 'http://localhost:3000/stocks/';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private userService: UserService, private http: HttpClient) { }

  getStock(body: any): Observable<any> {
    //const { accion, product, codigoAlmacen, date, productType, estrategy, healthAuthority } = params;
    const accion = body.accion
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.userService.getToken()
      },)
    };

    switch (accion) {
      case '4':
        //return this.http.post(`${API_ROUTE}getByProductDescription`, body, httpOptions);
        return this.http.post(`${API_ROUTE}getByProductDescriptionV2`, body, httpOptions);
      case '20':
        //return this.http.post(`${API_ROUTE}getByProductCode`, body, httpOptions);
        return this.http.post(`${API_ROUTE}getByProductCodeV2`, body, httpOptions);
      case '3':
        return this.http.post(`${API_ROUTE}getHistoryByProductCode`, body, httpOptions);
      default:
        return null;
    }
  }

  getExcelStock(body: any): Observable<any> {
    const accion = body.accion
    const httpOptions = {
      headers: new HttpHeaders({
        'token': this.userService.getToken(),
      },
      ),
    };

    switch (accion) {
      case '4':
        //return this.http.get(`${API_ROUTE}excel/getByProductDescription`, {responseType: 'blood'});
        return this.http.post(`${API_ROUTE}excel/getByProductDescriptionV2`, body, { headers: httpOptions.headers, responseType: 'blob' });
      case '20':
        return this.http.post(`${API_ROUTE}excel/getExcelProductCodeV2`, body, { headers: httpOptions.headers, responseType: 'blob' });
      case '3':
        return this.http.post(`${API_ROUTE}excel/getExcelHistoryByProductCode`, body, { headers: httpOptions.headers, responseType: 'blob' });
      default:
        return null;
    }

  }

  getByEstablishment(codigoEstablecimiento: string, unidadEjecutora: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': this.userService.getToken()
      },)
    };

    const body = {
      codigoEstablecimiento,
      unidadEjecutora,
      pagina: 1,
      tamPagina: 2000000
    }

    //return this.http.post(`${API_ROUTE}getByEstablishment`, body, httpOptions);
    return this.http.post(`${API_ROUTE}getByEstablishmentV2`, body, httpOptions);
  }
}
