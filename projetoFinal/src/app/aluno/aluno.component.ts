import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoService } from './servico/aluno.service';
import { Aluno } from './servico/aluno';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();
  listaAluno: Aluno[] = [];
  selecionado: Aluno;

  constructor(
    private router: Router,
    private alunoService: AlunoService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.alunoService.pesquisar(this.aluno.nome).subscribe(
      (retorno: Aluno[]) => {
        this.listaAluno = retorno;
      }
    );
  }

  selecionar(valor) {
    this.selecionado = valor;
  }

  incluir() {
    this.router.navigate(['/aluno/incluir']);
  }

  alterar() {
    this.router.navigate(['/aluno/alterar/' + this.selecionado.nome]);
  }

  remover() {
    alert(this.selecionado.nome);
    this.alunoService.remover(this.selecionado).subscribe(
      data => {
        alert(data['mensagem']);
      }
    );
  }



}
