import { TestBed } from '@angular/core/testing';

import { RepaintService } from './repaint.service';

describe('RepaintService', () => {
  let service: RepaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
