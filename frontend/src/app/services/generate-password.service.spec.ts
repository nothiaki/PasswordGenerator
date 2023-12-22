import { TestBed } from '@angular/core/testing';

import { GeneratePasswordService } from './generate-password.service';

describe('GeneratePasswordService', () => {
  let service: GeneratePasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneratePasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
