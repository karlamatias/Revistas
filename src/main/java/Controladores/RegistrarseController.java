/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Services.Registrarse;
import Modelos.RegistrarseModel;
import com.mycompany.proyecto.mapping.MappingRegistrarse;
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
@WebServlet(name = "RegistrarseController", urlPatterns = {"/registrarse"})
public class RegistrarseController extends HttpServlet {

   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        //para leer el Json que viene del fronted
        BufferedReader reader = request.getReader();
        String body = "";
        String line = reader.readLine();
        
        while(line!= null){
       body = body + line;
       line = reader.readLine();
       
        }
        System.out.println("body: ");
        System.out.println(body);
       
        //para obtener los valores que vienen del fronted
        MappingRegistrarse mapping = new MappingRegistrarse(RegistrarseModel.class);
        RegistrarseModel modelo = mapping.ConvertirdeJson(body);
        
        //se imprime en consola 
        System.out.println("objeto");
        System.out.println(modelo);
        
        //para agregar a la base de datos el usuario que viene del fronted 
        Registrarse reg = new Registrarse();
        reg.Agregar(modelo);

        
        
    }

 
}
