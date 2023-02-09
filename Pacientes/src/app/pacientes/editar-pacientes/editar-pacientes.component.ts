import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Paciente } from 'src/app/interfaces/registro';
import { PacientesService } from 'src/app/services/pacientes.service';

@Component({
  selector: 'app-editar-pacientes',
  templateUrl: './editar-pacientes.component.html',
  styleUrls: ['./editar-pacientes.component.scss']
})
export class EditarPacientesComponent implements OnInit {

  editarPaciente!:FormGroup
  paciente!:any
  
  constructor(private activatedRoute:ActivatedRoute,
    private http:PacientesService,
    private formBuilder: FormBuilder,
    private router:Router){

  }


  ngOnInit(): void {

  }

}
