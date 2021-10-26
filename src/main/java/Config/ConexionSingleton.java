/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Config;

import java.sql.Connection;
import java.sql.DriverManager;

public class ConexionSingleton {
    
     private static final String usuario = "RevistaUser";
    private static final String clave = "R123";
    private static final String url = "jdbc:mysql://localhost:3306/Revistas?characterEncoding=utf8&useSSL=false";
   
    
    private static ConexionSingleton connectionSingleton = null;
    private Connection con = null;
    
     private ConexionSingleton() {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url, usuario, clave);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static ConexionSingleton getConexionSingleton() {
        if (connectionSingleton == null) {
            connectionSingleton = new ConexionSingleton();
        }

        return connectionSingleton;
    }
    
    public Connection getConnection() {
        return con;
    }
    
}
