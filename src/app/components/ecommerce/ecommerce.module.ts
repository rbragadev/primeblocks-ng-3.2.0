import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceComponent } from './ecommerce.component';
import { EcommerceRoutingModule } from './ecommerce-routing.module';

@NgModule({
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ],
  declarations: [
    EcommerceComponent
  ]
})
export class EcommerceModule {}