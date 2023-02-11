import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  registerForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]]
})

  constructor(private auth:AuthService, 
    private formBuilder: FormBuilder,
    private router:Router
    ){}


    registro(){
      const {email, password} = this.registerForm.value 
      this.auth.registro(email, password)
      .subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Cuenta creada',
          showConfirmButton: false,
          timer: 4000,
          text:'Redireccionando a login...'
        })
        this.router.navigate(['/login'])
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error[0].description}`,
        })
      } )
    }
}
