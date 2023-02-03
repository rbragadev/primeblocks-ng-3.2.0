import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {MultiColumnLayoutComponent} from './multicolumnlayout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: MultiColumnLayoutComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class MultiColumnLayoutRoutingModule {}
