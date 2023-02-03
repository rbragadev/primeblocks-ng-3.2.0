import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {DescriptionListComponent} from './descriptionlist.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: DescriptionListComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DescriptionListRoutingModule {}
