import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockestablishmentComponent } from './stockestablishment.component';

describe('StockestablishmentComponent', () => {
  let component: StockestablishmentComponent;
  let fixture: ComponentFixture<StockestablishmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockestablishmentComponent]
    });
    fixture = TestBed.createComponent(StockestablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
