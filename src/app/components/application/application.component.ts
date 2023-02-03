import { Component } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Component({
  templateUrl: './application.component.html'
})
export class ApplicationComponent {

  constructor(public appConfig: AppConfig) {}

}
