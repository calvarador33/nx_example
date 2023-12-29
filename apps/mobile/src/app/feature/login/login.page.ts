import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import { EncrypdataService } from '../../services/encrypdata.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {

  loginForm: FormGroup | undefined;
  username: string = ""
  password: string = ""
  isToastOpen: boolean = false

  lsUsername: string = localStorage.getItem('username') ?? "";
  lsRememberme: boolean = Boolean(localStorage.getItem('rememberme') ?? false);


  token: string | undefined

  form: any = {
    username: null,
    password: null
  };

  constructor(private loginPresenter: AuthService, private router: Router) { }

  routeToHome(){
    this.router.navigate(['/home']);

  }  


  setValues(res: any) {
    console.log(res);
    const userData = (JSON.stringify(res))
    window.sessionStorage.setItem("userData", userData);
    this.routeToHome()
  }

  ngOnInit() {

  }

  login(){

    const { password, username } = this.form;
    const body = {
      "emailUsuario": username,
      "clave": password
    }

    this.loginPresenter.login(body).subscribe({
      next: res => {

        if (this.lsRememberme) {
          localStorage.setItem("rememberme", this.lsRememberme + "")
          localStorage.setItem("username", this.lsUsername)
        } else {
          localStorage.removeItem("rememberme")
          localStorage.removeItem("username")
        }


        this.setValues(res)

      },
      error: err => {
        console.log(err)
        //this.showErrorViaMessages(err.error)
      }
    }) 
  }



}
