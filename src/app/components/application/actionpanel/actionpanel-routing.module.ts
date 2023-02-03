import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ActionPanelComponent} from './actionpanel.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: ActionPanelComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class ActionPanelRoutingModule {}
