import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css']
})
export class ClienteCadastroComponent implements OnInit {
  id:number=0;
  nome:string="";
  cpf:string="";
  tipo_cliente_id:number=0;

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
  }
  salvar(){
    let cliente = {
      "id": this.id,
      "nome": this.nome,
      "cpf": this.cpf,
      "tipoCliente": {
        "id": this.tipo_cliente_id
      }
    }
    this.clienteService.create(cliente);
    this.limpar();
  }

  private limpar(){
    this.id=0;
    this.nome="";
    this.cpf="";
    this.tipo_cliente_id=0;
  }
}
