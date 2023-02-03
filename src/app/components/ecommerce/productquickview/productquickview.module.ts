import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductQuickviewComponent } from './productquickview.component';
import { ProductQuickviewRoutingModule } from './productquickview-routing.module';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { GalleriaModule } from 'primeng/galleria';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    GalleriaModule,
    DialogModule,
    ProductQuickviewRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ProductQuickviewComponent
  ]
})
export class ProductQuickviewModule {}
