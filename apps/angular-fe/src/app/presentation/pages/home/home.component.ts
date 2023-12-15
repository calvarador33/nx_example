import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable, } from 'rxjs';
import { TabPrincipal } from '../../../features/interfaces/tabs.model';
import { UserService } from '../../../features/service/user.service';
import { AppStateActiveTab } from '../../../features/state/appActiveTab.state';
import { AppStateTab } from '../../../features/state/appTab.state';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tabs: Observable<TabPrincipal[]>
  activeTab: Observable<number>
  activeIndex: number = 0;

  constructor(private store: Store<AppStateTab>, private storeActiveTab: Store<AppStateActiveTab>, private userService: UserService, private router: Router) {
    this.tabs = this.store.select(state => state.tabs);
    this.activeTab = this.storeActiveTab.select(state => state.activeTab);
    this.activeTab.subscribe(activeTab => this.activeIndex = activeTab);
  }

  ngOnInit() {

  }

  removeTab(event: any): void {
    this.store.dispatch({
      type: 'removeTab',
      payload: event.index
    });

    this.storeActiveTab.dispatch({
      type: 'updateActiveTab',
      payload: 0
    });
  }

}
