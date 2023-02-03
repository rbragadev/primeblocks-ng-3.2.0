import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProductPageComponent } from './productpage.component';
import { ProductPageRoutingModule } from './productpage-routing.module';


@NgModule({
  imports: [
    CommonModule,
    ProductPageRoutingModule,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    BlockViewerModule,
    DropdownModule,
    GalleriaModule,
    TabViewModule,
    InputNumberModule,
    FormsModule,
    ProgressBarModule,
  ],
  declarations: [
    ProductPageComponent
  ]
})
export class ProductPageModule { }
