import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss']
})
export class CabecalhoComponent implements OnInit {

  tituloCabecalho: String = "Pessoa"
  
  constructor() { }

  ngOnInit(): void {
  }

}
