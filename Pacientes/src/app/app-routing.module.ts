import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AuthGuard } from './guard/auth.guard';
import { EditarPacientesComponent } from './pacientes/editar-pacientes/editar-pacientes.component';
import { LandingComponent } from './utilidades/landing/landing.component';

const routes: Routes = [
  {
    path:'', redirectTo: 'login', pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'registro', component:RegistroComponent
  },
  {
    path:'paciente/:id',
    component:EditarPacientesComponent
  },
  {
    path:'pacientes',
    component:LandingComponent,
    canActivate:[AuthGuard]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
