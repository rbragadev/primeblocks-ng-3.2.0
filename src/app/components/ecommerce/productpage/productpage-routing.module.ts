import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductPageComponent } from './productpage.component';

@NgModule({
  imports: [RouterModule.forChild(
    [
      {path:'', component: ProductPageComponent}
    ]
  )],
  exports: [RouterModule]
})
export class ProductPageRoutingModule { }
