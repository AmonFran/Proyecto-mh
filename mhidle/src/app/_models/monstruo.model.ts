export class Monstruo {
    id: number;
    nombre: string;
    clase: string;
    elemento: string
    primeraAparicion: string

    constructor(id: number, nombre: string, clase: string, elemento: string, primeraAparicion: string) {
        this.id = id;
        this.nombre = nombre;
        this.clase = clase;
        this.elemento = elemento;
        this.primeraAparicion = primeraAparicion;
    }
}