import { TestBed, inject } from '@angular/core/testing';

import { BikeStoreService } from './bike-store.service';

describe('BikeStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikeStoreService]
    });
  });

  it('should be created', inject([BikeStoreService], (service: BikeStoreService) => {
    expect(service).toBeTruthy();
  }));
});
