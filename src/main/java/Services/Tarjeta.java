/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Services;

import Config.Conexion;
import Modelos.RevistaModel;
import Modelos.TarjetaModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;


public class Tarjeta {
    
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    Conexion cn = new Conexion();
    int r;
    
     public int agregarTarjeta(TarjetaModel tarjeta) {
        String sql = "INSERT INTO TarjetaCD (numero, propietario, vigencia, CVV) VALUES (?,?,?,?)";

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.setLong(1, tarjeta.getNumero());
            ps.setString(2, tarjeta.getPropietario());
            ps.setString(3, tarjeta.getVigencia());
            ps.setInt(4, tarjeta.getCvv());
           
            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Tarjeta.class.getName()).log(Level.SEVERE, null, ex);
        }
        return r;
    }
}
