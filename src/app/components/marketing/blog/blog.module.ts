import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { ButtonModule} from 'primeng/button';
import { AvatarModule} from 'primeng/avatar';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    ButtonModule,
    AvatarModule,
    BlockViewerModule
  ],
  declarations: [
    BlogComponent
  ]
})
export class BlogModule {}