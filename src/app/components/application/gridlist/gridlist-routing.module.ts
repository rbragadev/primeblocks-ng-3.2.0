import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {GridListComponent} from './gridlist.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: GridListComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GridListRoutingModule {}
