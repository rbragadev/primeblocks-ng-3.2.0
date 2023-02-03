import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SectionHeadingComponent} from './sectionheading.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: SectionHeadingComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SectionHeadingRoutingModule {}
