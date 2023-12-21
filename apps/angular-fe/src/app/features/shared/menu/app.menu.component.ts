import { OnInit } from '@angular/core';
import { Component, ViewChild } from '@angular/core';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { TabPrincipal } from '../../interfaces/tabs.model';
import { LayoutService } from '../../service/app.layout.service';
import { AppStateActiveTab } from '../../state/appActiveTab.state';
import { AppStateTab } from '../../state/appTab.state';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    subscribeTab: any[] = [];
    subscribeActiveTab: number = 0;

    tabs: Observable<TabPrincipal[]>
    activeTab: Observable<number>

    constructor(public layoutService: LayoutService, private storeActiveTab: Store<AppStateActiveTab>, private storeTab: Store<AppStateTab>) {
        this.tabs = this.storeTab.select(state => state.tabs);
        this.tabs.subscribe(tabs => this.subscribeTab = tabs);

        this.activeTab = this.storeActiveTab.select(state => state.activeTab);
        this.activeTab.subscribe(activeTab => this.subscribeActiveTab = activeTab);
    }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    //{ label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                    { label: 'Inicio', icon: 'pi pi-fw pi-home', command: () => { this.addTab("Inicio", "init") } }
                ]
            },
            {
                label: 'Opciones',
                items: [
                    //{ label: 'Consulta por Producto Stocks y Consumos en Iprees', icon: 'pi pi-fw pi-check-square', routerLink: ['/stockproduct'] },
                    //{ label: 'Ipress y Productos Consolidado Stocks y Consumo', icon: 'pi pi-fw pi-check-square', routerLink: ['/stockconsol'] },
                    { label: 'Consulta por Producto Stocks y Consumos en Iprees', icon: 'pi pi-fw pi-check-square', command: () => { this.addTab("Stock Producto", "stopr") } },
                    { label: 'Ipress y Productos Consolidado Stocks y Consumo', icon: 'pi pi-fw pi-check-square', command: () => { this.addTab("Stock Consolidado", "stocons") } },
                    //{ label: 'Message', icon: 'pi pi-fw pi-comment', routerLink: ['/uikit/message'] },
                ]
            },

        ];
    }

    addTab(headerTab: any, key: string): void {
        const index = this.subscribeTab.findIndex(e => e.key === key)

        if (index === -1) {
            this.storeTab.dispatch({
                type: 'addTab',
                payload: <TabPrincipal>{
                    header: headerTab,
                    key: key
                }
            });
        }

        if (this.subscribeActiveTab !== index) {            
            setTimeout(() => {
                this.storeActiveTab.dispatch({
                    type: 'updateActiveTab',
                    payload: index === -1 ? this.subscribeTab.length - 1 : index
                });
            }, 100);
        }
    }
}
