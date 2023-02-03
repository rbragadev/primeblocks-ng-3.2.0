import { Component } from '@angular/core';
import { AppConfig } from 'src/app/app.config';

@Component({
  templateUrl: './ecommerce.component.html'
})
export class EcommerceComponent {

  constructor(public appConfig: AppConfig) {}

}
