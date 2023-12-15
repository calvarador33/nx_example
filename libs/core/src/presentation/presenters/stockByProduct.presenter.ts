import { Injectable } from '@angular/core';


import { BaseView } from '../views/base.view';
import { BasePresenter } from './base.presenter';

import { GetEstablishmentsByGeoUseCase } from '../../domain/usecases/GetEstablishmentsByGeoUseCase';
import { GetEstablishmentsByIdUseCase } from '../../domain/usecases/GetEstablishmentsByIdUseCase';
import { GetEstablishmentsUseCase } from '../../domain/usecases/GetEstablishmentsUseCase';
import { GetItemsUseCase } from '../../domain/usecases/GetItemsUseCase';


@Injectable({
  providedIn: "root"
})
export class StockByProductPresenter implements BasePresenter {

  private baseView: BaseView;

  constructor(private _useCaseByGeo: GetEstablishmentsByGeoUseCase,
    private _useCaseById: GetEstablishmentsByIdUseCase, private _useCase: GetEstablishmentsUseCase, private _useCaseItems: GetItemsUseCase) {
    this.baseView = {
      setValues: (res: any): void => {
        // Hacer algo con 'res' aquí dentro
      }
    };
  }

  setView(component: any) {
    this.baseView = component as BaseView;
  }

  getEstablishmentsByGeo() {

    this._useCaseByGeo.getEstablishmentsByGeo().then((res) => {
      this.baseView.setValues(res);

    }).catch((exception) => {
      console.log(exception)
    });
  }

  getEstablishmentsById() {

    this._useCaseById.getEstablishmentsById().then((res) => {
      this.baseView.setValues(res);

    }).catch((exception) => {
      console.log(exception)
    });
  }

  getEstablishments() {

    this._useCase.getEstablishments().then((res) => {
      this.baseView.setValues(res);

    }).catch((exception) => {
      console.log(exception)
    });
  }

  getItems() {

    this._useCaseItems.getItems().then((res) => {
      this.baseView.setValues(res);

    }).catch((exception) => {
      console.log(exception)
    });
  }
}
