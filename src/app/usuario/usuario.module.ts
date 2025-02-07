import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosServicioService } from './Servicios/usuarios-servicio.service';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '../material/material.module';

import { } from '../material/material.module';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,SharedModule,MaterialModule
  ],
  exports:[
    LoginComponent
  ],
  providers : [
    UsuariosServicioService
  ]
})
export class UsuarioModule { }
