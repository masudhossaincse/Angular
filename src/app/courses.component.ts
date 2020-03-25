import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
           {{ course.title | lowercase }} <br/>
           {{ course.students | number }} <br/>
           {{ course.rating |number:'1.2-2' }} <br/>
           {{ course.price | currency:'BDT  ':true }} <br/>
           {{ course.releaseDate | date:shortDate }} <br/>
 
    `
})

export class CoursesComponent {
    course = {
        title: "The Complete Angular Course",
        rating: 4.9,
        students: 567567,
        price: 5678,
        releaseDate: new Date(2020, 3, 3) 
    }



    }
