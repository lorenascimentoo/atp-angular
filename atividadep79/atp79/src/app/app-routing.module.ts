import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { TpClienteCadastroComponent } from './tp-cliente-cadastro/tp-cliente-cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TpClienteListaComponent } from './tp-cliente-lista/tp-cliente-lista.component';

const routes: Routes = [
  { path: 'cliente', component:ClienteListaComponent},
  { path: 'cliente/cadastro', component:ClienteCadastroComponent},
  { path: 'tipo-cliente',component: TpClienteListaComponent},
  { path: 'tipo-cliente/cadastro',component: TpClienteCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
