import { Component } from '@angular/core';

@Component({
    templateUrl: './documentation.component.html',
    styles: [`
        :host ::ng-deep i {
        background-color: var(--surface-card);
        color: #2196f3;
        font-family: Monaco,courier,monospace;
        font-style: normal;
        font-size: 12px;
        font-weight: 500;
        padding: 2px 4px;
        letter-spacing: .5px;
        border-radius: 3px;
        font-weight: 600;
        margin: 0 2px;
        }
  `]
})
export class DocumentationComponent {

}
