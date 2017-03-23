import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../shared/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private headerSvc: HeaderService) { }

  ngOnInit() {
    this.headerSvc.hideToolbar(true);
  }

  titles = [
    { text: 'Demostrar', link: '/demostrar', icon:'playlist_add_check' },
    { text: 'Mi perfil', link: '/', icon: 'account_circle' },
    { text: 'Mis teoremas', link: '/', icon:'format_list_numbered' },
    { text: 'Mis predicados y definiciones', link: '/', icon:'folder' },
    { text: 'Ayuda', link: '/', icon:'help'  }
  ];

}
