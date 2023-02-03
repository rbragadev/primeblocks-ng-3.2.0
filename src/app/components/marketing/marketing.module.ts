import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingComponent } from './marketing.component';
import { MarketingRoutingModule } from './marketing-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MarketingRoutingModule
  ],
  declarations: [
    MarketingComponent
  ]
})
export class MarketingModule {}