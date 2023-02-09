import { Component, EventEmitter, Output } from '@angular/core';
import { Paciente } from 'src/app/interfaces/registro';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

    pacienteBorrado:any
    listadoPacientes: Paciente[] = []

  agregarPaciente(paciente:Paciente){
    this.listadoPacientes.push(paciente)
  }

  borrado(id:number){
    console.log('Borrando...', id)
    this.pacienteBorrado = this.listadoPacientes.filter(paciente => paciente.id !== id)
    this.agregarPaciente(this.pacienteBorrado)
  }

}
