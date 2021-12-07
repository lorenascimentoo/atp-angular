import { Component, OnInit } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {
  lista:Cliente[] = [];

  constructor(private clienteService : ClienteService) {
    this.listar();
  }

  ngOnInit(): void {
  }

  private listar(){
    this.lista = this.clienteService.read();
  }
}
