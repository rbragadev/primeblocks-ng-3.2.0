import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {VerticalNavComponent} from './verticalnav.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: VerticalNavComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class VerticalNavRoutingModule {}
