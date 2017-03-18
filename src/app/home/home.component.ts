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

  tiles = [
    { text: 'Demostrar', link:'/demostrar'},
    { text: 'Mi perfil', link: '/'},
    { text: 'Mis teoremas', link: '/'},
    { text: 'Mis predicados y definiciones', link: '/'},
    { text: 'Ayuda', link: '/' }
  ];

}
