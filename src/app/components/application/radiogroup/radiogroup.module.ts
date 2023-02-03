import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RadioGroupComponent } from './radiogroup.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RadioGroupRoutingModule } from './radiogroup-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RadioGroupRoutingModule,
    RadioButtonModule,
    BlockViewerModule
  ],
  declarations: [
    RadioGroupComponent
  ]
})
export class RadioGroupModule {}
