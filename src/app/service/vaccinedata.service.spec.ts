import { TestBed } from '@angular/core/testing';

import { VaccinedataService } from './vaccinedata.service';

describe('VaccinedataService', () => {
  let service: VaccinedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VaccinedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
