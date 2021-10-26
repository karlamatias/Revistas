export class Perfil {

    idPerfil: number;
    nombre: String;
    etiqueta: String;
    fechaNacimiento: String
    usuarioPerfil: String

    constructor(idPerfil: number, nombre: String, etiqueta: String, fechaNacimiento: String, usuarioPerfil: String) {
        this.nombre = nombre;
        this.etiqueta = etiqueta;
        this.fechaNacimiento = fechaNacimiento;
        this.usuarioPerfil = usuarioPerfil;
        this.idPerfil = idPerfil
    }

    get getNombre() {
        return this.nombre

    }

    set setNombre(nombre: String) {
        this.nombre = nombre;

    }

    get getEtiqueta() {
        return this.etiqueta

    }

    set setEtiqueta(etiqueta: String) {
        this.etiqueta = etiqueta;

    }

    get getFechaNacimiento() {
        return this.fechaNacimiento

    }

    set setFechaNacimiento(fechaNacimiento: String) {
        this.fechaNacimiento = fechaNacimiento;

    }

    get getUsuarioPerfil() {
        return this.usuarioPerfil

    }

    set setUsuarioPerfil(usuarioPerfil: String) {
        this.usuarioPerfil = usuarioPerfil;

    }

    get getIdPerfil() {
        return this.usuarioPerfil

    }

    set setIdPerfil(idPerfil: number) {
        this.idPerfil = idPerfil;

    }

}