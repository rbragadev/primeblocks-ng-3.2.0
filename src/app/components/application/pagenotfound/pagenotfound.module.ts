import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pagenotfound.component';
import { PageNotFoundRoutingModule } from './pagenotfound-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundRoutingModule,
    ButtonModule,
    RippleModule,
    BlockViewerModule
  ],
  declarations: [
    PageNotFoundComponent
  ]
})
export class PageNotFoundModule {}
