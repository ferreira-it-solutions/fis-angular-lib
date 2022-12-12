import { TestBed } from '@angular/core/testing';

import { NoDataService } from './no-data.service';

describe('NoDataService', () => {
  let service: NoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
