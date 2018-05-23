import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesListService } from './courses-list.service';
import {Course} from './Course-model'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesListService,Course],
  bootstrap: [AppComponent]
})
export class AppModule { }
