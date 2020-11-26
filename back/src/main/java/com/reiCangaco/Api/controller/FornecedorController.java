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

import com.reiCangaco.Api.model.Fornecedor;
import com.reiCangaco.Api.model.Produto;
import com.reiCangaco.Api.repository.FornecedorRepository;


@RestController
@CrossOrigin("*")
@RequestMapping(value="/api")
public class FornecedorController {
	
	
	@Autowired
	FornecedorRepository fornecedorRepository;
	
	@GetMapping("/fornecedor")
	public List<Fornecedor> listarFornecedor(){
		return fornecedorRepository.findAll();
	}
	
	@GetMapping("/fornecedor/{cd_fornecedor}/json")
	public ResponseEntity<Fornecedor> listarfornecedorID(@PathVariable(value="cd_fornecedor") long cd_fornecedor ){
		Fornecedor c = fornecedorRepository.findById(cd_fornecedor);
		if(c != null) {
		return new ResponseEntity<Fornecedor>(c, HttpStatus.OK);
				}
		else 
			return new ResponseEntity<Fornecedor>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/fornecedorSave")
	public Fornecedor SalvarFornecedor(@RequestBody Fornecedor fornecedor) {
		return fornecedorRepository.save(fornecedor);
	}
		
	@DeleteMapping("/fornecedorDelete")
	public void DeletarFornecedor(@RequestBody Fornecedor fornecedor) {
    fornecedorRepository.delete(fornecedor);
	}
	
	@PutMapping("/fornecedorUpdate")
	public Fornecedor AtualizarFornecedor(@RequestBody Fornecedor fornecedor) {
    return fornecedorRepository.save(fornecedor);
	}
	

}
