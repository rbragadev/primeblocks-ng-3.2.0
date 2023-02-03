import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { RippleModule } from "primeng/ripple";
import { FooterRoutingModule } from './footer-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FooterRoutingModule,
    RippleModule,
    BlockViewerModule
  ],
  declarations: [
    FooterComponent
  ]
})
export class FooterModule {}
