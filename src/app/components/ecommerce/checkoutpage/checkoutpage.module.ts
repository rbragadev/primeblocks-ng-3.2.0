import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { CheckoutPageRoutingModule } from './checkoutpage-routing.module';
import { CheckoutPageComponent } from './checkoutpage.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckoutPageRoutingModule,
    BlockViewerModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    InputNumberModule,
    CheckboxModule,
    StyleClassModule,
    DropdownModule
  ],
  declarations: [CheckoutPageComponent]
})
export class CheckoutPageModule { }
