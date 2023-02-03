import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SidebarNavComponent} from './sidebarnav.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: SidebarNavComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SidebarNavRoutingModule {}
