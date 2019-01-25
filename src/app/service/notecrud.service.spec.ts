import { TestBed } from '@angular/core/testing';

import { NotecrudService } from './notecrud.service';

describe('NotecrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotecrudService = TestBed.get(NotecrudService);
    expect(service).toBeTruthy();
  });
});
