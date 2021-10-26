/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Services;

import Config.Conexion;
import Modelos.PerfilModel;
import Modelos.RegistrarseModel;
import Modelos.RevistaModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 *
 * @author karlamatias
 */
public class Perfil {

    private RegistrarseModel modeloR;
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    Conexion cn = new Conexion();
    int r;

    public int Agregar(PerfilModel perfil) {
        String sql = "INSERT INTO Perfil (nombre, etiqueta, fechaNacimiento, usuarioPerfil) VALUES (?,?,?,?)";

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.setString(1, perfil.getNombre());
            ps.setString(2, perfil.getEtiqueta());
            ps.setString(3, perfil.getFechaNacimiento());
            ps.setString(4, perfil.getUsuarioPerfil());

            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Perfil.class.getName()).log(Level.SEVERE, null, ex);
        }
        return r;
    }

    public List<PerfilModel> Listar() {
        List<PerfilModel> lista = new ArrayList<>();
        String sql = "SELECT * FROM Perfil";
        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                PerfilModel perfil = new PerfilModel();
                perfil.setNombre(rs.getString("nombre"));
                perfil.setEtiqueta(rs.getString("etiqueta"));
                perfil.setFechaNacimiento(rs.getString("fechaNacimiento"));
                perfil.setUsuarioPerfil(rs.getString("usuarioPerfil"));

                lista.add(perfil);

            }
        } catch (SQLException ex) {
            Logger.getLogger(Perfil.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lista;
    }

    public RevistaModel listarporAutor(String autor) {
        RevistaModel revista = new RevistaModel();
        String sql = "SELECT * FROM Revista WHERE autor=" + autor;
        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();

            while (rs.next()) {
                revista.setNombre(rs.getString(2));
                revista.setDescripcion(rs.getString(3));
            }
        } catch (SQLException ex) {
            Logger.getLogger(Revistas.class.getName()).log(Level.SEVERE, null, ex);
        }
        return revista;

    }

}
