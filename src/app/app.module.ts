import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseNavigatorService } from './services/CourseNavigatorService';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    CourseNavigatorComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [CourseNavigatorService],
  bootstrap: [AppComponent],
})
export class AppModule { }
