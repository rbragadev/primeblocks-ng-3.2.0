import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StackedListComponent} from './stackedlist.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: StackedListComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StackedListRoutingModule {}
