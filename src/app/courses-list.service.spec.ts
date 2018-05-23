import { TestBed, inject } from '@angular/core/testing';

import { CoursesListService } from './courses-list.service';

describe('CoursesListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesListService]
    });
  });

  it('should be created', inject([CoursesListService], (service: CoursesListService) => {
    expect(service).toBeTruthy();
  }));
});
