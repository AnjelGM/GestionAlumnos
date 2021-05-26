import { Injectable } from '@angular/core';
import { Alumno } from './alumno';
import { alumnos } from './alumnos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  constructor() { }
  getAlumnos(): Observable<Alumno[]>{
    let alumnos2 = of(alumnos);
    return alumnos2;
  }
  getAlumno(nombre: String): Observable<Alumno>{
    const alumno = alumnos.find(a => a.nombre === nombre)!;
    return of(alumno);
  }
  setAlumno(alumno:Alumno):void{
    alumnos.push(alumno);
  }
  getAlumnoCurso(curso:Number): Observable<Alumno[]>{
    let alumnos2:Alumno[] = [];
    for(let count = 0;count < alumnos.length;count++){
      if(alumnos[count].curso === curso){
        alumnos2.push(alumnos[count]);
      }
    }
    return of(alumnos2);
  }
}
