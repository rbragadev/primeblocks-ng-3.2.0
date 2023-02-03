import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryPageComponent } from './categorypage.component';
import { CategoryPageRoutingModule } from './categorypage-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module'; 
import { DropdownModule } from 'primeng/dropdown';
import { StyleClassModule } from 'primeng/styleclass';
import { RippleModule } from 'primeng/ripple';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { InputNumberModule } from 'primeng/inputnumber';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  imports: [
    CommonModule,
    BlockViewerModule,
    FormsModule,
    ButtonModule,
    StyleClassModule,
    RippleModule,
    DropdownModule,
    MenuModule,
    BadgeModule,
    ToggleButtonModule,
    InputTextModule,
    MultiSelectModule,
    CheckboxModule,
    InputNumberModule,
    DividerModule,
    CategoryPageRoutingModule
  ],
  declarations: [CategoryPageComponent]
})
export class CategoryPageModule { }
