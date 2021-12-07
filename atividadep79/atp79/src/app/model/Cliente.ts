import { TipoCliente } from './TipoCliente';
export interface Cliente{
  id:number,
  nome:string,
  cpf:string,
  tipoCliente:TipoCliente
}
