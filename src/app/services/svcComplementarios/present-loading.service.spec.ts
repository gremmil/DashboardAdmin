import { TestBed } from '@angular/core/testing';

import { PresentLoadingService } from './present-loading.service';

describe('PresentLoadingService', () => {
  let service: PresentLoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentLoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
