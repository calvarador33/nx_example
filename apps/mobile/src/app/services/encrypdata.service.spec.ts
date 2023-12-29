import { TestBed } from '@angular/core/testing';

import { EncrypdataService } from './encrypdata.service';

describe('EncrypdataService', () => {
  let service: EncrypdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncrypdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
