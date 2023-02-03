import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeadingComponent } from './cardheading.component';
import { CardHeadingRoutingModule } from './cardheading-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    CardHeadingRoutingModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
    MenuModule,
    BlockViewerModule
  ],
  declarations: [
    CardHeadingComponent
  ]
})
export class CardHeadingModule {}
