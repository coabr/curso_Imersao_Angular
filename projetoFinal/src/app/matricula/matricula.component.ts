import { Component, OnInit } from '@angular/core';
import { Matricula } from './servico/matricula';
import { Aluno } from '../aluno/servico/aluno';
import { Router } from '@angular/router';
import { MatriculaService } from './servico/matricula.service';
import { AlunoService } from '../aluno/servico/aluno.service';

@Component({
  selector: 'app-matricula',
  templateUrl: './matricula.component.html',
  styleUrls: ['./matricula.component.css']
})
export class MatriculaComponent implements OnInit {


  matricula: Matricula = new Matricula();
  selecionado: Matricula;
  listaMatricula: Matricula[] = [];
  listaAluno: Aluno[] = [];


  constructor(
    private router: Router,
    private matriculaService: MatriculaService,
    private alunoService: AlunoService) { }

  ngOnInit(): void {
    
    this.alunoService.pesquisar('').subscribe(
    data => {
      this.listaAluno = <Aluno[]>data;
    }
  );

  let codigoAluno = '';
  if(this.matricula.aluno != null){
    codigoAluno = this.matricula.aluno.codigo;
  }

  this.matriculaService.pesquisar(codigoAluno).subscribe(
    data => {
      this.listaMatricula = <Matricula[]>data;

    }
  );
}

pesquisar(){

  let codigoAluno = '';
  if(this.matricula.aluno != null){
    codigoAluno = this.matricula.aluno.codigo;
  }

  this.matriculaService.pesquisar(codigoAluno).subscribe(
    data => {
      this.listaMatricula = <Matricula[]>data;

    }
  );   
}

incluir(){    
  this.router.navigate(['/matricula/incluir']);
}

alterar(){    
  this.router.navigate(['/matricula/alterar/'+this.selecionado.aluno.codigo]);
}

remover(){

  this.matriculaService.remover(this.selecionado).subscribe(
    data => {
      alert(data['mensagem']);
    }
  );
}

selecionar(valor){
  this.selecionado = valor;    
  }

}
