import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from './login.service';
import { HeaderService } from '../shared/header/header.service';

@NgModule({
  providers: [
      LoginService,
      HeaderService
    ],
  exports: [
  ]
})
export class CoreModule { }
