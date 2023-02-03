import { Component } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Component({
templateUrl: './home.component.html'
})
export class HomeComponent {

    constructor(public appConfig: AppConfig) {}

    viewBlocks(el: HTMLElement) {
        el.scrollIntoView({behavior: "smooth"});
    }
    
}
