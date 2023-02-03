import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContainerComponent } from './listcontainer.component';
import { ListContainerRoutingModule } from './listcontainer-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ListContainerRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ListContainerComponent
  ]
})
export class ListContainerModule {}
