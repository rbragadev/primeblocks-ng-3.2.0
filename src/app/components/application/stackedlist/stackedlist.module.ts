import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StackedListComponent } from './stackedlist.component';
import { StackedListRoutingModule } from './stackedlist-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { RatingModule } from 'primeng/rating';
import { KnobModule } from 'primeng/knob';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StackedListRoutingModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    RatingModule,
    KnobModule,
    BlockViewerModule
  ],
  declarations: [
    StackedListComponent
  ]
})
export class StackedListModule {}
