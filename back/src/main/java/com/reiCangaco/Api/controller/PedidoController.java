package com.reiCangaco.Api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reiCangaco.Api.model.Pedido;
import com.reiCangaco.Api.repository.PedidoRepository;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/api")
public class PedidoController {
	
	@Autowired
	PedidoRepository pedidoRepository;
	
	@GetMapping(value="/ListarPedido")
	public List<Pedido> ListarPedido(){
		return pedidoRepository.findAll();
	}
	
	@GetMapping(value="/{cd_pedido}/ListaPedidoID")
	public Pedido listarPedidoID(@PathVariable(value="cd_pedido") long cd_pedido ) {
		return pedidoRepository.findById(cd_pedido);
		
	}
	
	@PostMapping("/pedidoSave")
	public Pedido SalvarPedido(@RequestBody Pedido pedido) {
		return pedidoRepository.save(pedido);
		
	}
	
	@PutMapping("/updatePedido")
	public Pedido AtualizarPedido(@RequestBody Pedido pedido) {
		return pedidoRepository.save(pedido);
		
	}
	
	@DeleteMapping("/deletePedido")
	public void DeletarPedido(@RequestBody Pedido pedido) {
		pedidoRepository.delete(pedido);
	}
	

}
