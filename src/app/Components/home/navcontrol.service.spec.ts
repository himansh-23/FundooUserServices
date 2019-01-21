import { TestBed } from '@angular/core/testing';

import { NavcontrolService } from './navcontrol.service';

describe('NavcontrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavcontrolService = TestBed.get(NavcontrolService);
    expect(service).toBeTruthy();
  });
});
