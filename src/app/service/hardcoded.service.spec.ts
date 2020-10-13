import { TestBed } from '@angular/core/testing';

import { HardcodedService } from './hardcoded.service';

describe('HardcodedService', () => {
  let service: HardcodedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HardcodedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
