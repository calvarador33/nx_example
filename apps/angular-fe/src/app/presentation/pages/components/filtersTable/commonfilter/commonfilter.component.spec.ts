import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonfilterComponent } from './commonfilter.component';

describe('CommonfilterComponent', () => {
  let component: CommonfilterComponent;
  let fixture: ComponentFixture<CommonfilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonfilterComponent]
    });
    fixture = TestBed.createComponent(CommonfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
