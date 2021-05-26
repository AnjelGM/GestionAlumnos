import { Component, Input, OnInit } from '@angular/core';
import {Profesor} from '../profesor'
import {profesores} from '../profesores';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private router:Router
  ) { }
  @Input() nombre?:String;
  @Input() pass?:String;
  ngOnInit(): void {
    sessionStorage.removeItem("profesor");
  }

  login():void{
    debugger;
    let condicion1:boolean, condicion2:boolean;
    for(let count = 0;count < profesores.length;count++){
      condicion1 = profesores[count].nombre == this.nombre;
      condicion2 = profesores[count].contraseña == this.pass; 
      if(condicion1 && condicion2){
        let profesor:Profesor = profesores[count];
        sessionStorage.setItem("profesor", JSON.stringify(profesor));
        alert("bienvenido " + profesor.nombre);
        this.router.navigateByUrl("/alumno");
        break;
      }else if(count === profesores.length -1){
        alert("asdf");
      }
    }
  }
}