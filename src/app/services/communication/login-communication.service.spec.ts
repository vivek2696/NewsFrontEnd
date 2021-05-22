import { TestBed } from '@angular/core/testing';

import { LoginCommunicationService } from './login-communication.service';

describe('LoginCommunicationService', () => {
  let service: LoginCommunicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
