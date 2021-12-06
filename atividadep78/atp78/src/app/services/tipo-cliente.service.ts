import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {
  private lista:any[];
  constructor() {
    this.lista = [];
   }

   create(tipoCliente : any):void{
      this.lista.push(tipoCliente);
   }

   read():any[]{
      return this.lista;
   }
}
