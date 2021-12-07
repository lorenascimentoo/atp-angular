import { Component, OnInit } from '@angular/core';
import { TipoClienteService } from '../services/tipo-cliente.service';

@Component({
  selector: 'app-tp-cliente-lista',
  templateUrl: './tp-cliente-lista.component.html',
  styleUrls: ['./tp-cliente-lista.component.css']
})
export class TpClienteListaComponent implements OnInit {
  lista:any[];

  constructor(private tpcService: TipoClienteService) {
    this.lista=[];
    this.listar();
   }

  ngOnInit(): void {
  }

  private listar(){
    this.lista = this.tpcService.read();
    console.log(this.lista);
  }
}
