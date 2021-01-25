import { TestBed } from '@angular/core/testing';

import { SkiTouringService } from './ski-touring.service';

describe('SkiTouringService', () => {
  let service: SkiTouringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkiTouringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
