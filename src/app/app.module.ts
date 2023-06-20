import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { NavbarComponent } from './view/navbar/navbar.component';
import { MainPageComponent } from './view/main-page/main-page.component';
import { FuncionarioComponent } from './view/funcionario/funcionario.component';
import { FooterComponent } from './view/footer/footer.component';
import { HomeComponent } from './view/home/home.component';
import { CadastroComponent } from './view/cadastro/cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MainPageComponent,
    FuncionarioComponent,
    FooterComponent,
    HomeComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
