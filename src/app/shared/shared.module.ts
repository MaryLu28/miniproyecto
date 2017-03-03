import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    HeaderComponent],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class SharedModule { }
