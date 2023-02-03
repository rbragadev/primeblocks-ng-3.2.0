import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PromoSectionComponent } from './promosection.component';
import { PromoSectionRoutingModule } from './promosection-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { AvatarModule } from 'primeng/avatar';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    FormsModule,
    PromoSectionRoutingModule,
    BlockViewerModule,
    AvatarModule
  ],
  declarations: [
    PromoSectionComponent
  ]
})
export class ProductSectionModule {}
