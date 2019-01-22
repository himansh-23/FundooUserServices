import { TestBed } from '@angular/core/testing';

import { NavtoggleService } from './navtoggle.service';

describe('NavtoggleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavtoggleService = TestBed.get(NavtoggleService);
    expect(service).toBeTruthy();
  });
});
