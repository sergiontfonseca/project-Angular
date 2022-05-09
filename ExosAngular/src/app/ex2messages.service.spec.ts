import { TestBed } from '@angular/core/testing';

import { Ex2messagesService } from './ex2messages.service';

describe('Ex2messagesService', () => {
  let service: Ex2messagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ex2messagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
