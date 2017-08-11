import { TestBed, inject } from '@angular/core/testing';

import { AccessoriesService } from './accessories.service';

describe('AccessoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessoriesService]
    });
  });

  it('should be created', inject([AccessoriesService], (service: AccessoriesService) => {
    expect(service).toBeTruthy();
  }));
});
