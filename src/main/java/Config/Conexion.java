
package Config;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexion {

 /*private static final String usuario = "root";
    private static final String clave = "12345"
    private static final String url = "jdbc:mysql://localhost:3306/Revistas*/
    
    private static final String usuario = "RevistaUser";
    private static final String clave = "R123";
    private static final String url = "jdbc:mysql://localhost:3306/Revistas?characterEncoding=utf8&useSSL=false";
    Connection con;

    public Connection Conectar(){
       
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url,usuario,clave);
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
        } catch (SQLException ex) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
        }
        return con;
       
       }  
    
}
