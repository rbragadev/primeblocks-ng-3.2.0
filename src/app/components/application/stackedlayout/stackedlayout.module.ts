import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackedLayoutComponent } from './stackedlayout.component';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { StackedLayoutRoutingModule } from './stackedlayout-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  imports: [
    CommonModule,
    StackedLayoutRoutingModule,
    StyleClassModule,
    InputTextModule,
    RippleModule,
    BlockViewerModule,
    BadgeModule
  ],
  declarations: [
    StackedLayoutComponent
  ]
})
export class StackedLayoutModule {}
