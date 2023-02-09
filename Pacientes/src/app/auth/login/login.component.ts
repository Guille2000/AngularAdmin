import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private auth:AuthService, 
    private formBuilder: FormBuilder,
    private router:Router){ }

    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      })
    }

    login(){
      const {email, password} = this.loginForm.value 
      this.auth.login(email, password).subscribe(data => {
        Swal.fire({
          icon: 'success',
          title: 'Haz iniciado sesión correctamente',
          showConfirmButton: false,
          timer: 2500
        })
        this.router.navigate(['/pacientes'])
      }, (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error}`,
        })
      }
      )
    }
}
