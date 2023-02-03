import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PromoSectionComponent} from './promosection.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: PromoSectionComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class PromoSectionRoutingModule {}
