import { Injectable } from '@angular/core';


import { BaseView } from '../views/base.view';
import { BasePresenter } from './base.presenter';
import { GetLoginUseCase } from '../../domain/usecases/GetLoginUseCase';


@Injectable({
  providedIn: "root"
})
export class LoginPresenter implements BasePresenter {

  private baseView: BaseView;

  constructor(private _useCase: GetLoginUseCase) {
    this.baseView = {
      setValues: (res: any): void => {
        // Hacer algo con 'res' aquí dentro
      }
    };
  }

  setView(component: any) {
    this.baseView = component as BaseView;
  }

  login(email: string, password: string) {

    this._useCase.login(email,password ).then((res) => {
      this.baseView.setValues(res);

    }).catch((exception) => {
     console.log(exception) });
  }
}
