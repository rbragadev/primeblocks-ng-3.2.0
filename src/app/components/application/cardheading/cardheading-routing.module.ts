import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CardHeadingComponent} from './cardheading.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: CardHeadingComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CardHeadingRoutingModule {}
