import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container.component';
import { ContainerRoutingModule } from './container-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ContainerRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ContainerComponent
  ]
})
export class ContainerModule {}
