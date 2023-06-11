import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FuncionarioService } from 'src/app/controller/funcionario.service';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.css']
})

export class FuncionarioComponent {
  vetFuncionarios: Funcionario[] = [];

  constructor(private funcionarioService: FuncionarioService) { }

  ngOnInit(): void {
    this.funcionarioService.getFuncionarios().subscribe(
      data => this.vetFuncionarios = data
    );
  }
}
