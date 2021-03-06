import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared';
import { CoreModule } from './core';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { ProveComponent } from './prove/prove.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    RouterModule,
    SharedModule,
    CoreModule,

    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
