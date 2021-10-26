/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelos;

public class ComentarioModel {

    int numeroComentario;
    String comentario;
    String revista;
    String usuario;

    public ComentarioModel() {
    }

    public ComentarioModel(int numeroComentario, String comentario, String revista, String usuario) {
        this.numeroComentario = numeroComentario;
        this.comentario = comentario;
        this.revista = revista;
        this.usuario = usuario;
    }

   

    public int getNumeroComentario() {
        return numeroComentario;
    }

    public void setNumeroComentario(int numeroComentario) {
        this.numeroComentario = numeroComentario;
    }

    public String getComentario() {
        return comentario;
    }

    public void setComentario(String comentario) {
        this.comentario = comentario;
    }

    
    
    public String getRevista() {
        return revista;
    }

    public void setRevista(String revista) {
        this.revista = revista;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }
    
    

}
