/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Services;

import Config.Conexion;
import Modelos.RevistaModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Revistas {

    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    Conexion cn = new Conexion();
    int r;

    //agregar revista a la base de datos
    public int Publicar(RevistaModel re) {
        String sql = "INSERT INTO Revista (nombre, etiqueta, costo, fechaCreacion, categoria, autor, descripcion) VALUES (?,?,?,?,?,?,?)";

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.setString(1, re.getNombre());
            ps.setString(2, re.getEtiqueta());
            ps.setDouble(3, re.getCosto());
            ps.setString(4, re.getFecha());
            ps.setString(5, re.getCategoria());
            ps.setString(6, re.getAutor());
            ps.setString(7, re.getDescripcion());

            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Revistas.class.getName()).log(Level.SEVERE, null, ex);
        }
        return r;
    }

    public List<RevistaModel> Listar() {
        List<RevistaModel> lista = new ArrayList<>();
        String sql = "SELECT * FROM Revista";
        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                RevistaModel re = new RevistaModel();
                re.setNombre(rs.getString("nombre"));
                re.setDescripcion(rs.getString("descripcion"));
                re.setAutor(rs.getString("autor"));

                lista.add(re);

            }
        } catch (SQLException ex) {
            Logger.getLogger(Revistas.class.getName()).log(Level.SEVERE, null, ex);
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
                revista.setNombre(rs.getString(3));
                revista.setDescripcion(rs.getString(3));
            }
        } catch (SQLException ex) {
            Logger.getLogger(Revistas.class.getName()).log(Level.SEVERE, null, ex);
        }
        return revista;

    }

    //metodo para que los usuarios busquen las revistas que deseen.
    public List buscar(String texto) {

        List<RevistaModel> lista = new ArrayList<>();
        String sql = "SELECT * FROM Revista WHERE nombre like '%" + texto + "%' or etiqueta like '%" + texto + "%' or autor like '%" + texto + "%' or categoria like '%" + texto + "%' ";
        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                RevistaModel re = new RevistaModel();
                re.setNombre(rs.getString("nombre"));
                re.setEtiqueta(rs.getString("etiqueta"));
                re.setAutor(rs.getString("autor"));
                re.setCategoria(rs.getString("categoria"));

                lista.add(re);

            }
        } catch (SQLException ex) {
            Logger.getLogger(Revistas.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lista;

    }

    public RevistaModel listarporNombre(String nombre) {
        RevistaModel revista = new RevistaModel();
        String sql = "SELECT * FROM Revista WHERE nombre=" + nombre;
        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();

            while (rs.next()) {
                revista.setEtiqueta(rs.getString(3));
                revista.setCosto(rs.getDouble(3));
                revista.setFecha(rs.getString(4));
                revista.setCategoria(rs.getString(5));
                revista.setDescripcion(rs.getString(6));

            }
        } catch (SQLException ex) {
            Logger.getLogger(Revistas.class.getName()).log(Level.SEVERE, null, ex);
        }
        return revista;

    }

    public int Actualizar(RevistaModel re) {
        String sql = "UPDATE Revista set etiqueta=?, costo=?, fechaCreacion=?, categoria=?, descripcion=? WHERE nombre=?";

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.setString(2, re.getEtiqueta());
            ps.setDouble(3, re.getCosto());
            ps.setString(4, re.getFecha());
            ps.setString(5, re.getCategoria());
            ps.setString(6, re.getDescripcion());
            ps.setString(7, re.getNombre());
            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Revistas.class.getName()).log(Level.SEVERE, null, ex);
        }
        return r;
    }

    public void Eliminar(String nombre) {
        String sql = "DELETE FROM Revista WHERE nombre=" + nombre;

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Revistas.class.getName()).log(Level.SEVERE, null, ex);
        }

    }

}
