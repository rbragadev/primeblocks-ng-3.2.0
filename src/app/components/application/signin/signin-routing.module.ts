import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SignInComponent} from './signin.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: SignInComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SignInRoutingModule {}
