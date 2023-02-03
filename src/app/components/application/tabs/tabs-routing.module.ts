import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TabsComponent} from './tabs.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: TabsComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TabsRoutingModule {}
