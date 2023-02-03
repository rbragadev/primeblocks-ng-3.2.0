import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CategoryPreviewComponent} from './categorypreview.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: CategoryPreviewComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CategoryPreviewRoutingModule { }