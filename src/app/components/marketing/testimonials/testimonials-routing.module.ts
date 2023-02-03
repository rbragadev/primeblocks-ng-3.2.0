import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TestimonialsComponent} from './testimonials.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: TestimonialsComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class TestimonialsRoutingModule {}
