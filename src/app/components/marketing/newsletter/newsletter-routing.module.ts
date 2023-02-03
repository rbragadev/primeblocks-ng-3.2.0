import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NewsletterComponent} from './newsletter.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: NewsletterComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class NewsletterRoutingModule {}
