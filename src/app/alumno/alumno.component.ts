import { Component, Input, OnInit } from '@angular/core';
import {Alumno} from '../alumno';
import {AlumnoService} from '../alumno.service';
import {Profesor} from '../profesor';
import {Router} from '@angular/router'
import { alumnos } from '../alumnos';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  @Input() nombre:string;
  @Input() edad:number;
  alumnos:Alumno[] = [];
  constructor(
    private alumnoService: AlumnoService,
    private router: Router,
    
    ) { this.nombre =""; this.edad = 0}

  ngOnInit(): void {
    this.getAlumnoCurso();
  }
  getAlumnoCurso():void{
    let cadena:string = sessionStorage.getItem("profesor")||"";
    let profesor:Profesor = JSON.parse(cadena);
    this.alumnoService.getAlumnoCurso(profesor.curso).subscribe(alumnos => this.alumnos = alumnos);
    this.alumnos = this.alumnos.sort((a ,b) => a.nombre.localeCompare(b.nombre));
  }
  crearAlumno():void{
    if(this.comprobarAlumno()){
      let cadena:string = sessionStorage.getItem("profesor")||"";
      let profesor:Profesor = JSON.parse(cadena);
      let alumno:Alumno = new Alumno(this.nombre, this.edad , profesor.curso);
      this.alumnoService.setAlumno(alumno);
      this.getAlumnoCurso();
    }else{
      alert("El alumno ya existe");
    }
    
  }
  cerrarSesion():void{
    sessionStorage.removeItem("profesor");
    this.router.navigateByUrl("/login");
  }
  comprobarAlumno():boolean{
    for(let count = 0;count < alumnos.length;count++){
      if(alumnos[count].nombre == this.nombre){
        return false;
      }
    }
    return true;
  }
}