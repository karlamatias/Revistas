import { tipoSuscripcion } from "./TipoSuscripcion";

export class Suscribir{

    codigo: number;
    fechaSuscripcion: String;
    costoSuscripcion: String;
    tipoSuscripcion: tipoSuscripcion;
    revista: String;
    tarjeta: number;
    usuarioSuscriptor: String;

    constructor(codigo: number, fechaSuscripcion: String, costoSuscripcion: String, tipoSuscripcion: tipoSuscripcion, revista: String, tarjeta: number, usuarioSuscriptor: String ) {
        this.codigo = codigo;
        this.fechaSuscripcion = fechaSuscripcion;
        this.costoSuscripcion = costoSuscripcion;
        this.tipoSuscripcion = tipoSuscripcion;
        this.revista = revista;
        this.tarjeta = tarjeta;
        this.usuarioSuscriptor = usuarioSuscriptor;
    }


    get getCodigo() {
        return this.codigo;

    }

    set setCodigo(codigo: number) {
        this.codigo = codigo;

    }

    get getFechaSuscripcion() {
        return this.fechaSuscripcion;

    }

    set setFechaSuscripcion(fechaSuscripcion: String) {
        this.fechaSuscripcion = fechaSuscripcion;

    }

    get getCostoSuscripcion() {
        return this.costoSuscripcion;

    }

    set setCostoSuscripcion(costoSuscripcion: String) {
        this.costoSuscripcion = costoSuscripcion;

    }

    get getTipoSuscripcion() {
        return this.tipoSuscripcion;

    }

    set setTipoSuscripcion(tipoSuscripcion: tipoSuscripcion) {
        this.tipoSuscripcion = tipoSuscripcion;

    }

    get getRevista() {
        return this.revista;

    }

    set setRevista(revista: String) {
        this.revista = revista;

    }

    get getTarjeta() {
        return this.tarjeta;

    }

    set setTarjeta(tarjeta: number) {
        this.tarjeta = tarjeta;

    }

    get getUsuarioSuscriptor() {
        return this.usuarioSuscriptor;

    }

    set setUsuarioSuscriptor(usuarioSuscriptor: String) {
        this.usuarioSuscriptor = usuarioSuscriptor;

    }

}