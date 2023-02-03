import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandMenuComponent } from './commandmenu.component';
import { CommandMenuRoutingModule } from './commandmenu-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CommandMenuRoutingModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    BlockViewerModule
  ],
  declarations: [
    CommandMenuComponent
  ]
})
export class CommandMenuModule {}
