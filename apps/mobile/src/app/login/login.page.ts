import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],

})
export class LoginPage implements OnInit {
  username: string = ""
  password: string = ""
  isToastOpen: boolean = false

  constructor(private route: Router) { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    console.log(isOpen)
    this.route.navigate(['/home']);
  }

}
