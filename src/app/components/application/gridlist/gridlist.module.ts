import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridListComponent } from './gridlist.component';
import { GridListRoutingModule } from './gridlist-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RatingModule } from 'primeng/rating';
import { MenuModule } from 'primeng/menu';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GridListRoutingModule,
    ButtonModule,
    RatingModule,
    RippleModule,
    MenuModule,
    BlockViewerModule
  ],
  declarations: [
    GridListComponent
  ]
})
export class GridListModule {}
