package com.reiCangaco.Api.service;

import java.io.File;
import java.io.FileNotFoundException;
import java.sql.Connection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.ResourceUtils;

import com.reiCangaco.Api.model.Pedido;
import com.reiCangaco.Api.repository.PedidoRepository;

import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;

@Service
public class ReportService {
	
	@Autowired
	private PedidoRepository pedidorepository;
	
	
	public String gerarReport(String reportFormat) throws FileNotFoundException, JRException {
		List<Pedido> pedido = pedidorepository.findAll();
		String path = "C:\\Users\\Roberto\\Desktop\\Report";
		//carregar arquivo do report
		
		File file = ResourceUtils.getFile("classpath:vendas.jrxml");
		JasperReport jasperReport = JasperCompileManager.compileReport(file.getAbsolutePath());
		JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(pedido);
	
		Map<String, Object> parameters = new HashMap<>();
		parameters.put("createBy", "Extrato de Vendas");
		JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSource);
		
		if(reportFormat.equalsIgnoreCase("html")) {
			JasperExportManager.exportReportToHtmlFile(jasperPrint, path + "\\Extrato de Vendas.html");
		}
        if(reportFormat.equalsIgnoreCase("pdf")) {
			JasperExportManager.exportReportToPdfFile(jasperPrint,path + "\\Extrato de Vendas.pdf");
		}
		
		
		
		return "Relatório Gerado no Caminho " + path;
	}
	
	
	
	
	
	
	
	
}
