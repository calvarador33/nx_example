import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronForwardOutline, mapOutline, peopleOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { EstablishmentService } from '../../services/establishment.service';


@Component({
  selector: 'app-stock-consol',
  templateUrl: './stock-consol.page.html',
  styleUrls: ['./stock-consol.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class StockConsolPage implements OnInit {

  data: any =[];

    params: any;
    autoridadSanitaria: any
    unidadEjecutora: any
    optionsUE = [{ code: '0', name: 'NO', }, { code: '1', name: 'SI' },]
    dataEstablishment: any

  constructor(private location: Location,private route: Router, private _establishmentService: EstablishmentService) {
    addIcons({ chevronForwardOutline, mapOutline, peopleOutline });
  }

  ngOnInit() {
    console.log(this.data)

    this.params = {
      autoridadSanitaria: this.autoridadSanitaria?.code ?? '0',
      tipoProducto: '0',
      unidadEjecutora: this.unidadEjecutora?.code ?? '0'
  }

  this._establishmentService.getItems(this.params).subscribe(res => {
      this.data = res
    console.log(this.data)
  });
  }

  back(): void {
    this.location.back();
  }

  showDetail(record:any):void {
    this.route.navigate(['/stock-establishment']);
  }

  showContact(record:any): void {
    //console.log(record);
    this.route.navigate(['/contact']);
  }

  showMap(record:any): void {
    //console.log(record);
    this.route.navigate(['/map']);
  }

}
