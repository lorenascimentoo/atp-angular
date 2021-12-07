import { TipoCliente } from './../model/TipoCliente';
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
  tipocliente = {} as TipoCliente;

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
  }
  salvar(){
    this.cliente.tipoCliente = this.tipocliente;
    this.clienteService.create(this.cliente).subscribe( (msg) => {
      alert(msg);
      this.limpar();
    }
    );
  }

  private limpar(){
    this.cliente = {} as Cliente;
    this.tipocliente = {} as TipoCliente;
  }
}
