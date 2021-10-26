
package Services;

import Config.Conexion;
import Modelos.RegistrarseModel;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;


public class Registrarse {

    private RegistrarseModel modeloR;
    Connection con;
    PreparedStatement ps;
    ResultSet rs;
    Conexion cn = new Conexion();
    int r;

    
    
    //agregar el usuario a la base de datos
    public int Agregar(RegistrarseModel us) {
        String sql = "INSERT INTO Usuario (usuario, password, rol) VALUES (?,?,?)";

        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            ps.setString(1, us.getUsuario());
            ps.setString(2, us.getPassword());
            ps.setString(3, us.getRol().toString());
            
            ps.executeUpdate();
        } catch (SQLException ex) {
            Logger.getLogger(Registrarse.class.getName()).log(Level.SEVERE, null, ex);
        }
        return r;
    }
   
    
    public List<RegistrarseModel> Listar() {
        List<RegistrarseModel> lista = new ArrayList<>();
        String sql = "SELECT * FROM Usuario";
        try {
            con = cn.Conectar();
            ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                RegistrarseModel re = new RegistrarseModel();
                re.setUsuario(rs.getString("usuario"));
                re.setPassword(rs.getString("password"));
                re.setRol(rs.getString("rol"));

                lista.add(re);

            }
        } catch (SQLException ex) {
            Logger.getLogger(Registrarse.class.getName()).log(Level.SEVERE, null, ex);
        }
        return lista;
    }
    
}
