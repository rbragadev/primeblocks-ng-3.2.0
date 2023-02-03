import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReviewComponent} from './review.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: ReviewComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ReviewRoutingModule {}
