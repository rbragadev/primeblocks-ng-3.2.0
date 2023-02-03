import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: FooterComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FooterRoutingModule {}
