export class Login {

    public usuario: String;
    public password: String;

    constructor(usuario: String, password: String) {
        this.usuario = usuario;
        this.password = password;


    }

    get getUsuario() {
        return this.usuario

    }

    set setUsuario(usuario: String) {
        this.usuario = usuario;

    }

    get getPassword() {
        return this.password

    }

    set setPassword(password: String) {
        this.password = password;

    }
}