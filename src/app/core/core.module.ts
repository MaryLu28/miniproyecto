import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginService } from './login.service';

@NgModule({
  providers: [
      LoginService
    ],
  exports: [
  ]
})
export class CoreModule { }
