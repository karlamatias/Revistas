import { EtiquetasEnum } from "./EtiquetasEnum";

export class Anuncio{

   
    nombre: String;
    costo: String;
    dias: number
    etiqueta: EtiquetasEnum;
    texto: String;
    imagen: String;
    video: String;
    fecha: String;

    constructor(nombre:String,costo:String, dias: number, etiqueta:EtiquetasEnum, texto: String, imagen: String, video: String, fecha: String) {;

         this.nombre = nombre;
         this.costo = costo;
         this.dias = dias;
         this.etiqueta = etiqueta;
         this.texto = texto;
         this.imagen = imagen;
         this.video = video;
         this.fecha = fecha;
     }

     get getNombre() {
        return this.nombre;
    }

    set setNombre(nombre: String) {
        this.nombre = nombre;
    }

    get getCosto() {
        return this.costo;
    }

    set setCosto(costo: String) {
        this.costo = costo;
    }

    get getDias() {
        return this.dias;
    }

    set setDias(dias: number) {
        this.dias = dias;
    }

    get getEtiqueta() {
        return this.etiqueta;
    }

    set setEtiqueta(etiqueta: EtiquetasEnum) {
        this.etiqueta= etiqueta;
    }

    get getTexto() {
        return this.texto;
    }

    set setTexto(texto: String) {
        this.texto = texto;
    }

    get getImagen() {
        return this.imagen;
    }

    set setImagen(imagen: String) {
        this.imagen = imagen;
    }

    get getVideo() {
        return this.video;
    }

    set setVideo(video: String) {
        this.video = video;
    }

    get getFecha() {
        return this.fecha;
    }

    set setFecha(fecha: String) {
        this.fecha = fecha;
    }

    }