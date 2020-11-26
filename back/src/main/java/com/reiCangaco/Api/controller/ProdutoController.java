package com.reiCangaco.Api.controller;

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
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

import com.reiCangaco.Api.repository.ProdutoRepository;
import com.reiCangaco.Api.model.Produto;



@RestController
@CrossOrigin("*")
@RequestMapping(value="/api")
public class ProdutoController {
	
	@Autowired
	ProdutoRepository produtoRepository;
	
	
	@GetMapping("/produtos")
	public List<Produto> listarProdutos(){
		return produtoRepository.findAll();
	}
	
	
	@GetMapping("/produto/{id_produto}/json")
	public ResponseEntity<Produto> listarProdutoID(@PathVariable(value="id_produto") long id_produto ){
		Produto p = produtoRepository.findById(id_produto);
		if(p != null) {
		return new ResponseEntity<Produto>(p,HttpStatus.OK);}
		else
			return new ResponseEntity<Produto>(HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/produtoSave")
	public Produto SalvarProduto(@RequestBody Produto produto) {
		return produtoRepository.save(produto);
	}
		
	@DeleteMapping("/produtoDelete")
	public void DeletarProduto(@RequestBody Produto produto) {
    produtoRepository.delete(produto);
	}
	
	@PutMapping("/produtoUpdate")
	public Produto AtualizarProduto(@RequestBody Produto produto) {
    return produtoRepository.save(produto);
	}
	
	
}
