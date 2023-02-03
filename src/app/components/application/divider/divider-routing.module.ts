import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DividerComponent} from './divider.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: DividerComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DividerRoutingModule {}
