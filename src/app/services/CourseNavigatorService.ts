let Course_API_URL = 'http://localhost:8080/api/course';
let MODULE_API_URL = 'http://localhost:8080/api/course/CID/module';
let LESSON_API_URL = 'http://localhost:8080/api/module/MID/lesson';

export class CourseNavigatorService {

    findAllCourses(){
        return fetch(Course_API_URL)
            .then(Response => Response.json());
    }

    findAllModulesForCourse(courseId){
        return fetch(MODULE_API_URL.replace('CID',courseId))
            .then(Response => Response.json())
    }

    findAlLLessonsForModule(moduleId){
        return fetch(LESSON_API_URL.replace('MID',moduleId))
            .then(Response => Response.json());
    }
    
    addCourse(course) {
        return fetch(Course_API_URL, {
            body: JSON.stringify(course),
            headers: {
               'Content-Type': 'application/json'
            },
            method: 'POST'
        }).then(function (response){
            return response.json();
        })
    }

    addModule(courseId, module){
        return fetch(MODULE_API_URL.replace('CID', courseId),{   
            body: JSON.stringify(module),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(function (response){
            return response.json(); 
        })
    }

    addLesson(moduleId,lesson){
        return fetch(LESSON_API_URL.replace('MID', moduleId),{   
            body: JSON.stringify(lesson),
            headers: { 'Content-Type': 'application/json' },
            method: 'POST'
        }).then(function (response){
            return response.json(); 
        })
    }

}