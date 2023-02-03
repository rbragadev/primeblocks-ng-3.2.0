import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FeedComponent} from './feed.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: FeedComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class FeedRoutingModule {}
