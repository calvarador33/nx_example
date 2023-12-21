import { Component, Input, OnInit } from '@angular/core';
import { StockService } from 'apps/angular-fe/src/app/features/service/stock.service';


@Component({
  selector: 'app-stockhistory',
  templateUrl: './stockhistory.component.html',
  styleUrls: ['./stockhistory.component.scss']
})
export class StockhistoryComponent implements OnInit {

  @Input() dataHistory: any
  dataStockHistory: any
  loading: boolean = false
  bodyData: any

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
    const codeProduct = this.dataHistory.record.prd_sismed
    const codeAlmacen = this.dataHistory.record.alm_codigo

    this.bodyData = {
      accion: '3',
      producto: codeProduct,
      codigoAlmacen: codeAlmacen,
      fechaConsulta: this.dataHistory.fechaConsulta,
      tipoProducto: this.dataHistory.tipoProducto,
      estrategia: this.dataHistory.estrategia,
      autoridadSanitaria: this.dataHistory.autoridadSanitaria,
      pagina: 1,
      tamPagina: 200000
    }

    this.loading = true
    this.stockService.getStock(this.bodyData).subscribe(res => {
      this.dataStockHistory = res
      this.loading = false
    });
  }

  getExcelData() {

    if (this.bodyData) {
      this.stockService.getExcelStock(this.bodyData).subscribe(res => {
        const bloodExcel = res

        if (bloodExcel.size !== 0) {

          const link = document.createElement('a');
          link.href = URL.createObjectURL(bloodExcel);
          link.download = `reporte.XLSX`;
          link.click();
        }
      })
    }
  }

}
