export class Comentario{

    comentario: String;
    revista: String;
    usuario: String;

    constructor(comentario: String, revista: String, usuario: String) {

   
        this.comentario = comentario;
        this.revista = revista;
        this.usuario = usuario;

    }


    get getComentario() {
        return this.comentario;
    }

    set setComentario(comentario: String) {
        this.comentario = comentario;
    }

    get getRevista() {
        return this.revista;
    }

    set setRevista(revista: String) {
        this.revista = revista;
    }

    get getUsuario() {
        return this.usuario;
    }

    set setUsuario(usuario: String) {
        this.usuario = usuario;
    }
}