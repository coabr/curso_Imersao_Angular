import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa/pessoa';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  titulo: string = 'Cadastro de Pessoas no Sistema';

  texto: string = 'Carol';

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

  listaEstados: string[] = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"]

  listaMunicipio: any[] = []

  /* Esse metodo abaixo é para carregar o município de acordo com o estado escolhido pelo usuário.
  Pesquisar mais sobre isso, nesse caso o lista.Municipio viria aqui dentro
  desse método */

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

  remover(pessoa){
    this.listaPessoas = this.listaPessoas.filter(
      obj => obj !== pessoa);

  }

  listaPessoas: Pessoa[] = [
    { /* essa lista está escrita no mesmo estilo do JSON*/
      "codigo": "123",

      "nome": "Carolina Brito",

      "telefone": "(81) 9 8271-8884",

      "dataNascimento": new Date(),

      "endereco": "Estrada do Encanamento",

      "bairro": "Casa Forte",

      "cidade": "Recife",

      "estado": "Pernambuco",

      "ativo": true,
    },

    {
      "codigo": "000",

      "nome": "Joaquim Andrade",

      "telefone": "(81) 9 9999-9999",

      "dataNascimento": new Date(),

      "endereco": "Estrada do arraial, 4000, ap 30",

      "bairro": "Casa Forte",

      "cidade": "Recife",

      "estado": "Pernambuco",

      "ativo": true,
    },
    {
      "codigo": "159",

      "nome": "xyz",

      "telefone": "(81) 9 8888-9989",

      "dataNascimento": new Date(),

      "endereco": "Estrada do armazem, 19, ap 33",

      "bairro": "Casa Forte",

      "cidade": "Recife",

      "estado": "Pernambuco",

      "ativo": false,
    }


  ]



  constructor() {

  }

  ngOnInit(): void {
  }

  imprimir() {
    alert('Código: ' + this.pessoa.codigo + '. '
      + '\nNome: ' + this.pessoa.nome + '. '
      + '\nTelefone: ' + this.pessoa.telefone + '. '
      + '\nData de nascimento: ' + this.pessoa.dataNascimento + '. '
      + '\nEndereço: ' + this.pessoa.endereco + '. '
      + '\nBairro: ' + this.pessoa.bairro + '. '
      + '\nCidade: ' + this.pessoa.cidade + '. '
      + '\nEstado: ' + this.pessoa.estado + '. ');
  }

  incluir() {
    this.listaPessoas.push(this.pessoa);
    this.pessoa = new Pessoa();
  }
  /* Removemos o botao inverter/mostrar (a mensagem surpresa)
invertermostrar() {
this.mostrar = !this.mostrar
}*/

}
