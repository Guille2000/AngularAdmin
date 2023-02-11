import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/interfaces/registro';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.scss'],
})
export class CrearPacienteComponent implements OnChanges {

  crearForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    nombre: ['', [Validators.required]],
    nombrePropietario: ['', [Validators.required]],
    fechaAlta: ['', [Validators.required]],
    sintoma: ['', [Validators.required]]
  })

  editado: boolean = false;
  @Output() paciente = new EventEmitter<Paciente>();
  @Input() pacienteAEditar: Paciente | undefined;
  @Output() pacienteEditado = new EventEmitter<Paciente>();

  constructor(
    private formBuilder: FormBuilder,
    private http: PacientesService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const {pacienteAEditar} = changes 
    if(pacienteAEditar.currentValue?.id){
      this.crearForm.patchValue(this.pacienteAEditar!)
    }
  }

  guardarPaciente() {
    const paciente = {
      nombre: this.crearForm.value.nombre,
      nombrePropietario: this.crearForm.value.nombrePropietario,
      fechaAlta: this.crearForm.value.fechaAlta,
      email: this.crearForm.value.email,
      sintoma: this.crearForm.value.sintoma,
    };

    //pacienteeditar => no tenia valor asignado 

    if (this.pacienteAEditar?.id) {
      console.log(this.pacienteAEditar);

      this.http.editar(this.pacienteAEditar.id!, paciente).subscribe((data) => {
      
        this.pacienteEditado.emit(data);
        this.editado = true;
        setTimeout(() => {
          this.editado = false;
        }, 2000);
      });
    } else {
      this.http.agregarPaciente(paciente).subscribe((data) => {
        this.paciente.emit(data);
        this.crearForm.reset();
      });
    }
  }
}
