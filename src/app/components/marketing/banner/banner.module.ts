import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { BannerRoutingModule } from './banner-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    BannerRoutingModule,
    BlockViewerModule,
    RippleModule
  ],
  declarations: [
    BannerComponent
  ]
})
export class BannerModule {}