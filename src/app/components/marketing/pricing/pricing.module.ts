import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingComponent } from './pricing.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  imports: [
    CommonModule,
    PricingRoutingModule,
    BlockViewerModule,
    ButtonModule,
    RippleModule,
    InputSwitchModule,
    RadioButtonModule,
    FormsModule
  ],
  declarations: [
    PricingComponent
  ]
})
export class PricingModule {}