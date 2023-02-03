import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './panel.component';
import { PanelRoutingModule } from './panel-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    PanelRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    PanelComponent
  ]
})
export class PanelModule {}
