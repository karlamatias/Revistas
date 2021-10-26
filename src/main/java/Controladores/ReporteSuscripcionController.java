/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Config.ConexionSingleton;
import Services.Reporte;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
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
@WebServlet(name = "ReporteSuscripcionController", urlPatterns = {"/ReporteSuscripcion"})
public class ReporteSuscripcionController extends HttpServlet {

    String body = "";

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException, JRException {
        response.setContentType("text/html;charset=UTF-8");

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
        
        
        
       /* Reporte reportService = null;

        response.setContentType("application/pdf");
        response.setHeader("Content-disposition", "attachment; filename=reporte.pdf");

        String report = request.getParameter("report");

        if (report == null || report.equals("") || report.equals("2")) {
            reportService = new Reporte(ConexionSingleton.getConexionSingleton().getConnection());

            String startDateStr = request.getParameter("inicio");
            String endDateStr = request.getParameter("final");
            try {
                reportService.imprimirConfecha(response.getOutputStream(), LocalDate.parse(startDateStr), LocalDate.parse(endDateStr));
            } catch (JRException ex) {
                Logger.getLogger(ReporteSuscripcionController.class.getName()).log(Level.SEVERE, null, ex);
            }
        }*/

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        BufferedReader reader = request.getReader();

        String line = reader.readLine();

        while (line != null) {
            body = body + line;
            line = reader.readLine();

        }

        System.out.println("body: ");
        System.out.println(body);
    }

}
