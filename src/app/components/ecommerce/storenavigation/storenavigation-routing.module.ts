import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {StoreNavigationComponent} from './storenavigation.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: StoreNavigationComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class StoreNavigationRoutingModule {}