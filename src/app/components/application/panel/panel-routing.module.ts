import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PanelComponent} from './panel.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: PanelComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PanelRoutingModule {}
