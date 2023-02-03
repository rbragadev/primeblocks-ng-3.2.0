import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetailPageComponent } from './orderdetailpage.component';

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path: '', component: OrderDetailPageComponent}
    ]
  )],
  exports: [RouterModule]
})
export class OrderDetailPageRoutingModule { }
