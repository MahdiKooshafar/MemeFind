import { TestBed } from '@angular/core/testing';

import { TelegramServiceService } from './telegram-service.service';

describe('TelegramServiceService', () => {
  let service: TelegramServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelegramServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
