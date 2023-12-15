import { TestBed } from '@angular/core/testing';

import { GeneralFiltersService } from './general-filters.service';

describe('GeneralFiltersService', () => {
  let service: GeneralFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
