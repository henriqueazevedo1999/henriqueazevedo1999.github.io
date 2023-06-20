import { Component } from '@angular/core';
import { CadastroService } from 'src/app/controller/cadastro.service';
import { Registro } from 'src/app/model/cadastro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent {
  registro: Registro = {
    id: 0,
    nome: '',
    departamento: '',
    endereco: '',
    email: ''
  };

  id: number = 0;
  nome: string = '';
  departamento: string = '';
  endereco: string = '';
  email: string = '';
  mensagem: string = '';
  mensagemCor: string = '';

  constructor(private cadastroService: CadastroService) { }

  consultar(): void {
    this.cadastroService.consultarRegistro(this.id).subscribe(
      (response) => {
        this.registro = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  excluir(): void {
    this.cadastroService.excluirRegistro(this.registro.id).subscribe(
      (response) => {
        this.mensagem = response.mensagem;
        this.mensagemCor = response.status === 'Ok' ? 'green' : 'red';
      },
      (error) => {
        console.log(error);
      }
    );
  }

  inserir(): void {
    const dados = {
      id: this.id,
      nome: this.nome,
      departamento: this.departamento,
      endereco: this.endereco,
      email: this.email
    };

    this.cadastroService.inserirRegistro(dados).subscribe(
      (response) => {
        this.mensagem = response.mensagem;
        this.mensagemCor = response.status === 'Ok' ? 'green' : 'red';
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
