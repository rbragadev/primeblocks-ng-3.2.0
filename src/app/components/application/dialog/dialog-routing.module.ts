import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DialogComponent} from './dialog.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: DialogComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DialogRoutingModule {}
