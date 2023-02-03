import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {GalleriaModule} from 'primeng/galleria';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {DividerModule} from 'primeng/divider';
import {StyleClassModule} from 'primeng/styleclass';
import {ProductFeatureComponent} from './productfeature.component';
import {ProductFeatureRoutingModule} from './productfeature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    GalleriaModule,
    BlockViewerModule,
    ButtonModule,
    DividerModule,
    AccordionModule,
    StyleClassModule,
    ProductFeatureRoutingModule
  ],
  declarations: [ProductFeatureComponent]
})
export class ProductFeatureModule { }
