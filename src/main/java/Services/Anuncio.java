/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Services;

import Config.Conexion;
import Modelos.AnuncioModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Anuncio {

    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    Conexion cn = new Conexion();
    int r;

    public int Agregar(AnuncioModel anuncio) {
        String sql = "INSERT INTO Anuncio (nombre, costo, dias, etiqueta, texto, imagen, video, fecha ) VALUES (?,?,?,?,?,?,?,?)";

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.setString(1, anuncio.getNombre());
            ps.setDouble(2, anuncio.getCosto());
            ps.setInt(3, anuncio.getDias());
            ps.setString(4, anuncio.getEtiqueta());
            ps.setString(5, anuncio.getTexto());
            ps.setString(6, anuncio.getImagen());
            ps.setString(7, anuncio.getVideo());
            ps.setString(8, anuncio.getFecha());

            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Anuncio.class.getName()).log(Level.SEVERE, null, ex);
        }
        return r;
    }

    public List<AnuncioModel> Listar() {
        List<AnuncioModel> lista = new ArrayList<>();
        String sql = "SELECT * FROM Anuncio";
        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                AnuncioModel anuncio = new AnuncioModel();
                anuncio.setNombre(rs.getString("nombre"));
                anuncio.setCosto(rs.getDouble("costo"));
                anuncio.setDias(rs.getInt("dias"));
                anuncio.setEtiqueta(rs.getString("etiqueta"));
                anuncio.setTexto(rs.getString("texto"));
                anuncio.setImagen(rs.getString("imagen"));
                anuncio.setVideo(rs.getString("video"));
                anuncio.setFecha(rs.getString("fecha"));

                lista.add(anuncio);

            }
        } catch (SQLException ex) {
            Logger.getLogger(Anuncio.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lista;
    }
}
