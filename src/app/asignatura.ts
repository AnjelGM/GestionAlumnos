export class Asignatura{
    nombre:string;
    notaPrimerTrimestre:number;
    notaSegundoTrimestre:number;
    notaTercerTrimestre:number;
    constructor(nombre:string){
        this.nombre = nombre;
        this.notaPrimerTrimestre = 0;
        this.notaSegundoTrimestre = 0;
        this.notaTercerTrimestre = 0;
    }
    media():number{
        let resultado:number;
        resultado = this.notaPrimerTrimestre + this.notaSegundoTrimestre + this.notaTercerTrimestre;
        resultado = resultado/3;
        return resultado;
    }
}