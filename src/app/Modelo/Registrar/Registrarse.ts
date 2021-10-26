import { RolEnum } from "./RolEnum";

export class Registrarse {

    usuario: String;
    password: String;
    rol: RolEnum;

    constructor(usuario: String, password: String, rol: RolEnum) {
        this.usuario = usuario;
        this.password = password;
        this.rol = rol;

    }

    get getUsuario() {
        return this.usuario;

    }

    set setUsuario(usuario: String) {
        this.usuario = usuario;

    }

    get getPassword() {
        return this.password;

    }

    set setPassword(password: String) {
        this.password = password;

    }

    get getRol() {
        return this.rol;

    }

    set setRol(rol: RolEnum) {
        this.rol = rol;

    }
}