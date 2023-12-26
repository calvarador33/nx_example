import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockEstablishmentPage } from './stock-establishment.page';

describe('StockEstablishmentPage', () => {
  let component: StockEstablishmentPage;
  let fixture: ComponentFixture<StockEstablishmentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StockEstablishmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
