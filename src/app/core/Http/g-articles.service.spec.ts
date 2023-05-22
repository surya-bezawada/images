import { TestBed } from '@angular/core/testing';

import { GArticlesService } from './g-articles.service';

describe('GArticlesService', () => {
  let service: GArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
