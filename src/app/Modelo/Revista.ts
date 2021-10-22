import { EtiquetasEnum } from "./EtiquetasEnum";
import { CategoriaEnum } from "./Registrar/CategoriaEnum";

export class Revista{

    nombre: String;
    etiqueta: EtiquetasEnum;
    costo: String;
    fechaCreacion: String;
    descripcion: String
    autor: String
    categoria: CategoriaEnum;



    constructor(nombre:String, etiqueta:EtiquetasEnum, costo:String,fecha:String, descripcion:String, autor:String, categoria:CategoriaEnum) {

        this.nombre = nombre;
        this.etiqueta = etiqueta;
        this.costo = costo;
        this.fechaCreacion = fecha;
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

    set setEtiqueta(etiqueta: EtiquetasEnum) {
        this.etiqueta= etiqueta;
    }

    get getCosto() {
        return this.costo;
    }

    set setCosto(costo: String) {
        this.costo = costo;
    }

    get getFechaCreacion() {
        return this.fechaCreacion;
    }

    set setFechaCreacion(fecha: String) {
        this.fechaCreacion = fecha;
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