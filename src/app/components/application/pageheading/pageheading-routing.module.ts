import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PageHeadingComponent} from './pageheading.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: PageHeadingComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PageHeadingRoutingModule {}
