import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {NotificationComponent} from './notification.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: NotificationComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class NotificationRoutingModule {}
