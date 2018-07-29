import { Component, OnInit } from '@angular/core';
import { CourseNavigatorService } from '../services/CourseNavigatorService';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  modules = [];
  lessons = [];
  courseTitle;
  moduleTitle;
  courseId;
  moduleId;
  json;

  constructor(private courseNavigaorService : CourseNavigatorService) { }

  findAllCourses(){
    this.courseNavigaorService.findAllCourses()
      .then(courses => this.courses = courses);
  }
  getAllModulesForCourse(courseId){
    console.log(courseId);
    this.courseId = courseId;
    this.courseNavigaorService.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  getLessonsForModule(moduleId){
    this.moduleId = moduleId;
    alert(moduleId);
    this.courseNavigaorService.findAlLLessonsForModule(moduleId)
      .then(lessons => this.lessons = lessons);

  }

  addCourse(courseTitle){
    alert(courseTitle);
    this.courseNavigaorService.addCourse({title : courseTitle});
  }

  addModule(moduleTitle){
    this.courseNavigaorService.addModule(this.courseId,{title :moduleTitle});
  }

  addLesson(lessonTitle){
    this.courseNavigaorService.addLesson(this.moduleId,{title :lessonTitle});
  }

  ngOnInit() {
    this.findAllCourses();
  }


}
