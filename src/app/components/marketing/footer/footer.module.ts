import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer.component';
import {FooterRoutingModule} from './footer-routing.module';
import {BlockViewerModule} from '../../blockviewer/blockviewer.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from "primeng/button";
import {RippleModule} from 'primeng/ripple';
import {DividerModule} from 'primeng/divider';

@NgModule({
  imports: [
    CommonModule,
    FooterRoutingModule,
    BlockViewerModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    RippleModule
  ],
  declarations: [
    FooterComponent
  ]
})
export class FooterModule {
}
