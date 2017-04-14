import { TestBed, inject } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService]
    });
  });

  it('should ...', inject([UserService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
