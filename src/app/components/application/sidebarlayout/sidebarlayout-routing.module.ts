import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SidebarLayoutComponent} from './sidebarlayout.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: SidebarLayoutComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SidebarLayoutRoutingModule {}
