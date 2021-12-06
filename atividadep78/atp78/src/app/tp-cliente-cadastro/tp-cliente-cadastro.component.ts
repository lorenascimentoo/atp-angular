import { Component, OnInit } from '@angular/core';
import { TipoClienteService } from '../services/tipo-cliente.service';

@Component({
  selector: 'app-tp-cliente-cadastro',
  templateUrl: './tp-cliente-cadastro.component.html',
  styleUrls: ['./tp-cliente-cadastro.component.css']
})
export class TpClienteCadastroComponent implements OnInit {
  id:number=0;
  status:string="";

  constructor(private tpcService : TipoClienteService) { }

  ngOnInit(): void {
  }

  salvar(){
    let tipoCliente = {
      "id": this.id,
      "status": this.status
    }
   this.tpcService.create(tipoCliente);
   this.limpar();
  }

  private limpar(){
    this.id=0;
    this.status="";
  }
}
