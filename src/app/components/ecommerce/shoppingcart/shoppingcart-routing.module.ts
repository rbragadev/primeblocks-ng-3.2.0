import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ShoppingCartComponent} from './shoppingcart.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: ShoppingCartComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingCartRoutingModule {}
