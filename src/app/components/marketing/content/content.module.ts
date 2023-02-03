import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRoutingModule } from './content-routing.module';
import { TagModule } from 'primeng/tag';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { BadgeModule } from 'primeng/badge';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    TagModule,
    BlockViewerModule,
    BadgeModule,
    DividerModule,
    ButtonModule
  ],
  declarations: [
    ContentComponent
  ]
})
export class ContentModule {}
