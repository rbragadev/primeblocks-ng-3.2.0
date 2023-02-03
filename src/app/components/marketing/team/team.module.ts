import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { TeamRoutingModule } from './team-routing.module';
import { ButtonModule} from 'primeng/button';
import { RippleModule} from 'primeng/ripple';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    ButtonModule,
    RippleModule,
    BlockViewerModule
  ],
  declarations: [
    TeamComponent
  ]
})
export class TeamModule {}