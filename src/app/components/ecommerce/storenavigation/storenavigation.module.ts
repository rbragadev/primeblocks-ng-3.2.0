import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { StoreNavigationComponent } from './storenavigation.component';
import { StoreNavigationRoutingModule } from './storenavigation-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BadgeModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    StyleClassModule,
    StoreNavigationRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    StoreNavigationComponent
  ]
})
export class StoreNavigationModule {}
