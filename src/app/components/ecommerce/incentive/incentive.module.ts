import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IncentiveComponent } from './incentive.component';
import { IncentiveRoutingModule } from './incentive-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IncentiveRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    IncentiveComponent
  ]
})
export class IncentiveModule {}
