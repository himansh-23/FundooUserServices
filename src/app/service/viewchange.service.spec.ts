import { TestBed } from '@angular/core/testing';

import { ViewchangeService } from './viewchange.service';

describe('ViewchangeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewchangeService = TestBed.get(ViewchangeService);
    expect(service).toBeTruthy();
  });
});
