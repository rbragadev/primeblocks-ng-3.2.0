import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductOverviewComponent } from './productoverview.component';
import { ProductOverviewRoutingModule } from './productoverview-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabViewModule } from 'primeng/tabview';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    DropdownModule,
    GalleriaModule,
    TabViewModule,
    InputNumberModule,
    AccordionModule,
    ProductOverviewRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ProductOverviewComponent
  ]
})
export class ProductOverviewModule {}
