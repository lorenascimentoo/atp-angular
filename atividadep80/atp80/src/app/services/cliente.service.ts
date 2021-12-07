import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private url;

  constructor(private httpClient : HttpClient) {
    this.url = 'http://localhost:8090/api/cliente';
  }

  create(cliente:Cliente):Observable<string>{
    return this.httpClient.post(this.url,cliente,{responseType: 'text'});
  }

  read():Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this.url);
  }
}
