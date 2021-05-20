import { TestBed } from '@angular/core/testing';

import { NewsTypeCommunicationService } from './news-type-communication.service';

describe('NewsTypeCommunicationService', () => {
  let service: NewsTypeCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsTypeCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
