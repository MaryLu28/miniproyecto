import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prove',
  templateUrl: './prove.component.html',
  styleUrls: ['./prove.component.scss']
})
export class ProveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  methods = [
    { value: 1, name: "Método directo" },
    { value: 2, name: "Suposición del antcedente" },
    { value: 3, name: "Cnotradicción" },
  ];

  theorems = [
    { category: "Equevalencia", id: "1.1", theorem: "True === q === q" },
    { category: "Equevalencia", id: "1.2", theorem: "p === ~p === False" },
    { category: "Conjunción", id: "2.1", theorem: "p \\/ ~p" },
    { category: "Disyunción", id: "3.1", theorem: "p /\\ False === False" }
  ];

  definitios = [
    {  }
  ]

  

}
