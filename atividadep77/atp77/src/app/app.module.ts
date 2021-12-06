import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';
import { TpClienteListaComponent } from './tp-cliente-lista/tp-cliente-lista.component';
import { TpClienteCadastroComponent } from './tp-cliente-cadastro/tp-cliente-cadastro.component';
import { ClienteCadastroComponent } from './cliente-cadastro/cliente-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteListaComponent,
    TpClienteListaComponent,
    TpClienteCadastroComponent,
    ClienteCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
