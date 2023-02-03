import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ListContainerComponent} from './listcontainer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: ListContainerComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ListContainerRoutingModule {}
