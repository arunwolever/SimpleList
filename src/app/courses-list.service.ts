import { Injectable } from '@angular/core';
import {Course} from './Course-model'
@Injectable()
export class CoursesListService {
 courses:Course
  constructor(courses:Course) { 
    courses.ClassName="Mechanical Engineering";
    courses.Courses=["Maths","Science","English","Mechanical"];
    this.courses=courses;
  }
  getCourses()
  {
    return this.courses.Courses;
  }

}
