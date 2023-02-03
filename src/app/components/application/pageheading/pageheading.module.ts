import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeadingComponent } from './pageheading.component';
import { PageHeadingRoutingModule } from './pageheading-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { TagModule } from 'primeng/tag';
import { MenuModule } from 'primeng/menu';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  imports: [
    CommonModule,
    PageHeadingRoutingModule,
    ButtonModule,
    InputTextModule,
    MenuModule,
    AvatarGroupModule,
    AvatarModule,
    TagModule,
    RippleModule,
    BlockViewerModule
  ],
  declarations: [
    PageHeadingComponent
  ]
})
export class PageHeadingModule {}
