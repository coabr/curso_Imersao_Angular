import { Component, OnInit } from '@angular/core';
import { MatriculaService } from '../servico/matricula.service';
import { CursoService } from 'src/app/curso/servico/curso.service';
import { AlunoService } from 'src/app/aluno/servico/aluno.service';
import { Router } from '@angular/router';
import { Matricula } from '../servico/matricula';
import { MatriculaCurso } from '../servico/matriculacurso';
import { Curso } from 'src/app/curso/servico/curso';
import { Aluno } from 'src/app/aluno/servico/aluno';

@Component({
  selector: 'app-matriculamanter',
  templateUrl: './matriculamanter.component.html',
  styleUrls: ['./matriculamanter.component.css']
})
export class MatriculamanterComponent implements OnInit {
  
  operacao: string = 'Incluir';
  matricula: Matricula = new Matricula();
  matriculaCurso: MatriculaCurso = new MatriculaCurso();
  listaCurso: Curso[] = [];
  listaAluno: Aluno[] = [];
  
  constructor(
    private router: Router,
    private matriculaService: MatriculaService,
    private cursoServico: CursoService,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {

    this.alunoService.pesquisar('').subscribe(
      data => {
        this.listaAluno = <Aluno[]>data;
      }
    );

    this.cursoServico.pesquisar('').subscribe(
      data => {
        this.listaCurso = <Curso[]>data;
      }
    );
  }

  voltar(){
    this.router.navigate(['/matricula']);
  }

  incluir(){
    this.matriculaService.incluir(this.matricula).subscribe(
      data => {
        alert(data['mensagem']);
        this.router.navigate(['/matricula']);        
      }
    );
  }

  adicionar(){

    this.matricula.listaMatriculaCurso.push(this.matriculaCurso);
    this.matriculaCurso = new MatriculaCurso();
  }

  removercurso(matriculaCurso){

    this.matricula.listaMatriculaCurso = this.matricula.listaMatriculaCurso.filter(obj => obj !== matriculaCurso);
  }

}
