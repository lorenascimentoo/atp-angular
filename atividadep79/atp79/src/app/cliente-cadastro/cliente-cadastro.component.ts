import { Cliente } from './../model/Cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  cliente = {} as Cliente;

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
  }
  salvar(){
    this.clienteService.create(this.cliente);
    console.log(this.cliente);
    this.limpar();
  }

  private limpar(){
    this.cliente = {} as Cliente;
  }
}
