package com.reiCangaco.Api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.reiCangaco.Api.repository.VendedorRepository;
import com.reiCangaco.Api.model.User;
import com.reiCangaco.Api.model.Vendedor;


@RestController
@CrossOrigin("*")
@RequestMapping(value="api/")
public class VendedorController {
	
	@Autowired
	VendedorRepository vendedorrepository;
		
	
	
	@GetMapping(value="/vendedor")
	public List<Vendedor> ListarVendedor(){
		return vendedorrepository.findAll();
	}
	
	@GetMapping(value="/vendedor/{cd_vendedor}/json")
	public ResponseEntity<Vendedor> ListarVendedorCD(@PathVariable(value="cd_vendedor")long cd_vendedor){
		Vendedor v = vendedorrepository.findById(cd_vendedor);
		if(v !=  null) {
		return new ResponseEntity<Vendedor>(v,HttpStatus.OK);}
		else
			return new ResponseEntity<Vendedor>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping(value="/vendedorSave")
	public Vendedor inserirVendedor(@RequestBody Vendedor vendedor){
		return vendedorrepository.save(vendedor);
	}
	
	@DeleteMapping(value="/vendedorDelete")
	public void deletarVendedor(@RequestBody Vendedor vendedor){
		vendedorrepository.delete(vendedor);
	}
	
	@PutMapping(value="/vendedorUpdate")
	public Vendedor alterarVendedor(@RequestBody Vendedor vendedor){
		return vendedorrepository.save(vendedor);
	}
	
	@PostMapping("/login")
	public ResponseEntity<Vendedor> Login(@RequestBody Vendedor vendedor) {
		
		if(vendedorrepository.findByLogin(vendedor.getLogin()) != null && vendedorrepository.findBySenha(vendedor.getSenha()) != null ) {
			return new ResponseEntity<Vendedor>(vendedorrepository.findByLogin(vendedor.getLogin()), HttpStatus.OK);	
		}
		return new ResponseEntity<Vendedor>( HttpStatus.UNAUTHORIZED);
		
		
	}
	

}
