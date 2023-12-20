import { Component, OnInit } from '@angular/core';
import { FilterMatchMode, Message,FilterService, MessageService, SelectItem } from 'primeng/api';
import { StockService } from 'src/app/layout/service/stock.service';


@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.scss'],
    providers: [MessageService, FilterService]
})
export class StockComponent implements OnInit {
    currentDate = new Date();
    fechaConsulta: Date
    autoridadSanitaria: any
    tipoUso: any
    tipoProducto: any
    estrategia: any
    producto: string = ''
    dataStock: any
    dataDetail: any
    loadingStock: boolean = false
    loadingDetail: boolean = false
    visibleScreen: boolean = false
    showsModalContact: boolean = false
    dataContact: any = "-"
    splitLayout: string = 'vertical'
    suma: number = 0
    msgs: Message[] = [];

    showModalStockHistory: boolean = false
    dataStockHistory: any = "-"

    prueba: boolean = false

    matchModeOptions: SelectItem[];
    bodyData: any
    bodyDataDetail: any

    constructor(private stockService: StockService, private service: MessageService, private filterService: FilterService) { }

    ngOnInit() {
        this.fechaConsulta = this.currentDate
    }

    getDatetext(date: Date): string {
        const d = new Date(date),
            month = '' + (d.getMonth() + 1).toString().padStart(2, "0"),
            day = '' + d.getDate().toString().padStart(2, "0"),
            year = d.getFullYear();
        return year + month + day;
    }

    getData(): void {
        this.suma = 0
        this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
        if (this.producto.trim().length <= 2) {
            //this.MessageService.add({ key: 'x', severity: 'EROR', summary: 'Ingrese al menos una letra', detail: 'Validation failed' });            
            return this.service.add({ key: 'tst', severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
        }

        this.loadingStock = true
        this.dataDetail = []
        this.bodyDataDetail = []

        this.bodyData = {
            accion: '4',
            producto: this.producto,
            fechaConsulta: this.getDatetext(this.fechaConsulta),
            tipoProducto: this.tipoProducto.code === '0' ? '%' : this.tipoProducto.code,
            estrategia: this.estrategia.code === 0 ? '%' : this.estrategia.code,
            autoridadSanitaria: this.autoridadSanitaria.code === 0 ? '%' : this.autoridadSanitaria.code,
            pagina: 1,
            tamPagina: 200000
        }
        this.stockService.getStock(this.bodyData).subscribe(res => {
            this.dataStock = res
            this.loadingStock = false
        })
    }

    getDataDetail(record: any): void {
        this.loadingDetail = true
        this.suma = 0
        this.bodyDataDetail = {
            accion: '20',
            producto: record.prd_sismed,
            fechaConsulta: this.getDatetext(this.fechaConsulta),
            tipoProducto: this.tipoProducto.code === '0' ? '%' : this.tipoProducto.code,
            estrategia: this.estrategia.code === 0 ? '%' : this.estrategia.code,
            autoridadSanitaria: this.autoridadSanitaria.code === 0 ? '%' : this.autoridadSanitaria.code,
            pagina: 1,
            tamPagina: 200000
        }
        this.stockService.getStock(this.bodyDataDetail).subscribe(res => {
            this.dataDetail = res
            this.loadingDetail = false
            this.suma = this.dataDetail.reduce((a: any, b: any) => a + b.stock, 0)
        })
    }

    modalContact(record: any): void {
        this.dataContact = record
        this.showsModalContact = true
    }

    closeModalContact(): void {
        this.dataContact = "-"
        this.showsModalContact = false
    }

    changeSplitLayout(): void {
        this.splitLayout = this.splitLayout === "vertical" ? "horizontal" : "vertical"
    }

    modalStockHistory(record: any): void {
        this.dataStockHistory = {
            record,
            fechaConsulta: this.getDatetext(this.fechaConsulta),
            tipoProducto: this.tipoProducto.code === '0' ? '%' : this.tipoProducto.code,
            estrategia: this.estrategia.code === 0 ? '%' : this.estrategia.code,
            autoridadSanitaria: this.autoridadSanitaria.code === 0 ? '%' : this.autoridadSanitaria.code,
        }
        this.showModalStockHistory = true
    }

    closeStockHistory(): void {
        this.dataStockHistory = "-"
        this.showModalStockHistory = false
    }

    getExcelData(): void {
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

    getExcelDataDetail(): void {
        if (this.bodyDataDetail) {
            this.stockService.getExcelStock(this.bodyDataDetail).subscribe(res => {
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
