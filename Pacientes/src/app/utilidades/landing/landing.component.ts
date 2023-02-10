import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Paciente } from 'src/app/interfaces/registro';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  constructor(private localStorage:LocalStorageService){
    
  }
    listadoPacientes: Paciente[] = []

    ngOnInit(): void {
      if(localStorage.getItem('paciente')){
        this.listadoPacientes = JSON.parse(localStorage.getItem('paciente')!) 
      }
    }

  agregarPaciente(paciente:Paciente){
    this.listadoPacientes.push(paciente)
    this.localStorage.guardarItem(this.listadoPacientes)
  }

  borrado(id:number){
    this.listadoPacientes = this.listadoPacientes.filter(paciente => paciente.id !==id)
    this.localStorage.guardarItem(this.listadoPacientes)
  }

}
