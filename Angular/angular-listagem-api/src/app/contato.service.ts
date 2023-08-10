import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
 
@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatosU = 'http://localhost:8080/cliente'
  contatosU2 = 'http://localhost:8080/cliente/3';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(this.contatosU); // Use template literal without $ sign
  }
  listar2(id: number): Observable<any> {
    return this.http.get<any>(`${this.contatosU}/${id}`); // Use template literal without $ sign
  }
  
}
