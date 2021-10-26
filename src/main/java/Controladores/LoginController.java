/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Modelos.RegistrarseModel;
import Services.Login;
import com.google.gson.Gson;
import com.mycompany.proyecto.mapping.MappingLogin;
import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author karlamatias
 */
@WebServlet(name = "LoginController", urlPatterns = {"/ingresar"})
public class LoginController extends HttpServlet {

    RegistrarseModel login = new RegistrarseModel();
    Login loginBD = new Login();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

       

    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
         //para leer el Json que viene del fronted
        BufferedReader reader = request.getReader();
        String body = "";
        String line = reader.readLine();

        while (line != null) {
            body = body + line;
            line = reader.readLine();

        }

        System.out.println("body: ");
        System.out.println(body);

        
         //para obtener los valores que vienen del fronted
        MappingLogin mapping = new MappingLogin(RegistrarseModel.class);
        RegistrarseModel modelo = mapping.ConvertirdeJson(body);
        
       
        login = loginBD.Validar(modelo.getUsuario(), modelo.getPassword());

        //si existe el usuario en la base de datos, debera ingresar
        if (login.getUsuario() != null) {
            
            if(login.getRol().equals("Editor")){
            
            System.out.println("Bienvenido Editor");
            Gson s = new Gson();
            response.getWriter().append(s.toJson(modelo));
            }
            if(login.getRol().equals("Lector")){
            
            System.out.println("Bienvenido Lector");
             Gson s = new Gson();
            response.getWriter().append(s.toJson(modelo));
            }
            
            
        } else {
            System.out.println("Error ");
        }
        
        
        
    }

}
