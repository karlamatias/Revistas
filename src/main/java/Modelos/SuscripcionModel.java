/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelos;

import java.util.logging.Logger;


public class SuscripcionModel {
    
    int codigoSuscripcion;
    String fechaSuscripcion;
    Double costoSuscripcion;
    String tipoSuscripcion;
    String revista;
    int tarjeta;
    String usuarioSuscriptor;

    public SuscripcionModel() {
    }

    public SuscripcionModel(int codigoSuscripcion, String fechaSuscripcion, Double costoSuscripcion, String tipoSuscripcion, String revista, int tarjeta, String usuarioSuscriptor) {
        this.codigoSuscripcion = codigoSuscripcion;
        this.fechaSuscripcion = fechaSuscripcion;
        this.costoSuscripcion = costoSuscripcion;
        this.tipoSuscripcion = tipoSuscripcion;
        this.revista = revista;
        this.tarjeta = tarjeta;
        this.usuarioSuscriptor = usuarioSuscriptor;
    }

    public int getCodigoSuscripcion() {
        return codigoSuscripcion;
    }

    public void setCodigoSuscripcion(int codigoSuscripcion) {
        this.codigoSuscripcion = codigoSuscripcion;
    }

    public String getFechaSuscripcion() {
        return fechaSuscripcion;
    }

    public void setFechaSuscripcion(String fechaSuscripcion) {
        this.fechaSuscripcion = fechaSuscripcion;
    }

    public Double getCostoSuscripcion() {
        return costoSuscripcion;
    }

    public void setCostoSuscripcion(Double costoSuscripcion) {
        this.costoSuscripcion = costoSuscripcion;
    }

    public String getTipoSuscripcion() {
        return tipoSuscripcion;
    }

    public void setTipoSuscripcion(String tipoSuscripcion) {
        this.tipoSuscripcion = tipoSuscripcion;
    }

    public String getRevista() {
        return revista;
    }

    public void setRevista(String revista) {
        this.revista = revista;
    }

    public int getTarjeta() {
        return tarjeta;
    }

    public void setTarjeta(int tarjeta) {
        this.tarjeta = tarjeta;
    }

    public String getUsuarioSuscriptor() {
        return usuarioSuscriptor;
    }

    public void setUsuarioSuscriptor(String usuarioSuscriptor) {
        this.usuarioSuscriptor = usuarioSuscriptor;
    }
    
    
    
    
    
    
}
