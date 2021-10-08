import { CategoriaEnum } from "./Registrar/CategoriaEnum";

export class Revista{

    nombre: String;
    etiqueta: String;
    costo: String;
    fecha: String;
    descripcion: String
    autor: String
    categoria: CategoriaEnum;



    constructor(nombre:String, etiqueta:String, costo:String,fecha:String, descripcion:String, autor:String, categoria:CategoriaEnum) {;
        this.nombre = nombre;
        this.etiqueta = etiqueta;
        this.costo = costo;
        this.fecha = fecha;
        this.descripcion = descripcion;
        this.autor = autor;
        this.categoria = categoria;
   
    }

    get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre: String) {
        this.nombre = nombre;
    }


    get getEtiqueta() {
        return this.etiqueta;
    }

    set setEtiqueta(etiqueta: String) {
        this.etiqueta= etiqueta;
    }

    get getCosto() {
        return this.costo;
    }

    set setCosto(costo: String) {
        this.costo = costo;
    }

    get getFecha() {
        return this.fecha;
    }

    set setFecha(fecha: String) {
        this.fecha = fecha;
    }

    get getDescripcion() {
        return this.descripcion;
    }

    set setDescripcion(descripcion: String) {
        this.descripcion = descripcion;
    }

    get getAutor() {
        return this.autor;
    }

    set setAutor(autor: String) {
        this.autor = autor;
    }

    get getCategoria() {
        return this.categoria;
    }

    set setCategoria(categoria: CategoriaEnum) {
        this.categoria = categoria;
    }
}