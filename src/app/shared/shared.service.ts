import { Sesion } from './../usuario/Interface/sesion';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { json } from 'stream/consumers';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _snackBar: MatSnackBar) { }

  mostrarAlerta(mensaje: string, tipo:string){

    this._snackBar.open(mensaje,tipo,{
      horizontalPosition: "end",
      verticalPosition: "top",
      duration: 4000
    })
  }

guardarSesion(Sesion: Sesion){

  localStorage.setItem("usuarioSesion",JSON.stringify(Sesion))
}


obtenerSesion(){

const sesionString = localStorage.getItem("usuarioSesion")
const usuarioToken = JSON.parse(sesionString!)

return usuarioToken ;

}

eliminarSesion(){
  localStorage.removeItem("usuarioSesion")
}

}
