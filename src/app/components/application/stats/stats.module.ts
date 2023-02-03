import { CalendarModule } from 'primeng/calendar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsComponent } from './stats.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { StatsRoutingModule } from './stats-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    StatsRoutingModule,
    ButtonModule,
    MenuModule,
    BlockViewerModule,
    CalendarModule
  ],
  declarations: [
    StatsComponent
  ]
})
export class StatsModule {}
