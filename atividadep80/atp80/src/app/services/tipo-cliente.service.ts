
import { TipoCliente } from './../model/TipoCliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoClienteService {
  private url:string;

  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:8090/api/tipocliente';
   }

   create(tipoCliente : TipoCliente):Observable<string>{
      return this.httpClient.post(this.url, tipoCliente, {responseType: 'text'});
   }

   read():Observable<TipoCliente[]>{
      return this.httpClient.get<TipoCliente[]>(this.url);
   }
}
