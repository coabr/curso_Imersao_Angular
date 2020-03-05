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

  listaPessoas: Pessoa[] = [
    { /* essa lista está escrita no mesmo estilo do JSON*/
      "codigo": "123",

      "nome": "Carolina Brito",

      "telefone": "81-982718884",

      "dataNascimento": "25/06/1993",

      "endereco": "Estrada do Encanamento",

      "bairro": "Casa Forte",

      "cidade": "Recife",

      "estado": "Pernambuco",

      "ativo": true,
    },

    {
      "codigo": "000",

      "nome": "abc",

      "telefone": "81-999999",

      "dataNascimento": "220/02/2003",

      "endereco": "Estrada do arraial",

      "bairro": "Casa Forte",

      "cidade": "Recife",

      "estado": "Pernambuco",

      "ativo": true,
    },
    {
      "codigo": "159",

      "nome": "xyz",

      "telefone": "81-9888889",

      "dataNascimento": "07/12/1703",

      "endereco": "Estrada do arraial",

      "bairro": "Casa Forte",

      "cidade": "Recife",

      "estado": "Pernambuco",
      
      "ativo": false,
    }


  ]

  

  constructor() { }

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
