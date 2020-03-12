import { Component, OnInit } from '@angular/core';
import { Curso } from './servico/curso';
import { CursoService } from './servico/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(
    private cursoServico: CursoService
  ) { }

  ngOnInit(): void {
  }

  curso: Curso= new Curso();


  pesquisar(){

    this.cursoServico.pesquisar(this.curso.nome).subscribe(
      retorno => {
        console.log(retorno);
      }
    );
  }
  
  /* 
  vamos usar este alerta no curso.service.ts

  imprimir(){
    alert(this.curso.nome + '. ');
  }
*/
}
