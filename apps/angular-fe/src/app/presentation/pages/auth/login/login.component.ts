
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Password } from 'primeng/password';
import { Checkbox } from 'primeng/checkbox';
import { Message } from 'primeng/api';
import { BaseView } from '../../../../../../../../libs/core/src/presentation/views/base.view';

import { LoginPresenter } from '../../../../../../../../libs/core/src/presentation/presenters/login.presenter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, BaseView {
  loginForm: FormGroup | undefined;
  password: Password | undefined
  checkbox: Checkbox | undefined
  messages: Message | undefined
  msgs: Message[] = [];
  lsUsername: string = localStorage.getItem('username') ?? "";
  lsRememberme: boolean = Boolean(localStorage.getItem('rememberme') ?? false);

  form: any = {
    username: null,
    password: null
  };


  constructor(    private loginPresenter: LoginPresenter,) { }

  setValues(res: any) {
    console.log(res);
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

}
