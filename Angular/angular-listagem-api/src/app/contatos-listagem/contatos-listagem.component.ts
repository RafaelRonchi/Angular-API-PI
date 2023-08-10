import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-contatos-listagem',
  templateUrl: './contatos-listagem.component.html',
  styleUrls: ['./contatos-listagem.component.css']
})
export class ContatosListagemComponent implements OnInit {
  contatos: Array<any> | undefined;
  contato: any | undefined; // Change from array to single object

  constructor(private contatosService: ContatoService){}
  ngOnInit(): void {
    this.listar();
    this.listar2(3); // Replace with the desired ID
  }

  listar() {
    this.contatosService.listar().subscribe(res => this.contatos = res); // Fix typo "subscrible" and use "res" instead of "dados"
  }
  listar2(id: number) {
    this.contatosService.listar2(id).subscribe(res => this.contato = res); // Assign the single object
  }}
