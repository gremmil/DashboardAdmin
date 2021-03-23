import { TestBed } from '@angular/core/testing';

import { FormsDashboardService } from './formsDashboard.service';

describe('SvcFormsService', () => {
  let service: FormsDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormsDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
