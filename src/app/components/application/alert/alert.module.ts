import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { RippleModule } from 'primeng/ripple';
import { AlertRoutingModule } from './alert-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    RippleModule,
    AlertRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    AlertComponent
  ]
})
export class AlertModule {}
