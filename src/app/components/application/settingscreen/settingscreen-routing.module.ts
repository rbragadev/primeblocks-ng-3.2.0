import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SettingScreenComponent} from './settingscreen.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'', component: SettingScreenComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class SettingScreenRoutingModule {}
