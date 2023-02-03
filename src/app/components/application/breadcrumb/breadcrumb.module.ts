import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    BreadcrumbRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    BreadcrumbComponent
  ]
})
export class BreadcrumbModule {}
