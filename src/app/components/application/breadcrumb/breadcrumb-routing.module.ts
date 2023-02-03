import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BreadcrumbComponent} from './breadcrumb.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: BreadcrumbComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class BreadcrumbRoutingModule {}
