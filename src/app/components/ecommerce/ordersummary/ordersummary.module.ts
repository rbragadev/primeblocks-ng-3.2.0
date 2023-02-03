import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OrderSummaryComponent } from './ordersummary.component';
import { OrderSummaryRoutingModule } from './ordersummary-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    OrderSummaryRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    OrderSummaryComponent
  ]
})
export class OrderSummaryModule {}
