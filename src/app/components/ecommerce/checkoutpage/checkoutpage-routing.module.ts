import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutPageComponent } from './checkoutpage.component';

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path: '', component: CheckoutPageComponent}
    ]
  )],
  exports: [RouterModule]
})
export class CheckoutPageRoutingModule { }
