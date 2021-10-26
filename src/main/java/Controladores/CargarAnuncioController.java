/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Modelos.AnuncioModel;
import Services.Anuncio;
import com.mycompany.proyecto.mapping.MappingAnuncio;
import java.io.BufferedReader;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author karlamatias
 */
@WebServlet(name = "CargarAnuncio", urlPatterns = {"/CargarAnuncio"})
@MultipartConfig()
public class CargarAnuncioController extends HttpServlet {

  
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
        
           throws ServletException, IOException {
     /*  Part filePart = request.getPart("datafile");
        String fileName = filePart.getHeader("Content-type");
        InputStream fileStream = filePart.getInputStream();
        System.out.println(fileName);
        System.out.println(filePart.getHeader("Content-disposition"));

        try (BufferedReader in = new BufferedReader(new InputStreamReader(fileStream))) {
            String line = in.readLine();
            while (line != null) {
                System.out.println(line);
                line = in.readLine();
            }
            
            String filePath =line + "/" + "archivo";
             System.out.println(filePath);
            
        } catch (Exception ex) {
            // manejo de error
        }*/
        
  
        
   
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
        MappingAnuncio mapping = new MappingAnuncio(AnuncioModel.class);
        AnuncioModel modelo = mapping.ConvertirdeJson(body);
        
        
        //se imprime en consola 
        System.out.println("objeto");
        System.out.println(modelo);
        
        Anuncio anuncio = new Anuncio();
        anuncio.Agregar(modelo);
    }
    }

    

