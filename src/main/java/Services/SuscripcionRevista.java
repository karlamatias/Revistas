/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Services;

import Config.Conexion;
import Modelos.RevistaModel;
import Modelos.SuscripcionModel;
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
public class SuscripcionRevista {

    private RevistaModel modeloR;
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    Conexion cn = new Conexion();
    int r;

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
                re.setCosto(rs.getDouble("costo"));
                re.setDescripcion(rs.getString("descripcion"));
                re.setCategoria(rs.getString("categoria"));
                re.setAutor(rs.getString("autor"));

                lista.add(re);

            }
        } catch (SQLException ex) {
            Logger.getLogger(SuscripcionRevista.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lista;
    }

    public int Agregar(SuscripcionModel sus) {
        String sql = "INSERT INTO Suscribe (fechaSuscripcion, costoSuscripcion, tipoSuscripcion, revista, tarjeta, usuarioSuscriptor) VALUES (?,?,?,?,?,?)";

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.setString(1, sus.getFechaSuscripcion());
            ps.setDouble(2, sus.getCostoSuscripcion());
            ps.setString(3, sus.getTipoSuscripcion());
            ps.setString(4, sus.getRevista());
            ps.setInt(5, sus.getTarjeta());
            ps.setString(6, sus.getUsuarioSuscriptor());

            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(SuscripcionRevista.class.getName()).log(Level.SEVERE, null, ex);
        }
        return r;
    }
}
