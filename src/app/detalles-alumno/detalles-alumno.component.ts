import { Component, Input, OnInit } from '@angular/core';
import {Alumno} from '../alumno';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {AlumnoService} from '../alumno.service';
import {Asignatura} from '../asignatura';


@Component({
  selector: 'app-detalles-alumno',
  templateUrl: './detalles-alumno.component.html',
  styleUrls: ['./detalles-alumno.component.css']
})
export class DetallesAlumnoComponent implements OnInit {

  @Input() alumno?: Alumno;
  @Input() index: number = 0;

  constructor(
    private route: ActivatedRoute,
    private AlumnoService: AlumnoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void{
    const nombre = String(this.route.snapshot.paramMap.get('nombre'));
    this.AlumnoService.getAlumno(nombre).subscribe(alumno => this.alumno = alumno);
  }

  goBack():void{
    this.location.back();
  }
}
