import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsletterComponent } from './newsletter.component';
import { NewsletterRoutingModule } from './newsletter-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    NewsletterRoutingModule,
    ButtonModule,
    RippleModule,
    BlockViewerModule,
    InputTextModule
  ],
  declarations: [
    NewsletterComponent
  ]
})
export class NewsletterModule {}
