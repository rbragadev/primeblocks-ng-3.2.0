import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { DialogRoutingModule } from './dialog-routing.module';
import { DialogModule as ModalModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    ButtonModule,
    RippleModule,
    DropdownModule,
    CheckboxModule,
    InputTextModule,
    KeyFilterModule,
    RadioButtonModule,
    FormsModule,
    DialogRoutingModule,
    BlockViewerModule
  ],
  declarations: [
    DialogComponent
  ]
})
export class DialogModule {}
