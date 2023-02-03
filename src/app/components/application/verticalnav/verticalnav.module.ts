import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RippleModule } from 'primeng/ripple';
import { VerticalNavComponent } from './verticalnav.component';
import { VerticalNavRoutingModule } from './verticalnav-routing.module';
import { StyleClassModule } from 'primeng/styleclass';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    StyleClassModule,
    RippleModule,
    VerticalNavRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    VerticalNavComponent
  ]
})
export class VerticalNavModule {}
