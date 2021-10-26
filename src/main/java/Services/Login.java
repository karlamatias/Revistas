/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Services;

import Config.Conexion;
import Modelos.RegistrarseModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

/**
 *
 * @author karlamatias
 */
public class Login {
 
    
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    Conexion cn = new Conexion();
    int r;
    
    
     public RegistrarseModel Validar(String usuario, String password) {
        RegistrarseModel user = new RegistrarseModel();
        String consulta = "SELECT * FROM Usuario WHERE usuario = ? AND password = ?";
        con = cn.Conectar();
        try {
            con = cn.Conectar();
            ps = con.prepareStatement(consulta);
            ps.setString(1, usuario);
            ps.setString(2, password);
            rs = ps.executeQuery();
            //rs.next();
            while (rs.next()) {

                user.setUsuario(rs.getString("usuario"));
                user.setPassword(rs.getString("password"));
                user.setRol(rs.getString("rol"));
            }
        } catch (Exception e) {
        }
        return user;
    }
}
