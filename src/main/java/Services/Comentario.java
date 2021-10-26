/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Services;

import Config.Conexion;
import Modelos.ComentarioModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;


public class Comentario {
    
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    Conexion cn = new Conexion();
    int r;
    
    
    public int Comentar(ComentarioModel comentario) {
        String sql = "INSERT INTO Comentario (comentario, revista, usuario) VALUES (?,?,?)";

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.setString(1, comentario.getComentario());
            ps.setString(2, comentario.getRevista());
            ps.setString(3, comentario.getUsuario());
         

            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Comentario.class.getName()).log(Level.SEVERE, null, ex);
        }
        return r;
    }
    
}
