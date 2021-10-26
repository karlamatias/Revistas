/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Config.ConexionSingleton;
import Modelos.RegistrarseModel;
import Modelos.RevistaModel;
import Services.Reporte;
import com.mycompany.proyecto.mapping.MappingRegistrarse;
import com.mycompany.proyecto.mapping.MappingRevista;
import java.io.BufferedReader;
import java.io.IOException;
import java.time.LocalDate;
import java.util.logging.Level;
import java.util.logging.Logger;
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
@WebServlet(name = "ReporteController", urlPatterns = {"/reporte"})
public class ReporteController extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

    }

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
                reportService.Imprimir(response.getOutputStream());
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
        processRequest(request, response);
    }

}
