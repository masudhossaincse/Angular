import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>
        <ul>
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>
        <img src="{{ imageUrl }}" /> 
        <img [src]="imageUrl" />
        <table>
            <tr>
                <td [attr.colspan]="colSpan"></td>
            </tr>
        </table>
        <button class="btn btn-primary">
            Testing
        </button>
    `
})

export class CoursesComponent {
        title = "List of Course ";
        courses = [
                   "course1",
                   "course2",
                   "course3"
                ];
        colSpan = 2;
        imageUrl = "https://homepages.cae.wisc.edu/~ece533/images/airplane.png";
    }