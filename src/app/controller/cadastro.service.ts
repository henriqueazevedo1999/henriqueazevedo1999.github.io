import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResult, Registro } from '../model/cadastro';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {
  private baseUrl = 'https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro';

  constructor(private http: HttpClient) {}

  consultarRegistro(id: number): Observable<Registro> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Registro>(url);
  }

  excluirRegistro(id: number): Observable<ApiResult> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<ApiResult>(url);
  }

  inserirRegistro(registro: Registro): Observable<ApiResult> {
    return this.http.put<ApiResult>(this.baseUrl, registro);
  }
}
