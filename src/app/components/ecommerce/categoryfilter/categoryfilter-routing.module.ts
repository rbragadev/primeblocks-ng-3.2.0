import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CategoryFilterComponent} from './categoryfilter.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: CategoryFilterComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryFilterRoutingModule { }
