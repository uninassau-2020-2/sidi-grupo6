package com.reiCangaco.Api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.reiCangaco.Api.model.Fornecedor;


public interface FornecedorRepository extends JpaRepository<Fornecedor, Long>{
	
	Fornecedor findById(long cd_fornecedor);

}
