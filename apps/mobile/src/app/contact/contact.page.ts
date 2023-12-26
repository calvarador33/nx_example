import { Component, OnInit } from '@angular/core';
import { CommonModule,Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ContactPage implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  back(): void {
    this.location.back();
  }

}
