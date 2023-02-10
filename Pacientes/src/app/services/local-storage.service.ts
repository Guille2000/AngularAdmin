import { Injectable } from '@angular/core';
import { Paciente } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  guardarItem(listadoPacientes: Paciente[]){
    localStorage.setItem('paciente', JSON.stringify(listadoPacientes))
  }

  getToken(token:string){
    localStorage.setItem('token', token)
  }
}
