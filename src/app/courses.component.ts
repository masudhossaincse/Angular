import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <input #email (keyup.enter)="onKeyUp(email.value)" />   

    `
})

export class CoursesComponent {
    title = "List of Course ";
       onKeyUp(email) {
         console.log(email);
       }



    }
