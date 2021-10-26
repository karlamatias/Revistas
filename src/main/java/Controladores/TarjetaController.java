/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Modelos.TarjetaModel;
import Services.Tarjeta;
import com.mycompany.proyecto.mapping.MappingTarjeta;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet(name = "TarjetaController", urlPatterns = {"/tarjeta"})
public class TarjetaController extends HttpServlet {

   

   
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

    
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
        MappingTarjeta mapping = new MappingTarjeta(TarjetaModel.class);
        TarjetaModel modelo = mapping.ConvertirdeJson(body);
        
        //se imprime en consola 
        System.out.println("objeto");
        System.out.println(modelo);
        
        //para agregar a la base de datos el usuario que viene del fronted 
        Tarjeta rev = new Tarjeta();
        rev.agregarTarjeta(modelo);
    }

   
}
