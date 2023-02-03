import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductQuickviewComponent} from './productquickview.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: ProductQuickviewComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductQuickviewRoutingModule {}
