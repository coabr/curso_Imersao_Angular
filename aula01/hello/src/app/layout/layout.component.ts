import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  titulo: string= 'cabecalho works!';

  texto: string= 'Carol';  

  /* COMO CRIAMOS A CLASSE, ESSA PARTE ABAIXO NÃO É MAIS NECESSARIA
  codigo: string= '';

  nome: string= '';

  telefone: string= '';

  dataNascimento: string= '';

  endereco: string= '';

  bairro: string= '';

  cidade: string= '';

  estado: string= ''; */


  /* Declarando a classe Pessoa*/ 
  pessoa: Pessoa = new Pessoa();
  
  mostrar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  imprimir(){
    alert('Código: ' + this.pessoa.codigo + '. ' + 'Nome: '  + this.pessoa.nome + '. ' + 'Telefone: '  + this.pessoa.telefone + '. ' + 'Data de nascimento: '  + this.pessoa.dataNascimento + '. '+ 'Endereço: '  + this.pessoa.endereco + '. ' + 'Bairro: ' + this.pessoa.bairro + '. ' + 'Cidade: ' + this.pessoa.cidade + '. ' + 'Estado: ' + this.pessoa.estado + '. ');
  }

  invertermostrar(){
    this.mostrar = !this.mostrar
  }
}
