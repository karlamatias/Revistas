/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelos;

public class PerfilModel {

    int idPerfil;
    String nombre;
    String etiqueta;
    String fechaNacimiento;
    String usuarioPerfil;

    public PerfilModel() {
    }

    public PerfilModel(int idPerfil, String nombre, String etiqueta, String fechaNacimiento, String usuarioPerfil) {
        this.idPerfil = idPerfil;
        this.nombre = nombre;
        this.etiqueta = etiqueta;
        this.fechaNacimiento = fechaNacimiento;
        this.usuarioPerfil = usuarioPerfil;
    }

    public int getIdPerfil() {
        return idPerfil;
    }

    public void setIdPerfil(int idPerfil) {
        this.idPerfil = idPerfil;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEtiqueta() {
        return etiqueta;
    }

    public void setEtiqueta(String etiqueta) {
        this.etiqueta = etiqueta;
    }

    public String getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(String fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getUsuarioPerfil() {
        return usuarioPerfil;
    }

    public void setUsuarioPerfil(String usuarioPerfil) {
        this.usuarioPerfil = usuarioPerfil;
    }
    
    

}
