import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SectionHeadingComponent } from './sectionheading.component';
import { SectionHeadingRoutingModule } from './sectionheading-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TabMenuModule } from 'primeng/tabmenu';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { SelectButtonModule } from 'primeng/selectbutton';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SectionHeadingRoutingModule,
    ButtonModule,
    SelectButtonModule,
    RippleModule,
    InputTextModule,
    TabMenuModule,
    BadgeModule,
    BlockViewerModule
  ],
  declarations: [
    SectionHeadingComponent
  ]
})
export class SectionHeadingModule {}
