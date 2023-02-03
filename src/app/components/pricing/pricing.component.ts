import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PricingService } from './pricing.service';

@Component({
  templateUrl: './pricing.component.html',
})
export class PricingComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  pricing: any;

  constructor(private pricingService: PricingService) {}
  
  ngOnInit(): void {
    this.subscription = this.pricingService.getPricing().subscribe((data) => {
      this.pricing = data;
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
