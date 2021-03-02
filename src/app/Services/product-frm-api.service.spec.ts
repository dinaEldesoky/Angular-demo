import { TestBed } from '@angular/core/testing';

import { ProductFrmApiService } from './product-frm-api.service';

describe('ProductFrmApiService', () => {
  let service: ProductFrmApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductFrmApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
