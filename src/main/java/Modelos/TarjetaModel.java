/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Modelos;

public class TarjetaModel {
    int numero;
    String propietario;
    String vigencia;
    int cvv;

    public TarjetaModel() {
    }

    public TarjetaModel(int numero, String propietario, String vigencia, int cvv) {
        this.numero = numero;
        this.propietario = propietario;
        this.vigencia = vigencia;
        this.cvv = cvv;
    }

    public int getNumero() {
        return numero;
    }

    public void setNumero(int nuemero) {
        this.numero = nuemero;
    }

    public String getPropietario() {
        return propietario;
    }

    public void setPropietario(String propietario) {
        this.propietario = propietario;
    }

    public String getVigencia() {
        return vigencia;
    }

    public void setVigencia(String vigencia) {
        this.vigencia = vigencia;
    }

    public int getCvv() {
        return cvv;
    }

    public void setCvv(int cvv) {
        this.cvv = cvv;
    }
    
    
    
    
}
