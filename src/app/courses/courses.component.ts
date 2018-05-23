import { Component, OnInit } from '@angular/core';
import { CoursesListService } from '../courses-list.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
  
})
export class CoursesComponent implements OnInit {

  courses:string[];
  constructor(courseList:CoursesListService) { 
   this.courses= courseList.getCourses();
  }

  ngOnInit() {
  }

}
