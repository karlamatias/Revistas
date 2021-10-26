import { TestBed } from '@angular/core/testing';

import { CargaanuncioService } from './cargaanuncio.service';

describe('CargaanuncioService', () => {
  let service: CargaanuncioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaanuncioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
