import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreFrontComponent } from './storefront.component';

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path: '', component: StoreFrontComponent}
    ]
  )],
  exports: [RouterModule]
})
export class StoreFrontRoutingModule { }
