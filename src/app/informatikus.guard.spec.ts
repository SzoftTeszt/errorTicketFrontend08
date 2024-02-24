import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { informatikusGuard } from './informatikus.guard';

describe('informatikusGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => informatikusGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
