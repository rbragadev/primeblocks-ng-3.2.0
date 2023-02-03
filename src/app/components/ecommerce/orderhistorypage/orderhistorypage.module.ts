import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { OrderHistoryPageRoutingModule } from './orderhistorypage-routing.module';
import { OrderHistoryPageComponent } from './orderhistorypage.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    CheckboxModule,
    DividerModule,
    InputTextModule,
    BlockViewerModule,
    OrderHistoryPageRoutingModule
  ],
  declarations: [OrderHistoryPageComponent]
})
export class OrderHistoryPageModule { }
