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

import com.reiCangaco.Api.model.FormaPagamento;
import com.reiCangaco.Api.repository.FormaPagamentoRepository;

@RestController
@CrossOrigin("*")
@RequestMapping("/api")
public class FormaPagamentoController {

	@Autowired
	FormaPagamentoRepository formapagamentoReposiroty;
	
	@GetMapping("/listFormaPagamento")
	public List<FormaPagamento> listarFormasPagamento(){
		return formapagamentoReposiroty.findAll();
	}
	
	@GetMapping("/listFormaPagamento/{cd_forma_pagamento}")
	public FormaPagamento ListarFormaPagamentoID(@PathVariable(value = "cd_forma_pagamento") long cd_forma_pagamento) {
		return formapagamentoReposiroty.findById(cd_forma_pagamento);
		
	}
	
	@PostMapping("/salvarFormaPagamento")
	public FormaPagamento saveFormaPagamento(@RequestBody FormaPagamento formapagamento) {
		return formapagamentoReposiroty.save(formapagamento);
		
	}
	
	@PutMapping("updateFormaPagamento")
	public FormaPagamento atualizarFormaPagamento(@RequestBody FormaPagamento formapagamento) {
		return formapagamentoReposiroty.save(formapagamento);
	}
	
	@DeleteMapping
	public void deletarFormaPagamento(@RequestBody FormaPagamento formapagamento) {
		formapagamentoReposiroty.delete(formapagamento);
	}
}
