import { Component } from '@angular/core';

@Component({
    selector: 'courses',
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent]="title"></h2>
        <div (click)="onDivClicked()">
            
            <button (click)="onSave($event)">
                Testing
            </button>
        </div>

    `
})

export class CoursesComponent {
        title = "List of Course ";
        onDivClicked() {
            console.log("Div was cliked");
        }
        onSave($event) {
            $event.stopPropagation();

            console.log("Button was clicked", $event);
        }



    }
