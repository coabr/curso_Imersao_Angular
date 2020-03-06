import { Component, OnInit } from '@angular/core';
import { Produto } from './produto';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  titulo: string = 'Cadastro de Produtos no Sistema';

  produto: Produto = new Produto();

  unidadeMedida: string[] = ["UN", "KG", "L", "M"]

  remover(produto) {
    this.listaProdutos = this.listaProdutos.filter(
      obj => obj !== produto);
  }

  listaProdutos: Produto[] = [{
    "codigo": "123",

    "nome": "beterraba",

    "descricao": "alimenticio",

    "dataValidade": new Date(),

    "quantidade": "2",

    "unidadeMedida": "UN"
  },
  {
    "codigo": "456",

    "nome": "pera",

    "descricao": "alimenticio",

    "dataValidade": new Date(),

    "quantidade": "67",

    "unidadeMedida": "KG"
  },
  {
    "codigo": "789",

    "nome": "suco de uva",

    "descricao": "alimenticio",

    "dataValidade": new Date(),

    "quantidade": "816",

    "unidadeMedida": "L"
  }
  ]


  constructor() { }

  ngOnInit(): void {
  }

  incluir() {
    this.listaProdutos.push(this.produto);
    this.produto = new Produto();
  }

}
