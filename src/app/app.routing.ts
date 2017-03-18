import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProveComponent } from './prove/prove.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'demostrar', component: ProveComponent }

    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
