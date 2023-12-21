
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Password } from 'primeng/password';
import { Checkbox } from 'primeng/checkbox';
import { Message } from 'primeng/api';
import { BaseView } from '../../../../../../../../libs/core/src/presentation/views/base.view';

import { LoginPresenter } from '../../../../../../../../libs/core/src/presentation/presenters/login.presenter';
import { LoginView } from '../../../../../../../../libs/core/src/presentation/views/login.view';
import { Router } from '@angular/router';
import { UserService } from 'apps/angular-fe/src/app/features/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, LoginView {
  loginForm: FormGroup | undefined;
  password: Password | undefined
  checkbox: Checkbox | undefined
  messages: Message | undefined
  msgs: Message[] = [];
  lsUsername: string = localStorage.getItem('username') ?? "";
  lsRememberme: boolean = Boolean(localStorage.getItem('rememberme') ?? false);

  token: string | undefined

  form: any = {
    username: null,
    password: null
  };


  constructor(    private loginPresenter: LoginPresenter, private userService: UserService,private router: Router,) { }
  routeToHome(){
    this.router.navigate(['/']);

  }  
  showErrorModal(error: string, tipo: number){};
  showError(error: string) {};

  setValues(res: any) {
    console.log(res);
    this.userService.saveData(res)
    this.routeToHome()
  }

  ngOnInit() {
    this.setPresenter();
  }

  login(){

    const { password, user } = this.form;
    const body = {
      "emailUsuario": this.lsUsername || user,
      "clave": password
    }

    this.loginPresenter.login(body.emailUsuario, body.clave)
  }

  setPresenter(): void {
    this.loginPresenter.setView(this);

  }


  showErrorViaMessages(error: string) {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: '', detail: error });
  }

  resolved(captchaResponse: string) {
    this.token = captchaResponse
  }
}
