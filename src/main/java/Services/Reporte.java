
package Services;

import java.io.InputStream;
import java.io.OutputStream;
import java.sql.Connection;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import net.sf.jasperreports.engine.JRDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

public class Reporte {
    
    
   
    private Connection connection;

    public Reporte(Connection connection) {
        this.connection = connection;
    }
    
    public void Imprimir(OutputStream targetStream) throws JRException {
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/proyecto/reports/reporte1.jasper");
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, connection);
        
        JasperExportManager.exportReportToPdfStream(printer, targetStream);
    }
    
    public void ImprimirAnuncio(OutputStream targetStream) throws JRException {
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/proyecto/reports/Anuncio.jasper");
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, connection);
        
        JasperExportManager.exportReportToPdfStream(printer, targetStream);
    }

    public void RevistasComentadas(OutputStream targetStream) throws JRException {
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/proyecto/reports/RevistasComentadas.jasper");
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, connection);
        
        JasperExportManager.exportReportToPdfStream(printer, targetStream);
    }
    
    public void Suscripciones(OutputStream targetStream) throws JRException {
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/proyecto/reports/Suscripcion.jasper");
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, connection);
        
        JasperExportManager.exportReportToPdfStream(printer, targetStream);
    }
    
    public void Comentarios(OutputStream targetStream) throws JRException {
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/proyecto/reports/Comentarios.jasper");
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, connection);
        
        JasperExportManager.exportReportToPdfStream(printer, targetStream);
    }
    
    public void GananciaAnuncios(OutputStream targetStream) throws JRException {
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/proyecto/reports/GananciasAnuncio.jasper");
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, connection);
        
        JasperExportManager.exportReportToPdfStream(printer, targetStream);
    }
    
    public void GananciaRevistas(OutputStream targetStream) throws JRException {
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/proyecto/reports/GananciasRevista.jasper");
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, null, connection);
        
        JasperExportManager.exportReportToPdfStream(printer, targetStream);
    }
    

    public void imprimirConfecha(OutputStream targetStream, LocalDate startDate, LocalDate endDate) throws JRException {
        Date start = Date.from(startDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        Date end = Date.from(endDate.atStartOfDay(ZoneId.systemDefault()).toInstant());
        InputStream compiledReport = getClass().getClassLoader().getResourceAsStream("com/mycompany/proyecto/reports/Suscripcion.jasper");
        Map<String, Object> params = new HashMap<>();
        params.put("inicio", start);
        params.put("final", end);
        JasperPrint printer = JasperFillManager.fillReport(compiledReport, params, connection);

        JasperExportManager.exportReportToPdfStream(printer, targetStream);
    }

    
    
}
