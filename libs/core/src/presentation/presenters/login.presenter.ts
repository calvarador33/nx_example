import { Injectable } from '@angular/core';


import { BaseView } from '../views/base.view';
import { BasePresenter } from './base.presenter';
import { GetLoginUseCase } from '../../domain/usecases/GetLoginUseCase';
import { LoginView } from '../views/login.view';


@Injectable({
  providedIn: "root"
})
export class LoginPresenter implements BasePresenter {
  private view: LoginView;
  private baseView: BaseView;

  constructor(private _useCase: GetLoginUseCase) {
    
    this.baseView = {
      setValues: (res: any): void => {
        // Hacer algo con 'res' aquí dentro
      }
    };

    this.view = {
      routeToHome: ():void => {
        // Hacer algo con 'res' aquí dentro
      },
      showErrorModal:(error: string, tipo: number) => void {
       
      },
      showError:(error: string) => void {

      }
    }
  }

  setView(component: any) {
    this.view = component as LoginView;
    this.baseView = component as BaseView;
  }

  login(email: string, password: string) {

    this._useCase.login(email,password ).then((res) => {
      this.baseView.setValues(res);

      //this.view.routeToHome();

    }).catch((exception) => {
     console.log(exception) });
  }
}
