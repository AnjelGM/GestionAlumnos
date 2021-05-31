import { Component, Input, OnInit } from '@angular/core';
import {Alumno} from '../alumno';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AlumnoService} from '../alumno.service';
import {Router} from '@angular/router';
import{Profesor} from '../profesor';

@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.component.html',
  styleUrls: ['./detalles-alumno.component.css', 'detalles.css']
})
export class DetallesAlumnoComponent implements OnInit {

  @Input() alumno?: Alumno;
  @Input() index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private AlumnoService: AlumnoService,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAlumno();
    if(sessionStorage.getItem("profesor")=== null){
      this.router.navigateByUrl("/login");
    }else{
      let profesor:Profesor;
      profesor = JSON.parse(sessionStorage.getItem("profesor")||"");
      if(profesor.curso !== this.alumno?.curso){
        this.router.navigateByUrl("/alumno");
      }
    }
  }

  getAlumno(): void{
    const nombre = String(this.route.snapshot.paramMap.get('nombre'));
    this.AlumnoService.getAlumno(nombre).subscribe(alumno => this.alumno = alumno);
  }

  goBack():void{
    this.location.back();
  }
}
