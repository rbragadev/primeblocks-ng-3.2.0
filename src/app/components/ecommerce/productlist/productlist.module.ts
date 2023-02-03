import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './productlist.component';
import { ProductListRoutingModule } from './productlist-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    ProductListRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ProductListComponent
  ]
})
export class ProductListModule {}
