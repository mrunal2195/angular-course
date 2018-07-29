import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  
  courseTitle;
  Courses = [
    {title : "DBMS", id : 1},
    {title : "web dev", id : 2},
    {title : "IR", id : 3},
    {title : "Data processing", id : 4},
  ]

  constructor() { }
  ngOnInit() {
  }

  deleteCourse(courseId){
    alert(courseId);
    this.Courses = this.Courses.filter(course => course.id != courseId);
  }

  addCourse(title){
    this.Courses.push({
      title: title, id:123
    })
    this.courseTitle='';
  }

}
