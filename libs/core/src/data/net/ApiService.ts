import { Injectable } from '@angular/core';

import { environment } from '../../../../../libs/core/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {

  public _REMOTE_END_POINTS = {
    URL_GET_ACCOUNT_PARAMS: `${environment.baseRoutePath}/author`,

    URL_POST_AUTH: `${environment.baseRoutePath}/getAccess`,

    URL_GET_ITEMS: `${environment.baseRoutePath}/getItems/`,

    URL_GET_ESTABLISHMENTS:  `${environment.baseRoutePath}/establishments/getItemsV2/`,

    URL_GET_ESTABLISHMENTS_ID:  `${environment.baseRoutePath}/establishments/getItemsById/`,

    URL_GET_ESTABLISHMENTS_GEO:  `${environment.baseRoutePath}/establishments/getItemMapById/`,

    URL_POST_STOCK_DESCRIPTION: `${environment.baseRoutePath}/stock/getByProductDescriptionV2/`,

    URL_POST_STOCK_CODE: `${environment.baseRoutePath}/stock/getByProductCodeV2/`,

    URL_POST_STOCK_ESTABLISHMENTS: `${environment.baseRoutePath}/stock/getByEstablishmentV2/`,



  };

}
