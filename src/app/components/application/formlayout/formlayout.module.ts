import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormLayoutComponent } from './formlayout.component';
import { FormLayoutRoutingModule } from './formlayout-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { FileUploadModule } from 'primeng/fileupload';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { DividerModule } from 'primeng/divider';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormLayoutRoutingModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    RippleModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    FileUploadModule,
    CheckboxModule,
    InputSwitchModule,
    BlockViewerModule,
    DividerModule
  ],
  declarations: [
    FormLayoutComponent
  ]
})
export class FormLayoutModule {}
