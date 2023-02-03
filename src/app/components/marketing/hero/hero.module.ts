import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero.component';
import { HeroRoutingModule } from './hero-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    CommonModule,
    HeroRoutingModule,
    ButtonModule,
    RippleModule,
    BlockViewerModule,
    InputTextModule
  ],
  declarations: [
    HeroComponent
  ]
})
export class HeroModule {}