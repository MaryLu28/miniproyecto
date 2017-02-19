import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginSvc: LoginService) { 
    this.loginSvc.singIn();
  }

  ngOnInit() {
  }

}