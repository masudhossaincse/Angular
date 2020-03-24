import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <input (keyup.enter)="onKeyUp()" />   

    `
})

export class CoursesComponent {
    title = "List of Course ";
       onKeyUp() {
         console.log("Enter Was pressed");
       }



    }
