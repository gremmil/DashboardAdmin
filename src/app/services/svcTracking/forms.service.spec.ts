import { TestBed } from '@angular/core/testing';

import { FormsTrackingService } from './formsTracking.service';

describe('FormsService', () => {
  let service: FormsTrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsTrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
