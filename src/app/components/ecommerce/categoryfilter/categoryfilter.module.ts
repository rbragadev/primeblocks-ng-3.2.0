import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import {SliderModule} from 'primeng/slider';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {BadgeModule} from 'primeng/badge';
import {MenuModule} from 'primeng/menu';
import {AccordionModule} from 'primeng/accordion';
import {InputNumberModule} from 'primeng/inputnumber';
import {MultiSelectModule} from 'primeng/multiselect';
import {ChipModule} from 'primeng/chip';
import {GalleriaModule} from 'primeng/galleria';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DividerModule} from 'primeng/divider';
import {StyleClassModule} from 'primeng/styleclass';
import {CategoryFilterComponent} from './categoryfilter.component';
import {CategoryFilterRoutingModule} from './categoryfilter-routing.module';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    BlockViewerModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    ChipModule,
    MenuModule,
    SliderModule,
    CheckboxModule,
    DividerModule,
    AccordionModule,
    InputTextModule,
    BadgeModule,
    ToggleButtonModule,
    FormsModule,
    StyleClassModule,
    InputNumberModule,
    MultiSelectModule,
    GalleriaModule,
    CategoryFilterRoutingModule
  ],
  declarations: [
    CategoryFilterComponent
  ],
})
export class CategoryFilterModule { }
