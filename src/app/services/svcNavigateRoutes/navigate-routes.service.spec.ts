import { TestBed } from '@angular/core/testing';

import { NavigateRoutesService } from './navigate-routes.service';

describe('NavigateRoutesService', () => {
  let service: NavigateRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigateRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
