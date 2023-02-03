import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DetailScreenComponent} from './detailscreen.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: DetailScreenComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DetailScreenRoutingModule {}
