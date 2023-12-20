import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockhistoryComponent } from './stockhistory.component';

describe('StockhistoryComponent', () => {
  let component: StockhistoryComponent;
  let fixture: ComponentFixture<StockhistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockhistoryComponent]
    });
    fixture = TestBed.createComponent(StockhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
