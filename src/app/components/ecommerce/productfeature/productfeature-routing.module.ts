import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductFeatureComponent} from './productfeature.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ProductFeatureComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ProductFeatureRoutingModule { }
