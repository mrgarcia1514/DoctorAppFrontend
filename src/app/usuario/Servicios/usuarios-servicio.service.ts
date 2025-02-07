import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Login } from '../Interface/login';
import { Observable } from 'rxjs';
import { Sesion } from '../Interface/sesion';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServicioService {

  baseUrl: string = environments.apiUrl + "usuario/"
  constructor(private http: HttpClient) { }

  iniciarSesion(request: Login):Observable<Sesion>{
    return this.http.post<Sesion>(this.baseUrl+"login",request)
  }
}
