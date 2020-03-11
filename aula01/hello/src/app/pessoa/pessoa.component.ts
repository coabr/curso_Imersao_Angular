import { Component, OnInit, Input } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  titulo: string = 'Cadastro de Pessoas no Sistema';
  pessoa: Pessoa = new Pessoa();
  mostrar: boolean = false;
  listaEstados: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]
  listaMunicipio: any[] = []
  operacao: string = 'pesquisar';

  carregarCidade() {
    if (this.pessoa.estado == 'PE') {
      this.listaMunicipio = [
        { codigo: "1", nome: "Recife" }, { codigo: "4", nome: "Olinda" },
        { codigo: "5", nome: "Garanhuns" }, { codigo: "6", nome: "Belo Jardim" },];
    } else if (this.pessoa.estado == 'PB') {
      this.listaMunicipio = [
        { codigo: "2", nome: "Cabedelo" }];
    } else {
      this.listaMunicipio = [{ codigo: "3", nome: "Sao Paulo" },
      { codigo: "7", nome: "Navegantes" },
      { codigo: "8", nome: "abc" }];
    }
  }

  listaPessoas: Pessoa[] = 
  
  [
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
      "cidade": { codigo: "2", nomeCidade: "Garanhuns" },
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
      "cidade": { codigo: "4", nomeCidade: "Olinda" },
      "estado": "Pernambuco",
      "ativo": false,
    }
  ];
  
  constructor() {
  }

  ngOnInit(): void {
  }

  remover(pessoa) {
    this.listaPessoas = this.listaPessoas.filter(
      obj => obj !== pessoa);
  }

  adicionarPessoa(pessoa) {
    this.listaPessoas.push(pessoa);
  }

  incluir() {
    this.pessoa = new Pessoa();
    this.operacao = 'incluir';
  }

  alterar(pessoa) {
    this.pessoa = pessoa;
    this.operacao = 'alterar';
  }

  editarPessoa(pessoa) {
    this.pessoa = pessoa;
    console.log("pessoa para edição", pessoa);
  }
}
