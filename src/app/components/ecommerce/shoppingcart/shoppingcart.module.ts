import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shoppingcart.component';
import { ShoppingCartRoutingModule } from './shoppingcart-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { RippleModule } from 'primeng/ripple';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { CheckboxModule } from 'primeng/checkbox';
import { StyleClassModule } from 'primeng/styleclass';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    InputNumberModule,
    RippleModule,
    DialogModule,
    DropdownModule,
    DividerModule,
    CheckboxModule,
    StyleClassModule,
    ShoppingCartRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    ShoppingCartComponent
  ]
})
export class ShoppingCartModule {}
