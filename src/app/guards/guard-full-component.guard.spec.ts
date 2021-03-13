import { TestBed } from '@angular/core/testing';

import { GuardFullComponentGuard } from './guard-full-component.guard';

describe('GuardFullComponentGuard', () => {
  let guard: GuardFullComponentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardFullComponentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
