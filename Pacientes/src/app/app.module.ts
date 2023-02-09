import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { LandingComponent } from './utilidades/landing/landing.component';
import { EditarPacientesComponent } from './pacientes/editar-pacientes/editar-pacientes.component';
import { ListarPacienteComponent } from './pacientes/listar-paciente/listar-paciente.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    LandingComponent,
    EditarPacientesComponent,
    ListarPacienteComponent,
    CrearPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }