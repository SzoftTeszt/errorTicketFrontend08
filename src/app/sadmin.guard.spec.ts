import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { sadminGuard } from './sadmin.guard';

describe('sadminGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => sadminGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
