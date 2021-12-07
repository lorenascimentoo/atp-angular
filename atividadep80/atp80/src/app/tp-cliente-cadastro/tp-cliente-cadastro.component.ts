import { TipoCliente } from './../model/TipoCliente';
import { Component, OnInit } from '@angular/core';
import { TipoClienteService } from '../services/tipo-cliente.service';

@Component({
  selector: 'app-tp-cliente-cadastro',
  templateUrl: './tp-cliente-cadastro.component.html',
  styleUrls: ['./tp-cliente-cadastro.component.css']
})
export class TpClienteCadastroComponent implements OnInit {
  tipocliente = {} as TipoCliente;

  constructor(private tpcService : TipoClienteService) { }

  ngOnInit(): void {
  }

  salvar(){
   this.tpcService.create(this.tipocliente);
   this.limpar();
  }

  private limpar(){
    this.tipocliente = {} as TipoCliente;
  }
}
