import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShoppingCartPageComponent } from './shoppingcartpage.component';

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path: '', component: ShoppingCartPageComponent}
    ]
  )],
  exports: [RouterModule]
})
export class ShoppingCartPageRoutingModule { }
