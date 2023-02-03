import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IncentiveComponent} from './incentive.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: IncentiveComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class IncentiveRoutingModule {}
