export class Profesor{
    nombre: string;
    curso: number;
    contraseña:string;
    constructor(nombre:string, curso:number, contraseña:string){
        this.nombre = nombre;
        this.curso = curso;
        this.contraseña = contraseña;
    }
}