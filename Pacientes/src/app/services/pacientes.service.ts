import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environments';
import { Observable } from 'rxjs';
import { Paciente } from '../interfaces/registro';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  url = environment.apiBase


  constructor(private http: HttpClient) { }

  agregarPaciente(paciente:Paciente):Observable<Paciente>{
    return this.http.post<Paciente>(`${this.url}/agregar`, paciente)
  }

  eliminar(id:number){
    return this.http.delete(`${this.url}/eliminar?Id=${id}`)
  }

  editar(id: number, paciente:Paciente):Observable<Paciente>{
    return this.http.put<Paciente>(`${this.url}/editar?Id=${id}`, paciente)
  }
}
