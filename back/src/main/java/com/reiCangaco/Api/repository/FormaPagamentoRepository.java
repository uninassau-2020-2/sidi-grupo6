package com.reiCangaco.Api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reiCangaco.Api.model.FormaPagamento;


public interface FormaPagamentoRepository extends JpaRepository<FormaPagamento, Long>{

	FormaPagamento findById(long cd_forma_pagamento);
	
}
