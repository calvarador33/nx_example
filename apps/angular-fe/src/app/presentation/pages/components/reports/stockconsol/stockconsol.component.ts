import { Component, OnInit } from '@angular/core';
import { EstablishmentService } from 'apps/angular-fe/src/app/features/service/establishment.service';

@Component({
    selector: 'app-stockconsol',
    templateUrl: './stockconsol.component.html',
    styleUrls: ['./stockconsol.component.scss']
})
export class StockconsolComponent implements OnInit {
    autoridadSanitaria: any
    unidadEjecutora: any
    optionsUE = [{ code: '0', name: 'NO', }, { code: '1', name: 'SI' },]
    dataEstablishment: any
    loading: boolean = false
    showContacts: boolean = false
    dataContact: any = "-"
    showStockEstablishment: boolean = false
    dataStock: any = "-"
    showMap: boolean = false
    dataMap: any = "-"

    params: any

    constructor(private establishmentsService: EstablishmentService) {
    }

    ngOnInit() {
        this.getData()
    }

    getData(): void {
        this.loading = true

        this.params = {
            autoridadSanitaria: this.autoridadSanitaria?.code ?? '0',
            tipoProducto: '0',
            unidadEjecutora: this.unidadEjecutora?.code ?? '0'
        }

        this.establishmentsService.getItems(this.params).subscribe(res => {
            this.dataEstablishment = res
            this.loading = false
        });
    }

    getDataDetail(record: any): void {
        const params = {
            establishment: record,
            unidadEjecutora: this.unidadEjecutora.code,
        }
        this.dataStock = params;
        this.showStockEstablishment = true
    }

    closeStockEstablishment() {
        this.dataStock = "-";
        this.showStockEstablishment = true
    }

    modalContact(record: any): void {
        this.dataContact = record
        this.showContacts = true
    }

    closeContact(): void {
        this.dataContact = "-"
        this.showContacts = false
    }

    modalMap(record: any): void {
        this.dataMap = record
        this.showMap = true
    }

    closeMap(): void {
        this.dataMap = "-"
        this.showMap = false
    }

    getExcelData(): void {
        if (this.params) {
            this.establishmentsService.getExcelItems(this.params).subscribe(res => {
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