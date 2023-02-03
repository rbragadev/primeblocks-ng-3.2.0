import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SlideOverComponent} from './slideover.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: SlideOverComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SlideOverRoutingModule {}
