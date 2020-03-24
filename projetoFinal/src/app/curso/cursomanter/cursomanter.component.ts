import { Component, OnInit} from '@angular/core';
import { Curso } from '../servico/curso';
import { CursoService } from '../servico/curso.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cursomanter',
  templateUrl: './cursomanter.component.html',
  styleUrls: ['./cursomanter.component.css']
})
export class CursomanterComponent implements OnInit {

  nomeCurso: string = '';
  curso: Curso = new Curso();
  operacao: string = 'Incluir';

  constructor(
    private routeActivated: ActivatedRoute,
    private cursoServico: CursoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.nomeCurso = this.routeActivated.snapshot.params.id;
    if(this.nomeCurso != null){
      this.operacao = 'Alterar';
      this.cursoServico.pesquisar(this.nomeCurso).subscribe(
        data => {
          this.curso = (<Curso[]>data)[0];
        }
      );
    }
  }

  incluir(){
    this.cursoServico.incluir(this.curso).subscribe(
      retorno => {        
        alert(retorno['mensagem']);
        this.voltar();
      }
    );


  }

  voltar(){
    this.router.navigate(['/curso']);
  }

}