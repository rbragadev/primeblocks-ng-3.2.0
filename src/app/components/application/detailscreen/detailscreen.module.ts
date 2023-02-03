import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DetailScreenComponent } from './detailscreen.component';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { AvatarModule } from 'primeng/avatar';
import { DetailScreenRoutingModule } from './detailscreen-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CalendarModule } from 'primeng/calendar';
import { DataViewModule } from 'primeng/dataview';
import { SelectButtonModule } from 'primeng/selectbutton';
import { RatingModule } from 'primeng/rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StyleClassModule,
    ButtonModule,
    SelectButtonModule,
    RatingModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    DataViewModule,
    RippleModule,
    TabMenuModule,
    TagModule,
    AvatarModule,
    DetailScreenRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    DetailScreenComponent
  ]
})
export class DetailScreenModule {}
