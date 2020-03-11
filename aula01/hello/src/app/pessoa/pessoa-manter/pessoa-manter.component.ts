import { Pessoa } from './../Pessoa';
import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-pessoa-manter',
  templateUrl: './pessoa-manter.component.html',
  styleUrls: ['./pessoa-manter.component.scss']
})
export class PessoaManterComponent implements OnInit {

  titulo = 'Cadastro Pessoa';
  @Output('pessoaEnviar') pessoaEmitir: EventEmitter<Pessoa> = new EventEmitter();
  @Output('pessoaEnviarAlterar') pessoaEmitirAlterar: EventEmitter<Pessoa> = new EventEmitter();
  @Input() pessoa: Pessoa = new Pessoa();
  @Input()operacao: string = 'pesquisar';
  @Output()operacaoChange: EventEmitter<string> = new EventEmitter();
  
  listaEstados: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
  mostrar: boolean = false;
  listaPessoas: Pessoa[] = [
   { 
      "codigo": "01",
      "nome": "Carolina Brito",
      "telefone": "(81) 9 8271-8884",
      "dataNascimento": new Date(),
      "endereco": "Estrada do Encanamento",
      "bairro": "Casa Forte",
      "cidade": { codigo: "1", nomeCidade: "Recife" },
      "estado": "Pernambuco",
      "ativo": true,
    },

    {
      "codigo": "02",
      "nome": "Joaquim Andrade",
      "telefone": "(81) 9 9999-9999",
      "dataNascimento": new Date(),
      "endereco": "Estrada do arraial, 4000, ap 30",
      "bairro": "Casa Forte",
      "cidade": { codigo: "5", nomeCidade: "Garanhuns" },
      "estado": "Pernambuco",
      "ativo": true,
    },

    {
      "codigo": "03",
      "nome": "xyz",
      "telefone": "(81) 9 8888-9989",
      "dataNascimento": new Date(),
      "endereco": "Estrada do armazem, 19, ap 33",
      "bairro": "Casa Forte",
      "cidade":  { codigo: "4", nomeCidade: "Olinda" },
      "estado": "Pernambuco",
      "ativo": false,
    }
  ];
  listaMunicipios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  incluirPessoa() {
    this.pessoaEmitir.emit(this.pessoa);
    this.pessoa = new Pessoa();
    console.log(this.listaPessoas);
  }

  inverterMostrar() {
    this.mostrar = !this.mostrar;
  }

  carregarCidade() {
    switch (this.pessoa.estado) {
      case 'PE': {
        this.listaMunicipios = [
          {
            "codigo": "01",
            "nomeCidade": "Recife"
          }
        ]
        break;
      }
      case 'PE': {
        this.listaMunicipios = [
          {
            "codigo": "02",
            "nomeCidade": "Garanhuns"
          }
        ]
        break;
      }
      case 'PE': {
        this.listaMunicipios = [
          {
            "codigo": "04",
            "nomeCidade": "Olinda"
          }
        ]
        break;
      }
    }
  }




}
