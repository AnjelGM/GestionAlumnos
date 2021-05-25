export class Asignatura{
    private nombre:String;
    notaPrimerTrimestre:Number;
    notaSegundoTrimestre:Number;
    notaTercerTrimestre:Number;
    constructor(nombre:String){
        this.nombre = nombre;
        this.notaPrimerTrimestre = 0;
        this.notaSegundoTrimestre = 0;
        this.notaTercerTrimestre = 0;
    }
    getNombre():String{
        return this.nombre;
    }
}