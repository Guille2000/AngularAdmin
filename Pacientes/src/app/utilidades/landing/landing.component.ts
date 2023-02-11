import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Paciente } from 'src/app/interfaces/registro';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PacientesService } from 'src/app/services/pacientes.service';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(
    private localStorage: LocalStorageService,
    public dialog: MatDialog
  ) {}
  listadoPacientes: Paciente[] = [];
  pacienteEditar: Paciente | undefined;

  ngOnInit(): void {
    if (localStorage.getItem('paciente')) {
      this.listadoPacientes = JSON.parse(localStorage.getItem('paciente')!);
    }
  }

  guardarPaciente(paciente: Paciente) {
    this.listadoPacientes.push(paciente);
    this.localStorage.guardarItem(this.listadoPacientes);
  }
  editarPaciente(paciente: Paciente) {
    this.listadoPacientes = this.listadoPacientes.map((pacientes) =>
      pacientes.id == paciente.id ? paciente : pacientes
    );
    this.localStorage.guardarItem(this.listadoPacientes);
  }

  borrado(id: number) {
    this.listadoPacientes = this.listadoPacientes.filter(
      (paciente) => paciente.id !== id
    );
    this.localStorage.guardarItem(this.listadoPacientes);
    this.pacienteEditar = undefined
  }

  editado(paciente: Paciente) {
    this.pacienteEditar = paciente;
  }
}
