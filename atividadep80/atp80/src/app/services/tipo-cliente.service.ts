import { TipoCliente } from './../model/TipoCliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {
  private lista:TipoCliente[] =[];
  constructor() {
   }

   create(tipoCliente : TipoCliente):void{
      this.lista.push(tipoCliente);
   }

   read():TipoCliente[]{
      return this.lista;
   }
}
