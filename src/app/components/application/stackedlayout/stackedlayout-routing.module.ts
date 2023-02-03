import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StackedLayoutComponent} from './stackedlayout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: StackedLayoutComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StackedLayoutRoutingModule {}
