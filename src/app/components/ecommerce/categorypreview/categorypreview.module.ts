import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoryPreviewComponent} from './categorypreview.component';
import {CategoryPreviewRoutingModule} from './categorypreview-routing.module';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {RippleModule} from 'primeng/ripple';
import {CarouselModule} from 'primeng/carousel';

@NgModule({
  imports: [
    CommonModule,
    BlockViewerModule,
    RippleModule,
    CarouselModule,
    CategoryPreviewRoutingModule
  ],
  declarations: [
    CategoryPreviewComponent
  ]
})
export class CategoryPreviewModule { }
