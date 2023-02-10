import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paciente } from 'src/app/interfaces/registro';
import { PacientesService } from 'src/app/services/pacientes.service';
@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.scss']
})
export class ListarPacienteComponent {
  constructor(private http:PacientesService){}

  @Input() paciente!:Paciente[]
  @Output() borrado = new EventEmitter<number>()
  @Output() editado = new EventEmitter<Paciente>()

  eliminar(id:number){
    this.http.eliminar(id)
    .subscribe(() => this.borrado.emit(id))
  }
  editar(paciente:Paciente){
    this.editado.emit(paciente)
  }

}
