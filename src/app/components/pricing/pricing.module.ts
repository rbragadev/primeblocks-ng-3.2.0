import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { PricingComponent } from './pricing.component';
import { PricingRoutingModule } from './pricing-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PricingService } from './pricing.service';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    PricingRoutingModule,
    HttpClientModule
  ],
  providers: [PricingService],
  declarations: [
    PricingComponent
  ]
})
export class PricingModule { }