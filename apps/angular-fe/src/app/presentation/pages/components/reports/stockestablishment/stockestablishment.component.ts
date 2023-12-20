import { Component, Input, OnInit } from '@angular/core';
import { StockService } from 'src/app/layout/service/stock.service';

@Component({
  selector: 'app-stockestablishment',
  templateUrl: './stockestablishment.component.html',
  styleUrls: ['./stockestablishment.component.scss']
})
export class StockestablishmentComponent implements OnInit {

  @Input() establishment: any
  data: any
  loading: boolean = false

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    this.loading = true
    this.stockService.getByEstablishment(this.establishment.establishment.swc_dash_ialm_codigo, this.establishment.unidadEjecutora).subscribe(res => {
      this.data = res;
      this.loading = false
    })
  }

}
