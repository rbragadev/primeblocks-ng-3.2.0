import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionListComponent } from './descriptionlist.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ChipModule } from 'primeng/chip';
import { TagModule } from 'primeng/tag';
import { DescriptionListRoutingModule } from './descriptionlist-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ChipModule,
    TagModule,
    DescriptionListRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    DescriptionListComponent
  ]
})
export class DescriptionListModule {}
