import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SettingScreenComponent } from './settingscreen.component';
import { SettingScreenRoutingModule } from './settingscreen-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { InputTextModule } from 'primeng/inputtext'; 
import { InputTextareaModule } from 'primeng/inputtextarea'; 
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple'; 
import { DropdownModule } from 'primeng/dropdown'; 
import { FileUploadModule } from 'primeng/fileupload'; 
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SettingScreenRoutingModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DividerModule,
    RippleModule,
    MenuModule,
    AvatarModule,
    TableModule,
    DropdownModule,
    FileUploadModule,
    CheckboxModule,
    InputSwitchModule,
    StyleClassModule,
    BlockViewerModule
  ],
  declarations: [
    SettingScreenComponent
  ]
})
export class SettingScreenModule {}
