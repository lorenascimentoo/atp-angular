import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private lista:any[];
  constructor() {
    this.lista = [];
  }

  create(cliente:any):void{
    this.lista.push(cliente);
  }

  read():any[]{
    return this.lista;
  }
}
