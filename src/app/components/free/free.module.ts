import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreeComponent } from './free.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox'; 
import { ChipModule } from 'primeng/chip'; 
import { BlockViewerModule } from '../blockviewer/blockviewer.module';
import { FreeRoutingModule } from './free-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    RippleModule,
    CheckboxModule,
    ChipModule,
    BlockViewerModule,
    FreeRoutingModule
  ],
  declarations: [
    FreeComponent
  ]
})
export class FreeModule { }