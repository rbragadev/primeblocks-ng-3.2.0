import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './pagenotfound.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: PageNotFoundComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundRoutingModule {}
