import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoCloudComponent } from './logocloud.component';
import { LogoCloudRoutingModule } from './logocloud-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    LogoCloudRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    LogoCloudComponent
  ]
})
export class LogoCloudModule {}