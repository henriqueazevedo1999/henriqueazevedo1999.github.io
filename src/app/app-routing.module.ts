import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { FuncionarioComponent } from './view/funcionario/funcionario.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'funcionario', component: FuncionarioComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
