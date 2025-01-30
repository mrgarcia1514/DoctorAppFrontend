import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'DoctorAppFrontend';
  Saludos = 'Hola Allan';

usuarios : any;

constructor(private http: HttpClient){


}
  ngOnInit(): void {
   this.http.get("http://localhost:5187/api/Usuario").subscribe({
    next:response => this.usuarios = response,
    error: error => console.log(error),
    complete: () => console.log(this.usuarios)
   })
  }


}
