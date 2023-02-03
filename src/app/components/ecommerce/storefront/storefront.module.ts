import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { StyleClassModule } from 'primeng/styleclass';
import { StoreFrontComponent } from './storefront.component';
import { StoreFrontRoutingModule } from './storefront-routing.module';
import { DividerModule} from 'primeng/divider';

@NgModule({
  declarations: [StoreFrontComponent],
  imports: [
    CommonModule,
    FormsModule,
    BlockViewerModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    RippleModule,
    StyleClassModule,
    StoreFrontRoutingModule
  ]
})
export class StoreFrontModule { }
