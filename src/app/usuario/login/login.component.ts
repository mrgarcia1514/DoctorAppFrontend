import { error } from 'console';
import { SharedService } from './../../shared/shared.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlobOptions } from 'buffer';

import { UsuariosServicioService } from '../Servicios/usuarios-servicio.service';
import { Login } from '../Interface/login';
import { Sesion } from '../Interface/sesion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formlogin : FormGroup;
  ocultarPassword : boolean = true;
  mostrarLoading : boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private usuariosServicio : UsuariosServicioService,
              private SharedService : SharedService
  ){
    this.formlogin = this.fb.group({
      username : ['',Validators.required],
      password : ['',Validators.required],
    })


  }

    iniciarSesion(){

    this.mostrarLoading = true;
    const request: Login = {
      username: this.formlogin.value.username,
      password: this.formlogin.value.password

    }
    this.usuariosServicio.iniciarSesion(request).subscribe({

      next: (response: Sesion) => {
        this.SharedService.guardarSesion(response)
        this.router.navigate (['layout'])
      },
      complete:() =>{
        this.mostrarLoading=false;
      },
      error: (error) =>{
        this.SharedService.mostrarAlerta(error.error,'Error!')
        this.mostrarLoading=false;

      }
    })

    }
}
