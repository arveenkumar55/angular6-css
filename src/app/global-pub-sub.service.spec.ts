import { TestBed, inject } from '@angular/core/testing';

import { GlobalPubSub } from './global-pub-sub.service';

describe('GlobalPubSubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalPubSub]
    });
  });

  it('should be created', inject([GlobalPubSub], (service: GlobalPubSub) => {
    expect(service).toBeTruthy();
  }));
});
