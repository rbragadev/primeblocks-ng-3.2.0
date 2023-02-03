import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationComponent } from './application.component';
import { ApplicationRoutingModule } from './application-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ],
  declarations: [
    ApplicationComponent
  ]
})
export class ApplicationModule {}