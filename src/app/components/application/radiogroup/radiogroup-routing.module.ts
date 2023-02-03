import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RadioGroupComponent} from './radiogroup.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: RadioGroupComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RadioGroupRoutingModule {}
