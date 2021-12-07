import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private lista:Cliente[];
  constructor() {
    this.lista = [];
  }

  create(cliente:Cliente):void{
    this.lista.push(cliente);
  }

  read():Cliente[]{
    return this.lista;
  }
}
