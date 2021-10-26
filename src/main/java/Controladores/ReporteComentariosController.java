/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Config.ConexionSingleton;
import Services.Reporte;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.jasperreports.engine.JRException;

/**
 *
 * @author karlamatias
 */
@WebServlet(name = "ReporteComentariosController", urlPatterns = {"/ReporteComentarios"})
public class ReporteComentariosController extends HttpServlet {

    

    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       
        Reporte reportService = null;

        response.setContentType("application/pdf");
        response.setHeader("Content-disposition", "attachment; filename=reporte.pdf");

        String report = request.getParameter("report");

        try {
            if (report == null || report.equals("") || report.equals("1")) {
                reportService = new Reporte(ConexionSingleton.getConexionSingleton().getConnection());
                reportService.Comentarios(response.getOutputStream());
            } else {
            
            }
        } catch (IOException | JRException e) {
            // manejar la excepcion
            e.printStackTrace();
        }
        
        
    }

    
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
    }

   
}
