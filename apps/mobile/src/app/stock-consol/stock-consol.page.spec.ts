import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockConsolPage } from './stock-consol.page';

describe('StockConsolPage', () => {
  let component: StockConsolPage;
  let fixture: ComponentFixture<StockConsolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StockConsolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
