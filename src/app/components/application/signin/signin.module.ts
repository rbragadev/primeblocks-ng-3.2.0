import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './signin.component';
import { SignInRoutingModule } from './signin-routing.module';
import { BlockViewerModule } from '../../blockviewer/blockviewer.module';
import { InputTextModule } from 'primeng/inputtext'; 
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { CheckboxModule } from 'primeng/checkbox'; 

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SignInRoutingModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    DividerModule,
    RippleModule,
    CheckboxModule,
    BlockViewerModule
  ],
  declarations: [
    SignInComponent
  ]
})
export class SignInModule {}
