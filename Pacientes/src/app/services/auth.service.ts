import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Registro } from '../interfaces/registro';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url = environment.apiBase
  constructor(private http: HttpClient) { }


  registro(email:string, password:string):Observable<Registro>{
    return this.http.post<Registro>(`${this.url}/auth/crear`,{
      email, password
    })
  }

  login(email:string, password:string):Observable<Login>{
    return this.http.post<Login>(`${this.url}/auth/login`,{
      email, password
    })
    .pipe(
      tap(resp => {
        if(resp){
          localStorage.setItem('token', resp.token)
        }
      })
    )
  }

  
}
