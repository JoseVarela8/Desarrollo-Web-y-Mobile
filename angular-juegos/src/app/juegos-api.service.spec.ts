import { TestBed } from '@angular/core/testing';

import { JuegosAPIService } from './juegos-api.service';

describe('JuegosAPIService', () => {
  let service: JuegosAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JuegosAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
