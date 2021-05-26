import {Asignatura} from './asignatura';

export class Alumno{
    nombre:string;
    edad:number;
    curso:number;
    asignaturas:Asignatura[];

    constructor(nombre:string, edad:number, curso:number){
        this.nombre = nombre;
        this.edad = edad;
        this.curso = curso;
        this.asignaturas = [];
        this.ponerAsignaturas(curso);
    }

    private ponerAsignaturas(curso:Number){
        switch (curso) {
            case 1:
                this.asignaturas.push(new Asignatura('Bases de datos'));
                this.asignaturas.push(new Asignatura('Sistemas informaticos'));
                this.asignaturas.push(new Asignatura('Programación'));
                this.asignaturas.push(new Asignatura('Inglés técnico'));
                this.asignaturas.push(new Asignatura('Entornos de desarrollo'));
                this.asignaturas.push(new Asignatura('Lenguajes de marcas'));
                break;
            case 2:
                this.asignaturas.push(new Asignatura('Acceso a datos'));
                this.asignaturas.push(new Asignatura('Desarrollo de interfaces'));
                this.asignaturas.push(new Asignatura('Programación multimedia y dispositivos móviles'));
                this.asignaturas.push(new Asignatura('Programación de servicios y procesos'));
                this.asignaturas.push(new Asignatura('Sistemas de gestión empresarial'));
                break;
            case 3:
                this.asignaturas.push(new Asignatura('Desarrollo web en un entorno cliente'));
                this.asignaturas.push(new Asignatura('Desarrollo web en entorno servidor'));
                this.asignaturas.push(new Asignatura('Diseño de interfaces web'));
                this.asignaturas.push(new Asignatura('Despliegue de aplicaciones web'));
                break;
        }
    }
}