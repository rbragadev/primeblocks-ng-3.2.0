import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StepsComponent} from './steps.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: StepsComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StepsRoutingModule {}
