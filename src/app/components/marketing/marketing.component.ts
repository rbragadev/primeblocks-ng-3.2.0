import { Component } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Component({
  templateUrl: './marketing.component.html'
})
export class MarketingComponent {

  constructor(public appConfig: AppConfig) {}

}
