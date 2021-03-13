import { TestBed } from '@angular/core/testing';

import { FormOrderDirectionService } from './form-order-direction.service';

describe('FormOrderDirectionService', () => {
  let service: FormOrderDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormOrderDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
