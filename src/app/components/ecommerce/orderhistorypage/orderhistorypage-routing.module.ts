import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderHistoryPageComponent } from './orderhistorypage.component';

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path: '', component: OrderHistoryPageComponent}
    ]
  )],
  exports: [RouterModule]
})
export class OrderHistoryPageRoutingModule { }
