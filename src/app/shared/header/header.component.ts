import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // constructor(private loginSvc: LoginService) { 
  //   this.loginSvc.signIn();
  // };

  constructor(private hideSvc: HeaderService) {
    this.hideSvc.hideToolbar(false);
  }

  ngOnInit() {
  }

}
