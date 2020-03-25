import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <input [value]="email" (keyup.enter)="email= $event.target.value; onKeyUp()" />   
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />   

    `
})

export class CoursesComponent {
    title = "List of Course ";
    email="rana@eatlbd.com";
       onKeyUp() {
         console.log(this.email);
       }



    }
