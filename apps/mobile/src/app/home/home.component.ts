import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title = 'mobile';
  constructor(private route: Router) { }

  evento(): void{
    this.route.navigate(['/stock-consol']);
  }

}
