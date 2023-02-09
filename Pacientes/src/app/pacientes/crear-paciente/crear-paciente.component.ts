import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/interfaces/registro';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.scss']
})
export class CrearPacienteComponent  implements OnInit{
  
  crearForm!:FormGroup
  @Output() paciente = new EventEmitter<Paciente>()

  constructor(private formBuilder:FormBuilder, private http:PacientesService){}

  ngOnInit(): void {
    this.crearForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      nombrePropietario: ['', [Validators.required]],
      FechaAlta: ['', [Validators.required]],
      sintoma: ['', [Validators.required]],
    })
  }

  agregarPaciente(){
    const paciente = {
      
      nombre: this.crearForm.value.nombre,
      nombrePropietario: this.crearForm.value.nombrePropietario,
      FechaAlta: this.crearForm.value.FechaAlta,
      email: this.crearForm.value.email,
      sintoma: this.crearForm.value.sintoma,
    }
    this.http.agregarPaciente(paciente)
    .subscribe(data => {
      this.paciente.emit(data)
    })
  }


}
