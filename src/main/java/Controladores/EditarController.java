/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Modelos.RevistaModel;
import com.mycompany.proyecto.mapping.MappingRevista;
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
@WebServlet(name = "EditarController", urlPatterns = {"/editar"})
public class EditarController extends HttpServlet {

    RevistaModel revM = new RevistaModel();
  
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        
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
        MappingRevista mapping = new MappingRevista(RevistaModel.class);
        RevistaModel modelo = mapping.ConvertirdeJson(body);
        
      
        
       /* Revistas rev = new Revistas();
            RevistaModel list = rev.listarporID(modelo.getCodigo());
            Gson s = new Gson();
            response.getWriter().append(s.toJson(list));*/
    }

   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

 
}
