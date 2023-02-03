import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsComponent } from './steps.component';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { StepsRoutingModule } from './steps-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    ProgressBarModule,
    StepsRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    StepsComponent
  ]
})
export class StepsModule {}
