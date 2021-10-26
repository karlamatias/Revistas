/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package Controladores;

import Modelos.RevistaModel;
import Services.Revistas;
import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author karlamatias
 */
@WebServlet(name = "BusquedaController", urlPatterns = {"/buscar"})
public class BusquedaController extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
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

        Revistas rev = new Revistas();
        List<RevistaModel> lista = rev.buscar(line);
        Gson s = new Gson();
        response.getWriter().append(s.toJson(lista));

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
