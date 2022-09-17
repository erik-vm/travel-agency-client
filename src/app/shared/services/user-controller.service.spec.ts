import { TestBed } from '@angular/core/testing';

import {UserHttp} from '../../shared/services/user-http.service'

describe('UserControllerService', () => {
  let service: UserHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
